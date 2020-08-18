import React from 'react';

import { Container, Name } from './styles';

import RickAndMorty from '../../assets/rick.jpg';
import Suits from '../../assets/suits.jpg';
import Narcos from '../../assets/narcos.jpg';
import Friends from '../../assets/Friends.jpg';
import Lost from '../../assets/lost.jpg';
import Prision from '../../assets/prision.jpg';

import ScrollContainer from '../ScrollContainer';
import Pictures from '../Pictures';

const MyList = () => {
  return(
    <Container>
      <Name>Minha lista</Name>
      <ScrollContainer>
        <Pictures image={Suits} />
        <Pictures image={RickAndMorty} />
        <Pictures image={Narcos} />
        <Pictures image={Friends} />
        <Pictures image={Lost} />
        <Pictures image={Prision} />
      </ScrollContainer>
    </Container>
  );
}

export default MyList;