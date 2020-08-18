import React from 'react';

import BackgroundImage from '../../assets/banner.jpg'

import { Container, ImageBackground } from './styles';

import Header from '../Header';
import RestHeader from '../RestHeader';

const ImageContainer = () => {
  return(
    <Container>
      <ImageBackground 
        source={BackgroundImage}
        resizeMode="stretch"
      >
        <Header />
        <RestHeader />
      </ImageBackground>
    </Container>
  );
}

export default ImageContainer;