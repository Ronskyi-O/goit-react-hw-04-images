import { useState } from "react";
import { ImSearch } from "react-icons/im"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'

import { Header, SearchButton, SerchForm, Input } from "./Searchbar.styled";

export function Searchbar({ onSubmit }) {
    const [searchingImage, setSearchingImage] = useState('')

    const handleSearchingImageChange = event => {
        setSearchingImage(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (searchingImage.trim() === '') {
            return toast.error("Incert searching image name !");
        }
        onSubmit(searchingImage)
        setSearchingImage('')
    }

    return (
        <Header>
            <SerchForm onSubmit={handleSubmit} >
                <SearchButton type="submit" >
                    <ImSearch />
                </SearchButton>
                <Input
                    type="text"
                    name="searchingImage"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchingImage}
                    onChange={handleSearchingImageChange}
                />
            </SerchForm>
        </Header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}