import React from 'react';
import {FlatList} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

import CounterCard from '../../components/CounterCard';

import NoContentAnim from '../../assets/empty-action.json';

import {
  Container,
  Content,
  NoContentFound,
  NoContentText,
  NoContentAnimation,
  AddNewCounterButton,
} from './styles';
import Colors from '../../utils/constants';

const counterData = [
  {id: 1, title: 'Counter #1', numbers: '003'},
  {id: 2, title: 'Counter #2', numbers: '010'},
  {id: 3, title: 'Counter #3', numbers: '100'},
  {id: 4, title: 'Counter #4', numbers: '150'},
];

const Counters = () => {
  const navigation = useNavigation();
  const handleNewCounter = () => {
    navigation.navigate('Config');
  };
  const renderItem = ({item}) => {
    return (
      <CounterCard
        key={item.id}
        title={item.title}
        countNumber={item.numbers}
      />
    );
  };

  if (counterData.length < 1) {
    return (
      <NoContentFound>
        <NoContentText>You don't have active counters</NoContentText>
        <NoContentAnimation>
          <LottieView source={NoContentAnim} progress={0} loop autoPlay />
        </NoContentAnimation>
        <AddNewCounterButton onPress={handleNewCounter}>
          <Icon name="plus" size={40} color={Colors.PlainWhite} />
        </AddNewCounterButton>
      </NoContentFound>
    );
  }

  return (
    <Container>
      <Content>
        <FlatList
          data={counterData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </Content>
    </Container>
  );
};

export default Counters;
