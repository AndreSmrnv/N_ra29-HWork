import React from 'react'
import ShopItem from './ShopItem'

export default function ListView({items}) {
  return (
    <div>
      {items.map((item,indx) => 
        <ShopItem item={item} key={indx}/>
      )}
    </div>
  )
}
