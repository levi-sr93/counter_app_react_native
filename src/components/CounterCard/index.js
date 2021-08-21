import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, NumberContainer, CountNumber} from './styles';

const CounterCard = ({title, countNumber}) => {
  const navigation = useNavigation();
  function handleEditCounterCard() {
    navigation.navigate('Config');
  }
  return (
    <Container onPress={handleEditCounterCard}>
      <Title>{title}</Title>

      <NumberContainer>
        <CountNumber>{countNumber}</CountNumber>
      </NumberContainer>
    </Container>
  );
};

export default CounterCard;
