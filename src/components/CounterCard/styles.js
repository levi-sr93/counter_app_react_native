import {Platform} from 'react-native';
import styled from 'styled-components';

import Colors from '../../utils/constants';

export const Container = styled.TouchableOpacity`
  margin: 10px auto;
  border-radius: 8px;
  height: 200px;
  width: 90%;
  background: ${Colors.PlainWhite};
  padding: 10px;
  border: 1px solid ${Colors.DarkGray};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.DarkGray};
`;

export const NumberContainer = styled.View`
  width: 100%;
  height: 90%;
  padding-right: 30px;
  justify-content: center;
  align-items: flex-end;
`;

export const CountNumber = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: ${Colors.DarkGray};
`;
