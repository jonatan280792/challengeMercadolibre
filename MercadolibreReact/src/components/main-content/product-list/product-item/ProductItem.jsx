import React, { Component } from "react";
import "./ProductItem.scss";
import logo from "../../../../assets/Logo.png";
import free_Shipping from '../../../../assets/images/ic_shipping.png';

class ProductItem extends Component {
  render() {
    console.log("---", this.props.product);
    return (
      <div key={this.props.product.id}>
        <div>
          <div className="items-article">
            <div className="section">
              <article>
                <div className="section-images">
                  <img src={this.props.product.picture} alt="Logo"></img>
                </div>
              </article>
              <article>
                <div className="section-details">
                  <div className="title">
                    <span>$ {this.props.product.price.amount}</span>
                    {this.props.product.free_shipping && <img src={free_Shipping} alt={this.props.product.title}/>}
                  </div>
                  <div className="description">
                    <span>$ {this.props.product.title}</span>
                  </div>
                </div>
              </article>
              <article>
                <div className="section-address">
                <span>{this.props.product.city_name}</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
