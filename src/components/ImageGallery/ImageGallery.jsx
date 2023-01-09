import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ButtonLoadMore } from "components/Button/Button"
import { Loader } from "components/Loader/Loader";

import { ImageGalleryList } from "./ImageGallery.styled"


const API_KEY = '31359912-5b88546d239f41508b7e3830d'

export function ImageGallery({ searchingImageName }) {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [name, setName] = useState('')

    useEffect(() => {
        setImages([])
        setName(searchingImageName)
    }, [searchingImageName])

    useEffect(() => {
        if (name !== '') {
            setLoading(true)
            fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(responce => {
                    if (responce.ok) {
                        return responce.json()
                    }
                    return Promise.reject(
                        new Error(toast.error(`We don't have images ${name}`))
                    )
                })
                .then(image => setImages(prevState => [...prevState, ...image.hits]))
                .catch(() => toast.error(`We don't have images ${name}`))
                .finally(() => setLoading(false))
        }
    }, [name, page])

    const onClickLoadMore = () => {
        setPage(prevState => prevState + 1)
    }

    return (
        <div>
            {loading && <Loader />}
            <ImageGalleryList>

                {images.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
            </ImageGalleryList >
            {images.length !== 0 && <ButtonLoadMore onClickLoadMore={onClickLoadMore} />}
        </div>

    )
}

ImageGallery.propTypes = {
    searchingImageName: PropTypes.string.isRequired,
}

