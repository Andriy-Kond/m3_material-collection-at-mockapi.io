import React, { Component } from "react";
import { Backdrop, Button, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeydownEsc);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydownEsc);
  }

  handleKeydownEsc = e => {
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
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>
          {this.props.children}
          <Button type="button" onClick={this.props.toggleModal}>
            Close
          </Button>
        </ModalWindow>
      </Backdrop>,
      document.querySelector("#edit-root-portal"),
    );
  }
}

export default Modal;
