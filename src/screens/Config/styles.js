import styled from 'styled-components';

import Colors from '../../utils/constants';

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const CountersConfigSection = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const MainHeader = styled.Text`
  color: ${Colors.DarkGray};
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
`;

export const SelectedCounterSection = styled.View`
  background-color: ${Colors.DarkBlue};
  border-radius: 8px;
`;

export const SelectedCounterHeader = styled.Text`
  color: ${Colors.PlainWhite};
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
`;
export const NumberArea = styled.View`
  height: 200px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const ActualNumber = styled.Text`
  font-weight: bold;
  color: ${Colors.PlainWhite};
  font-size: 50px;
  font-weight: bold;
`;

export const ControlsHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const SelectedCounterControls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${Colors.PlainWhite};
`;

export const SelectedCounterName = styled.Text`
  color: ${Colors.PlainWhite};
  font-size: 22px;
  font-weight: bold;
`;

export const ControlButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabelArea = styled.View`
  height: 100px;
  margin-bottom: 50px;
`;

export const ButtonLabel = styled.Text`
  color: ${Colors.PlainWhite};
`;
