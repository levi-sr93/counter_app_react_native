import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';
const CounterConfigButton = ({operation}) => {
  return (
    <Container>
      <Text>{operation}</Text>
    </Container>
  );
};

export default CounterConfigButton;
