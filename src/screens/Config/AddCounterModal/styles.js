import styled from 'styled-components/native';
import Colors from '../../../utils/constants';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.View`
  background-color: ${Colors.PlainWhite};
  width: 90%;
  height: 50%;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const AddCounterMainTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.DarkGray};
`;

export const CounterTitleInput = styled.TextInput`
  padding: 20px;
  background-color: ${Colors.LightGray};
  border-radius: 8px;
  color: ${Colors.DarkGray};
  font-size: 22px;
`;

export const ButtonsSection = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const CreateCardButton = styled.TouchableOpacity`
  background-color: ${Colors.SuccessGreen};
  padding: 10px;
  border-radius: 8px;
`;
export const CancelButton = styled.TouchableOpacity`
  background-color: ${Colors.DangerRed};
  padding: 10px;
  border-radius: 8px;
`;
