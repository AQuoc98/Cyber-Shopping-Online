import React, { Component } from "react";

class PopupSmartPhone extends Component {
  render() {
    return (
      <div
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        id={this.props.id}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td>{this.props.desc}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupSmartPhone;
