import React, { Component } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ButtonLoadMore } from "components/Button/Button"
import { Loader } from "components/Loader/Loader";

import { ImageGalleryList } from "./ImageGallery.styled"


const API_KEY = '31359912-5b88546d239f41508b7e3830d'

export class ImageGallery extends Component {
    state = {
        images: [],
        loading: false,
        page: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchingImageName
        const newName = this.props.searchingImageName
        const { page, images } = this.state

        if (prevName !== newName) {
            this.setState({ images: [], page: 1 })
        }

        if (prevName !== newName || prevState.page !== page) {
            this.setState({ loading: true });
            fetch(`https://pixabay.com/api/?q=${newName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(responce => {
                    if (responce.ok) {
                        return responce.json()
                    }
                    return Promise.reject(
                        new Error(toast.error(`We don't have images ${newName}`))
                    )
                })
                .then(image => this.setState((prevState) => ({ images: [...images, ...image.hits] })))
                .catch(() => toast.error(`We don't have images ${newName}`))
                .finally(() => this.setState({ loading: false }))
        }
    }

    onClickLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }))
    }

    render() {
        const { images, loading } = this.state
        return (
            <div>
                {loading && <Loader />}
                <ImageGalleryList>

                    {images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                    ))}
                </ImageGalleryList >
                {images.length !== 0 && <ButtonLoadMore onClickLoadMore={this.onClickLoadMore} />}
            </div>

        )
    }
}


ImageGallery.propTypes = {
    searchingImageName: PropTypes.string.isRequired,
}

