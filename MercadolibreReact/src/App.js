import React, { Component } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import axios from "axios";
import MainContent from "./components/main-content/MainContent";
import SearchBar from "./components/search-bar/SearchBar";

class App extends Component {
  urlSearch = 'http://localhost:3001/api/items?q='
  state = {
    result: ''
  }
  search = async (searchItem) => {
    let result = await axios.get(`${this.urlSearch}${searchItem}`)
    this.setState({ result })
  }

  render() {
    return (
      <Router>
        <div>
          <SearchBar search={this.search}> </SearchBar>
          <div className="layout-pages">
            <MainContent result={this.state.result}> </MainContent>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
