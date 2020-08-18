import React from 'react';

import { Image } from './styles';

const Pictures = ({ image }) => {
  return <Image source={image} resizeMode="stretch" />;
}

export default Pictures;