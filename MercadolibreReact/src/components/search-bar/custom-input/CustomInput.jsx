import React, { Component } from "react";
import search from "../../../assets/ic_Search.png";

class CustomInput extends Component {
  searchRef = React.createRef();

  searchItem = (e) => {
    e.preventDefault();
    this.props.dataSearch(this.searchRef.current.value);
  };

  render() {
    return (
      <div>
        <input
          ref={this.searchRef}
          className="input"
          placeholder="No dejes de buscar"
          type="text"
        ></input>
        
        <a onClick={this.searchItem}>
          <div className="btn-search">
            <div className="btn-search">
              <div className="btn-background">
                <img src={search} alt="" />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default CustomInput;
