import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styles';

import ImageContainer from '../../components/ImageContainer';
import Previa from '../../components/Previa';
import MyList from '../../components/MyList';
import Banner from '../../components/Banner';
import Originals from '../../components/Originals';
import Rising from '../../components/Rising';

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <ImageContainer />
        <Previa />
        <MyList />
        <Banner />
        <Originals />
        <Rising />
      </ScrollView>
    </Container>
  );
}

export default Home;