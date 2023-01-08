import React, { Component } from "react";
import { createPortal } from 'react-dom'
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from 'prop-types'


const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeOnEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeOnEscape)
    }

    closeOnEscape = event => {
        if (event.code === 'Escape') {
            this.props.onClose()
        }
    }

    closeOnBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(
            <Overlay onClick={this.closeOnBackdropClick}>
                <ModalWindow>
                    <img src={this.props.largeImageURL} alt="" />
                </ModalWindow>
            </Overlay>, modalRoot
        )
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}