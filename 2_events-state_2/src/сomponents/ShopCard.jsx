import React from "react";
import classes from './ShopCard.module.css';

export default function ShopCard({ card }) {
  return (
    <div className={classes.ShopCard}>
      <header className={classes.header}>
        <h3>{card.name}</h3>
        <span className={classes.Color}>{card.color}</span>
      </header>
      <img className={classes.img} src={card.img} alt="" />
      <footer className={classes.footer}>
        <div className={classes.Price}>${card.price}</div>
        <button>Add to cart</button>
      </footer>
    </div>
  );
}
