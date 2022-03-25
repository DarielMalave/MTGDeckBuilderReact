import React from 'react';
import Item from './Item.js';

// This component holds all items in the Todo List
// items prop is an array holding all present items in the Todo List
export default function TodoList({items}) {
    return (
        <>
            <ul>
                {
                    items.map(item => {
                        return <Item key={item.id} name={item.name} completed={item.completed} />;
                    })
                }
            </ul>
        </>
    );
}