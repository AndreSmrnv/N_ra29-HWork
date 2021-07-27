import React from 'react'
import classes from './ShopItem.module.css';

export default function ShopItem({item}) {
  return (
    <div className={classes.ShopItem}>
      <div className={classes.Image}><img className={classes.img} src={item.img} alt="" /></div>
      
        <h3>{item.name}</h3>
      <span className={classes.Color}>{item.color}</span>
      
      <div className={classes.Price}>${item.price}</div>
        <button>Add to cart</button>
    </div>
  )
}
