import React from 'react';

import { Scroll } from './styles';

const ScrollContainer = ({ children }) => {
  return(
    <Scroll>
      {children}
    </Scroll>
  )
}

export default ScrollContainer;