import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import {v4 as uuid} from "uuid";

function App() {
  // useState() is a hook (function) that effectively acts as a global variable
  // holding a state context
  // "items" is the global variable itself
  // "setItems" is a function used to change "items"
  const [items, setItems] = useState([]);
  const itemText = useRef();

  function addItem(e) {
    const itemName = itemText.current.value;
    if (itemName === '') return;
    console.log(itemName);
    setItems(previousItems => {
      return [...previousItems, {id: uuid(), name: itemName, completed: false}];
    });
    itemText.current.value = null;
  }

  return (
    <>
      {/* "items" is a prop i.e. parameter in the component */}
      <TodoList items={items}/>
      <input type="text" ref={itemText} />
      <button onClick={addItem}>Add Item</button>
      <button>Clear Completed Items</button>
      <div>0 items left to do</div>
    </>
  );
}

export default App;