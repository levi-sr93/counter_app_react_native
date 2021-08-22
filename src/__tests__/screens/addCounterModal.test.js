import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import AddCounterModal from '../../screens/Config/AddCounterModal';

describe('Add Counter Modal', () => {
  it('should exists title name correctly', () => {
    const {getByTestId} = render(<AddCounterModal />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Please give your card a name');
  });

  it('should be showing correctly input name placeholder', () => {
    const {getByPlaceholderText} = render(<AddCounterModal />);

    const inputName = getByPlaceholderText('Your counter card name');

    expect(inputName).toBeTruthy();
  });
});
