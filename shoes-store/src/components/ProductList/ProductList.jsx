import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderProductList = () => {
    const { productsData,viewDetail } = this.props;
    return productsData.map((item, index) => {
      return <div className="col-4 mt-5" key={index}>
        <ProductItem item={item} viewDetail={viewDetail} />
      </div>
    })
  }
  render() {
    return (
      <div className='row'>
        {this.renderProductList()}
      </div>
    )
  }
}
