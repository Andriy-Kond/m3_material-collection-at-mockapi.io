import React, { Component } from "react";
import { Backdrop, Button, ModalWindow } from "./Modal.styled";

class Modal extends Component {
  componentDidMount = () => {
    // console.log("Modal componentDidMount");
    window.addEventListener("keydown", this.handleKeydownEsc);
  };

  componentWillUnmount() {
    // console.log("Modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeydownEsc);
  }

  handleKeydownEsc = e => {
    // console.log("Modal >> e.code:::", e.code);
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>
          {this.props.children}
          <Button type="button" onClick={this.props.toggleModal}>
            Close
          </Button>
        </ModalWindow>
      </Backdrop>
    );
  }
}

export default Modal;
