import React from 'react';

const GroceryItems = ({ id, name, complete, itemClick }) => (
  <li style={ complete ? {...styles.items, ...styles.complete} : styles.items} onClick={ () => itemClick(id) }>
    {name}
  </li>
)

const styles = {
  items: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
}

export default GroceryItems;