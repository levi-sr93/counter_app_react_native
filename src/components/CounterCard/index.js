import React from 'react';
import {useEffect} from 'react';

import {Container, Title, NumberContainer, CountNumber} from './styles';

const CounterCard = ({title, countNumber, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>

      <NumberContainer>
        <CountNumber>{countNumber}</CountNumber>
      </NumberContainer>
    </Container>
  );
};

export default CounterCard;
