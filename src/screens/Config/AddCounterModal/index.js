import React from 'react';
import {Modal, Text} from 'react-native';

import {
  Container,
  Content,
  AddCounterMainTitle,
  CounterTitleInput,
  ButtonsSection,
  CreateCardButton,
  CancelButton,
} from './styles';

const AddCounterModal = ({
  isModalVisible,
  setIsModalVisible,
  counterCardTitle,
  setCounterCardTitle,
  handleAddCounter,
}) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <Container onPress={() => setIsModalVisible(!isModalVisible)}>
        <Content>
          <AddCounterMainTitle testID="text-title">
            Please give your card a name
          </AddCounterMainTitle>
          <CounterTitleInput
            testID="input-card-name"
            placeholder="Your counter card name"
            value={counterCardTitle}
            onChangeText={setCounterCardTitle}
            autoCorrect={false}
          />
          <ButtonsSection>
            <CancelButton onPress={() => setIsModalVisible(!isModalVisible)}>
              <Text>Cancel</Text>
            </CancelButton>
            <CreateCardButton onPress={handleAddCounter}>
              <Text>Create</Text>
            </CreateCardButton>
          </ButtonsSection>
        </Content>
      </Container>
    </Modal>
  );
};

export default AddCounterModal;
