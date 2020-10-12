import React, { Component } from "react";
// import "./SearchBar.scss";
import logo from "../../assets/Logo.png";
import CustomInput from "./custom-input/CustomInput";

class SearchBar extends Component {
  dataSearch = (searchItem) => {
    this.props.search(searchItem);
  };

  render() {
    return (
      <section className="search">
        <div className="container">
          <div className="search-padding">
            <div className="row">
              <div className="col-md-1">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="Logo"></img>
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <div className="search-input">
                  <CustomInput dataSearch={this.dataSearch}></CustomInput>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
