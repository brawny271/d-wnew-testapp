import React from "react";
import { render } from "@testing-library/react";
import Product from "./Products";
import App from "./App";


test('render app component',()=>{
    render(<App/>)
})


// test("component is renderd correctly",()=>{
//     const product = {
//         id: 3,
//         name: 'Mens Cotton Jacket',
//         price: 55.99,
//     }

//     const{getByText} = render(<Product product={product}/>);

//     const productId = getByText('3');

//     const productName =getByText('Mens Cotton Jacket');

//     const productPrice =getByText('$55.99')


//     expect(productId).toBeInTheDocument();
//     expect(productName).toBeInTheDocument();
//     expect(productPrice).toBeInTheDocument()

// })


test("component is renderd correctly",()=>{
    const product = {
        id: 19,
        name: 'Opna Womens Short Sleeve Moisture',
        price: 7.95,
    }

    const{getByText} = render(<Product product={product}/>);

    const productId = getByText('19');

    const productName =getByText('Opna Womens Short Sleeve Moisture');

    const productPrice =getByText('7.95')


    expect(productId).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument()

})


