import React, { Component } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types'

import { ImageGalleryListItem, Image } from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    render() {
        const { webformatURL, largeImageURL } = this.props
        const { isModalOpen } = this.state
        return (
            <ImageGalleryListItem>
                <Image src={webformatURL} alt="" onClick={this.openModal} />
                {isModalOpen && <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />}
            </ImageGalleryListItem >
        )
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}