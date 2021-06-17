import React from 'react';

import {Container, Title, Description} from './styles'

const ItemList = ({title, description, userColor}) => {


  return (
    <Container userColor = {userColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default ItemList;