import React from 'react';
import Card from './Card';
import CardThumbnail from './CardThumbnail';

import { dataCards } from '../utils/mockData';



export default function Cards() {
  
  return (
    <>
      {dataCards.map((item,indx) => (
        <Card key={indx} card={item} >
          {item.img && <CardThumbnail src={item.img} />}
        </Card>
      ))}
    </>
  );
}
