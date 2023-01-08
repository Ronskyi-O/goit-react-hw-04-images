import React, { Component } from "react";
import { ImSearch } from "react-icons/im"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'

import { Header, SearchButton, SerchForm, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        searchingImage: '',
    }

    handleSearchingImageChange = event => {
        this.setState({
            searchingImage: event.currentTarget.value.toLowerCase()
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.searchingImage.trim() === '') {
            return toast.error("Incert searching image name !");
        }

        this.props.onSubmit(this.state.searchingImage)
        this.reset()
    }

    reset = () => {
        this.setState({
            searchingImage: '',
        })
    }

    render() {
        const { searchingImage } = this.state

        return (
            <Header>
                <SerchForm onSubmit={this.handleSubmit} >
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
                        onChange={this.handleSearchingImageChange}
                    />
                </SerchForm>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}