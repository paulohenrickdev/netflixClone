import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import mundoMisterio from '../../assets/mundoMisterio.jpg';

import { Container, Title, Image, ContainerActions, ContainerPlay, TextPlay, ContainerList, TextList } from './styles';

const Banner = () => {
  return(
    <Container>
      <Title>Já disponível: Temporada 1</Title>
      <Image source={mundoMisterio} resizeMode="stretch" />

      <ContainerActions>
        <ContainerPlay>
          <AntDesign name="caretright" size={24} color="#000" />
          <TextPlay>Assistir</TextPlay>
        </ContainerPlay>

        <ContainerList>
          <AntDesign name="plus" size={24} color="#fff" />
          <TextList>Minha lista</TextList>
        </ContainerList>
      </ContainerActions>
    </Container>
  )
}

export default Banner;