import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../utils/constants';

import {Container} from './styles';

const CounterConfigButton = ({operation, handlePress, icon}) => {
  return (
    <Container onPress={handlePress}>
      {icon && <Icon name={icon} size={32} color={Colors.DarkGray} />}
      <Text>{operation}</Text>
    </Container>
  );
};

export default CounterConfigButton;
