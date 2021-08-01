import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken && bearerToken.startsWith("Bearer")) {
    try {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!bearerToken) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
