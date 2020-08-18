import React from 'react';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons'; 

import {
  Container,
  Name,
  ContainerTypes,
  Type,
  Divider,
  ContainerOptions,
  ContentContainer,
  TypeButton,
  ContentContainerColor,
  TypeColor
} from './styles';

const RestHeader = () => {
  return(
    <Container
      animation="fadeIn"
      useNativeDriver
      duration={2000}
    >
      <Name>
        One summer can change Everything
      </Name>
      <ContainerTypes>
        <Type>
          Terror
        </Type>
        <Divider />

        <Type>
          Drama
        </Type>
        <Divider />

        <Type>
          Irreverente
        </Type>
        <Divider />

        <Type>
          Ficção
        </Type>

      </ContainerTypes>

      <ContainerOptions>
        <ContentContainer>
          <AntDesign name="plus" size={24} color="#fff" />
          <TypeButton>
            Minha Lista
          </TypeButton>
        </ContentContainer>

        <ContentContainerColor>
          <FontAwesome name="play" size={22} color="#000" />
          <TypeColor>
            Assitir
          </TypeColor>
        </ContentContainerColor>

        <ContentContainer>
        <Feather name="info" size={24} color="#fff" />
          <TypeButton>
            Saiba mais
          </TypeButton>
        </ContentContainer>
      </ContainerOptions>
    </Container>
  );
}

export default RestHeader;