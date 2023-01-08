import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery"

import { Container } from './App.styled'

export class App extends Component {
  state = {
    searchingImageName: '',
  }

  handleFormSubmit = searchingImageName => {
    this.setState({ searchingImageName })
  }

  render() {
    const { searchingImageName } = this.state
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchingImageName={searchingImageName} />
        <ToastContainer position="top-center" autoClose={2000} />
      </Container >
    );
  }
};


