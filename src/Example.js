import React from 'react';
import Product from './Product'

function Example() {
    const person = "John";
    return (
        <div>
            <Product ismi={person}/>
        </div>
    )
}

export default Example

//functional component