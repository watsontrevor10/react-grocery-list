import React from 'react';
import GroceryItems from './GroceryItems';

const List = ({ items, name, itemClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map(item => <GroceryItems key={item.id} {...item} itemClick={itemClick} />)}
    </ul>
  </div> 
)

export default List;