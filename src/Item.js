import React from 'react';

export default function Item({id, name, completed}) {
    return(
            <li>
                {name}
                <input type="checkbox" defaultChecked={completed} />
            </li>
    );
}