import React, { Component } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Smartphone from "./components/Smartphone";
import Laptop from "./components/Laptop";
import Promotion from "./components/Promotion";
import "./App.css";
import smartphone from "./data/smartphone";
import laptop from "./data/laptop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spInfo: smartphone,
      ltInfo: laptop,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Smartphone spInfo={smartphone} />
        <Laptop ltInfo={laptop} />
        <Promotion />
      </div>
    );
  }
}

export default App;
