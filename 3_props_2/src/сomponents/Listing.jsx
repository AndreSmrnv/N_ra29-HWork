import React from "react";
import Card from "./Card";
import etsy from '../data/etsy.json';

export default function Listing() {
  const items = etsy;
  console.log(etsy);
  return (
    <div className="item-list">
      {items.map((item,indx) => {
        return <Card item={item} key={indx} />
      })}
    </div>
  );
}




