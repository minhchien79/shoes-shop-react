import React, { Component } from "react";
import ProductList from "./productList";
import Modal from "./Modal";
import dataJson from "./data.json"; 

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: null
    };
  }

  setStateModal = (product) => {
    this.setState({
      productDetail: product
    });
  };

  render() {
    return (
      <div>
        <h1 className="p-5 text-center">Shoes Shop</h1>
        <ProductList
          productsData={dataJson}
          setStateModal={this.setStateModal}
        />
        {this.state.productDetail && (
          <Modal content={this.state.productDetail} />
        )}
      </div>
    );
  }
}
