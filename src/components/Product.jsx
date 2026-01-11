import React from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { useCart } from "../context/CartContext";

export default function ({ mushroom }) {
  const { addToCart } = useCart();

  const navigate = useNavigate();

  return (
    <div>
      <Card className="p-5">
        <CardImg
          className="w-full aspect-video object-cover object-top"
          src={mushroom.img}
          alt={mushroom.title}
        />
        <CardBody>
          <CardTitle className="font-bold pt-2 text-md" tag="h5">
            {mushroom.title}
          </CardTitle>
          <CardText className="text-sm font-light">
            {mushroom.price} TL
          </CardText>
          <Button
            onClick={() => addToCart(mushroom)}
            className="border border-amber-200 p-1 text-xs bg-amber-100"
          >
            Sepete Ekle
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
