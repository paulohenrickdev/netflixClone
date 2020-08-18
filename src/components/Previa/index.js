import React from 'react';
import { Container, Name, List, Serie } from './styles';

import Barraca from '../../assets/perdido.webp'
import StarW from '../../assets/starW.jpg'
import Billions from '../../assets/billions.jpg'
import Monkey from '../../assets/monkey.jpg'
import Grays from '../../assets/grays.jpg'

const Previa = () => {
  return(
    <Container>
      <Name>Prévias</Name>
      <List>
        <Serie source={Barraca} resizeMode="cover"  />
        <Serie source={StarW} resizeMode="cover"  />
        <Serie source={Billions} resizeMode="cover"  />
        <Serie source={Monkey} resizeMode="cover"  />
        <Serie source={Grays} resizeMode="cover"  />
      </List>
    </Container>
  );
}

export default Previa;