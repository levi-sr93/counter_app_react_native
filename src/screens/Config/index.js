import React, {useRef} from 'react';
import CounterConfigButton from '../../components/CounterConfigButton';
import LottieView from 'lottie-react-native';

import addButtonEffect from '../../assets/add-action-1.json';
import removeButtonEffect from '../../assets/remove-action.json';
import clearCountButtonEffect from '../../assets/reset-action.json';

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

const Config = () => {
  const addProgress = useRef();
  const removeProgress = useRef();
  const resetProgress = useRef();

  function handleIncrement() {
    addProgress.current.play(2, 50);
  }

  function handleDecrement() {
    removeProgress.current.play(2, 30);
  }

  function handleClearCount() {
    resetProgress.current.play(2, 60);
    const onPressYes = () => {
      console.log('Limpando...');
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
  return (
    <Container>
      <MainHeader>Counters</MainHeader>
      <CountersConfigSection>
        <CounterConfigButton operation="Add Counter" />
        <CounterConfigButton operation="Remove Counter" />
      </CountersConfigSection>

      <SelectedCounterSection>
        <SelectedCounterHeader>Selected Counter</SelectedCounterHeader>

        <ControlsHeader>
          <SelectedCounterName>Counter #1</SelectedCounterName>
          <NumberArea>
            <ActualNumber>1</ActualNumber>
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
              progress={0}
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
    </Container>
  );
};

export default Config;
