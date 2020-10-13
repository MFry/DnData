import React from 'react';
import { render } from '@testing-library/react';

import DiceSelector from './dice-selector';

describe('DiceSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DiceSelector />);
    expect(baseElement).toBeTruthy();
  });
});
