import React, { Component } from "react";

export default class ProductItem extends Component {
  handleDetailProduct = () => {
    const { product, setStateModal } = this.props;
    setStateModal(product);
  };

  render() {
    const { name, image } = this.props.product;
    return (
      <div className="col-sm-4 py-3">
        <div className="card">
          <img className="card-img-top img-fluid" src={image} alt={name} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"
              onClick={this.handleDetailProduct}
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
