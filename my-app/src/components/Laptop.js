import React, { Component } from "react";

class Laptop extends Component {
  render() {
    let elmLaptop = this.props.ltInfo.map((laptop, index) => {
       return <div
        className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={index} >
        <div className="container">
          <div className="card bg-light" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={laptop.img}
              alt="this is laptop"
              style={{ maxWidth: "100%", height: "250px" }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{laptop.name}</h4>
              <p className="card-text">{laptop.desc}</p>
              <a href="#" className="btn btn-primary mr-1">
                Detail
              </a>
              <a href="#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>;
    });
    return (
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">{elmLaptop}</div>
      </section>
    );
  }
}

export default Laptop;
