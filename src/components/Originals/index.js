import React from 'react';

import { Container, ContainerHeader, Title, Image } from './styles';

import { Ionicons } from '@expo/vector-icons'; 

import ImageBigOne from '../../assets/ImageBigOne.jpeg';
import ImageBigT from '../../assets/ImageBigT.jpeg';
import ImageBigTree from '../../assets/ImageBigTree.jpeg';
import ImageBigFor from '../../assets/ImageBigFor.jpeg';

import ScrollContainer from '../ScrollContainer';

const Originals = () => {
  return(
    <Container>
      <ContainerHeader>
        <Title>Originais Netflix</Title>
        <Ionicons name="ios-arrow-forward" size={20} color="#fff" />
      </ContainerHeader>
      <ScrollContainer>
        <Image source={ImageBigOne} resizeMode="stretch" />
        <Image source={ImageBigT} resizeMode="stretch" />
        <Image source={ImageBigTree} resizeMode="stretch" />
        <Image source={ImageBigFor} resizeMode="stretch" />
        <Image source={ImageBigOne} resizeMode="stretch" />
      </ScrollContainer>
    </Container>
  );
}

export default Originals;