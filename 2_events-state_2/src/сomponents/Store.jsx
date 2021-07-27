import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from "../itemData";

function Store() {

  const [typeIcon, setTypeIcon] = useState('view_list');

  function toggleIcon() {
    typeIcon === 'view_list' ? setTypeIcon('view_module') : setTypeIcon('view_list');    
  }

  return (
    <div className="App">
      
      <IconSwitch
        icon={typeIcon}
        onSwitch={toggleIcon}
      />
      {typeIcon === 'view_list' ?
        <CardsView cards={ products}/> 
        :
        <ListView items={ products}/>
      }  
      
    </div>
  );
}


export default Store;

