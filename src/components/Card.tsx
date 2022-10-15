import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Props } from "./CardsCont";

import { FaStar } from "react-icons/fa";

const Card = ({ id, title, price, stars, img }: Props) => {
  return (
    <Link to={`/CardDetail/${id}`} className="Card Card-link">
      <img className="Card-img" src={require(`../img/${img}.jpg`)} alt="" />
      <div>
        <p className="Card Card-h2">{title}</p>
        <p className="price">{price}</p>
        {Array.from(Array(stars).keys()).map((el) => {
          return <i key={`stars-${id}-${el}`} className="fa fa-star"></i>;
        })}
      </div>
    </Link>
  );
};

export default Card;
