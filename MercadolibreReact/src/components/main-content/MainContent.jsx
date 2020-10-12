import React, { Component } from "react";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import "./MainContent.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./product-list/ProductList";

class MainContent extends Component {

  getProductList() {
    return this.props.result.data ? this.props.result : {};
  }

  render() {
    return (
      <Router>
        <div>
          <Breadcrumb></Breadcrumb>
          <switch>
            <Route>
              <ProductList products={this.getProductList()}></ProductList>
            </Route>
          </switch>
        </div>
      </Router>
    );
  }
}

export default MainContent;
