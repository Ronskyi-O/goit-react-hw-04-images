import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types'

import { ImageGalleryListItem, Image } from './ImageGalleryItem.styled'

export function ImageGalleryItem({ webformatURL, largeImageURL }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <ImageGalleryListItem>
            <Image src={webformatURL} alt="" onClick={openModal} />
            {isModalOpen && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
        </ImageGalleryListItem >
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}