import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    const {prodDetail} = this.props;
    return (
      <div>
        <div>
          {/* Button to Open the Modal */}
          {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button> */}
          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">{prodDetail.name}</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="row bg_modal">
                    <div className="col-7">
                    <img src={prodDetail.image} className='img-fluid' alt="..." />
                    </div>
                    <div className="col-5 prod_content">
                    <p className='price'>Price: <span>{prodDetail.price} $</span></p>
                    <p className='description'><span>Description: </span> <i> {prodDetail.description}</i></p>
                    <p className='quantify'>Quantity:{prodDetail.quantity}</p>
                    </div>
                  </div>                  
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success" data-dismiss="modal">Add to card</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
