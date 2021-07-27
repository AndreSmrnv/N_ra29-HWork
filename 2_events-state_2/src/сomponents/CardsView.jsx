import React from 'react'
import ShopCard from './ShopCard'
import classes from './CardsView.module.css';

export default function CardsView({cards}) {
  return (
    <div className={classes.CardsView}>
      {cards.map((card,indx) => 
        <ShopCard card={card} key={indx}/>
      )}
    </div>
  )
}
