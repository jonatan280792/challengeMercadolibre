import React, { Component } from "react";
// import "./Breadcrumb.scss";
import icon from "../../../assets/icons/arrow.svg";

class Breadcrumb extends Component {
  render() {
    // return <nav aria-label="breadcrumb">
    //     <ol className="breadcrumb">
    //         <li className="breadcrumb-item"><a href="#">Home</a></li>
    //         <li className="breadcrumb-item"><a href="#">Library</a></li>
    //         <li className="breadcrumb-item active" aria-current="page">Data</li>
    //     </ol>
    // </nav>
    return (
      <div className="container">
        <section className="breadcrumb-section">
          <ol className="breadcrumb">
            <li>
              Home
              <img src={icon} className="icon-breadcrumb"></img>
            </li>
            <li>
              Library
              <img src={icon} className="icon-breadcrumb"></img>
            </li>
            <li>
              Data
              <img src={icon} className="icon-breadcrumb"></img>
            </li>
          </ol>
        </section>
      </div>
    );
  }
}

export default Breadcrumb;
