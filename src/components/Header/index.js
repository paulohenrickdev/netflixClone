import React from 'react';

import LogoImage from '../../assets/logo.jpg';

import { Container, Logo, Options } from './styles';

const Header = () => {
  return(
    <Container
      animation="fadeIn"
      useNativeDriver
      duration={2000}
    >
      <Logo
        source={LogoImage}
      />
      <Options>Séries</Options>
      <Options>Filmes</Options>
      <Options>Minha lista</Options>
    </Container>
  );
}

export default Header;