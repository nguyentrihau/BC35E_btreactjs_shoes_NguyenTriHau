import React, { Component } from 'react'
import Modal from './Modal/Modal'
import ProductList from './ProductList/ProductList'
import Products from '../data.json'
// console.log(Products);

export default class ShoeStore extends Component {
  state = {
    productDetail:{
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }
  viewDetail = (productClick)=>{
    this.setState({
      productDetail:productClick
    })
  }
  render() {
    return (
      <div>
        <h2 className='text-center mt-2'>Shoe Shop</h2>
        <ProductList productsData={Products} viewDetail = {this.viewDetail} />
        <Modal prodDetail={this.state.productDetail}/>
      </div>
    )
  }
}
