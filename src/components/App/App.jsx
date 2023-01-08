import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery"

import { Container } from './App.styled'

export function App() {
  const [searchingImageName, setSearchingImageName] = useState('')

  const handleFormSubmit = searchingImageName => {
    setSearchingImageName(searchingImageName)
  }

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchingImageName={searchingImageName} />
      <ToastContainer position="top-center" autoClose={2000} />
    </Container >
  );
}


