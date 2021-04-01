import React from 'react'
import './List.css'

const List =({title,items})=> {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {items.map(item=>
                    <li key={item.label}>
                        <strong>{item.label}</strong>{item.value}
                    </li>
                )}
            </ul>
        </>
    );
}

export default List
