import React, { Component } from "react";
import "./ProductList.scss";
import ProductItem from "../product-list/product-item/ProductItem";

class ProductList extends Component {
  setProductList() {
    console.log("-->", this.props.products);
    return this.props.products.data == undefined ? (
      <div></div>
    ) : (
      this.props.products.data.items.slice(0,4).map((item) => (
        <ProductItem product={item}></ProductItem>
      ))
    );
  }

  render() {
    return (
      <section className="section-list">
        <div className="container">
          {this.setProductList()}
        </div>
      </section>
    );
  }
}

export default ProductList;
