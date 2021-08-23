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
import {useSelector} from 'react-redux';

const Counters = () => {
  const navigation = useNavigation();
  const counterData = useSelector(state => state.counters.counters);

  const handleNewCounter = () => {
    navigation.navigate('Config');
  };

  const handleEditCounterCard = item => {
    navigation.navigate('Config', {item});
  };

  const renderItem = ({item}) => {
    return (
      <CounterCard
        key={item.id}
        title={item.title}
        countNumber={item.numbers}
        onPress={() => handleEditCounterCard(item)}
      />
    );
  };

  if (counterData.length === 0) {
    return (
      <NoContentFound>
        <NoContentText testID="no-counters-title">
          You don't have active counters
        </NoContentText>
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
