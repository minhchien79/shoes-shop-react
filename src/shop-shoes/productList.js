import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;
    return (
      <div className="container">
        <div className="row">
          {productsData.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              setStateModal={setStateModal}
            />
          ))}
        </div>
      </div>
    );
  }
}
