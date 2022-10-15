import console from "console";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../library";
import Card from "./Card";

export interface Props {
  id: number;
  title: string;
  price: string;
  desc: string;
  stars: number;
  img: string;
}

const CardsCont = () => {
  return (
    <div>
      <h1 className="CardCont-title">Products</h1>
      <div className="CardCont">
        {products.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CardsCont;
