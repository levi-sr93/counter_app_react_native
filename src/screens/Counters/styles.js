import styled from 'styled-components';
import Colors from '../../utils/constants';

export const Container = styled.SafeAreaView``;

export const Content = styled.View``;

export const NoContentFound = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const NoContentAnimation = styled.View`
  width: 300px;
  height: 300px;
`;

export const NoContentText = styled.Text`
  color: ${Colors.PlainWhite};
  font-size: 32px;
  font-weight: bold;
`;

export const AddNewCounterButton = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${Colors.DarkBlue};
  align-items: center;
  justify-content: center;
`;
