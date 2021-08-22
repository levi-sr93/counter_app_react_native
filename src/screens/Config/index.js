import React, {useRef, useEffect, useState} from 'react';
import CounterConfigButton from '../../components/CounterConfigButton';
import LottieView from 'lottie-react-native';
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import addButtonEffect from '../../assets/add-action.json';
import removeButtonEffect from '../../assets/remove-action.json';
import clearCountButtonEffect from '../../assets/reset-action-1.json';

import {
  Container,
  CountersConfigSection,
  MainHeader,
  SelectedCounterSection,
  SelectedCounterHeader,
  ControlsHeader,
  NumberArea,
  SelectedCounterControls,
  SelectedCounterName,
  ActualNumber,
  ControlButton,
  ButtonLabelArea,
  ButtonLabel,
} from './styles';

import {Alert} from 'react-native';
import {
  addCounter,
  clearCounter,
  decrement,
  increment,
  removeCounter,
} from '../../redux/actions/countersActions';
import AddCounterModal from './AddCounterModal';

const Config = () => {
  const [counterInfo, setCounterInfo] = useState({
    title: '',
  });

  const [isControllersShown, setIsControllersShown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addProgress = useRef();
  const removeProgress = useRef();
  const resetProgress = useRef();

  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const globalCounterInfo = useSelector(state =>
    state.counters.counters.find(item => item.id === counterInfo.id),
  );

  function handleAddCounterModal() {
    setCounterInfo({title: ''});
    setIsModalVisible(true);
  }

  function handleAddCounter() {
    dispatch(addCounter(counterInfo));
    setIsModalVisible(!isModalVisible);
    navigation.navigate('Counters');
  }

  function handleRemoveCounter() {
    dispatch(removeCounter(counterInfo.id));
    setIsControllersShown(false);
    navigation.navigate('Counters');
  }

  function handleIncrement() {
    addProgress.current.play(2, 50);
    dispatch(increment(counterInfo.id));
  }

  function handleDecrement() {
    removeProgress.current.play(2, 30);
    dispatch(decrement(counterInfo.id));
  }

  function handleClearCount() {
    resetProgress.current.play(2, 60);
    const onPressYes = () => {
      dispatch(clearCounter(counterInfo.id));
    };
    Alert.alert(
      'Are you sure?',
      "If you press YES we can't recover the counter number 😢",
      [
        {
          text: 'Yes',
          onPress: onPressYes,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  }
  useEffect(() => {
    if (route.params?.item !== undefined) {
      setCounterInfo(route.params.item);
      setIsControllersShown(true);
    }
  }, [route.params]);

  return (
    <Container>
      <AddCounterModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        counterCardTitle={counterInfo.title}
        setCounterCardTitle={e => setCounterInfo({...counterInfo, title: e})}
        handleAddCounter={handleAddCounter}
      />
      <MainHeader>Counters</MainHeader>
      <CountersConfigSection>
        <CounterConfigButton
          operation="Add Counter"
          handlePress={handleAddCounterModal}
        />
        <CounterConfigButton
          operation="Remove Counter"
          handlePress={handleRemoveCounter}
        />
      </CountersConfigSection>

      {isControllersShown && (
        <SelectedCounterSection>
          <SelectedCounterHeader>Selected Counter</SelectedCounterHeader>

          <ControlsHeader>
            <SelectedCounterName>{counterInfo.title}</SelectedCounterName>
            <NumberArea>
              <ActualNumber>{globalCounterInfo?.numbers}</ActualNumber>
            </NumberArea>
          </ControlsHeader>
          <SelectedCounterControls>
            <ControlButton onPress={handleDecrement} activeOpacity={1}>
              <LottieView
                source={removeButtonEffect}
                progress={1}
                loop={false}
                autoPlay={false}
                ref={removeProgress}
              />
              <ButtonLabelArea>
                <ButtonLabel>Decrement</ButtonLabel>
              </ButtonLabelArea>
            </ControlButton>
            <ControlButton onPress={handleClearCount} activeOpacity={1}>
              <LottieView
                source={clearCountButtonEffect}
                progress={1}
                loop={false}
                autoPlay={false}
                ref={resetProgress}
              />
              <ButtonLabelArea>
                <ButtonLabel>Reset</ButtonLabel>
              </ButtonLabelArea>
            </ControlButton>
            <ControlButton onPress={handleIncrement} activeOpacity={1}>
              <LottieView
                source={addButtonEffect}
                progress={1}
                loop={false}
                autoPlay={false}
                ref={addProgress}
              />
              <ButtonLabelArea>
                <ButtonLabel>Increment</ButtonLabel>
              </ButtonLabelArea>
            </ControlButton>
          </SelectedCounterControls>
        </SelectedCounterSection>
      )}
    </Container>
  );
};

export default Config;
