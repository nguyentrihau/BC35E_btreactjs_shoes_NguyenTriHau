import React, { Component } from 'react'

export default class Product extends Component {
  renderProductItem = () => {
    const {item} = this.props;
    return <div className="card text-left" style={{cursor:'pointer'}}  data-toggle="modal" data-target="#myModal" onClick={()=>{
            this.props.viewDetail(item)
    }}>
      <img src={item.image} className='img-fluid' alt="..." />
      <div className="card-body">
        <h4>{item.name}</h4>
        <p>{item.price} $</p>
        <button className="btn btn-dark" style={{background:'black'}}>add to card <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </div>
    </div>
  }
  render() {

    return (
      <div>
        {this.renderProductItem()}
      </div>
    )
  }
}
