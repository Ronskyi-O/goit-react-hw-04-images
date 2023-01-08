import { useEffect } from "react";
import { createPortal } from 'react-dom'
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from 'prop-types'


const modalRoot = document.querySelector('#modal-root')

export function Modal({ largeImageURL, onClose }) {

    useEffect(() => {
        const closeOnEscape = event => {
            if (event.code === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', closeOnEscape);
        return () => {
            window.removeEventListener('keydown', closeOnEscape)
        }
    }, [onClose])

    const closeOnBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose()
        }
    }

    return createPortal(
        <Overlay onClick={closeOnBackdropClick}>
            <ModalWindow>
                <img src={largeImageURL} alt="" />
            </ModalWindow>
        </Overlay>, modalRoot
    )
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}