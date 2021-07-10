import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  ListGroup,
  Col,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Messages from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;
  const history = useHistory();

  const qty = location.search;

  return <div>Cart</div>;
};

export default CartScreen;
