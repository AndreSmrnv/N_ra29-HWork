import React from "react";
import { currencySymbol, titleSlice, quantityLevel } from "../services/func";


export default function Card({ item }) {
  
  return (
    <div className="item" >
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage && item.MainImage.url_570xN} alt={ item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {item.title && titleSlice(item.title)}
        </p>
        <p className="item-price">
          {currencySymbol(item.currency_code)}{item.price}
        </p>
        <p className={`item-quantity ${quantityLevel(item.quantity)}`}>
          {item.quantity}
        </p>
      </div>
    </div>
  );
}


