import React from "react";
import { Outlet, useParams } from "react-router-dom";
import products from "../library";
import ErrorPage from "./ErrorPage";

const CardDetail = () => {
  const { id } = useParams();

  let product;

  if (id) {
    product = products.find((product) => product.id === +id);
  }

  if (!product) {
    return <ErrorPage />;
  }

  const { id: productId, title, desc, price, stars } = product;
  return (
    <div>
      <div className="Banner">
        <h1 className="Banner-h1">{title}</h1>
      </div>
      <div className="CardDetail-info-cont">
        <img
          className="CardDetail-img"
          src={require(`../img/${productId}.jpg`)}
          alt=""
        />
        <div className="CardDetail-info">
          <p className="CardDetail-price">{price}</p>
          <h2 className="CardDetail-title">{title}</h2>
          {Array.from(Array(stars).keys()).map((el) => {
            return <i key={`stars-${id}-${el}`} className="fa fa-star"></i>;
          })}
          <p className="CardDetail-p">{desc}</p>
          <button className="CardDetail-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
