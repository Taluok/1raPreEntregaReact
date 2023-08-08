import React from 'react';


const ItemListContainer = ({greeting}) => {
    return (
        <div className="item-list container">
            <h1 className="display-2 d-flex justify-content-center align-items-center">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer