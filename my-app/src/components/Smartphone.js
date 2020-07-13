import React, { Component } from "react";
import PopupSmartPhone from "./PopupSmartPhone";
import swal from 'sweetalert';

class Smartphone extends Component {
  handleCart = () => {
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  render() {
    let elmSmartphone = this.props.spInfo.map((smartphone, index) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
          key={index}
        >
          <div className="container">
            <div className="card bg-light" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src={smartphone.img}
                alt="this is phone"
                style={{ maxWidth: "100%", height: "250px" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{smartphone.name}</h4>
                <p className="card-text">{smartphone.desc}</p>
                <a
                  className="btn btn-primary mr-1"
                  data-target={`#${smartphone.id}`}
                  data-toggle="modal"
                >
                  Detail
                </a>
                <a
                  className="btn btn-danger"
                  onClick={this.handleCart}
                >
                  Cart
                </a>
              </div>
            </div>
          </div>
          <PopupSmartPhone
            id={smartphone.id}
            name={smartphone.name}
            desc={smartphone.desc}
            img={smartphone.img}
          />
        </div>
      );
    });

    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5  bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{elmSmartphone}</div>
      </section>
    );
  }
}

export default Smartphone;
