import React from 'react';
import { render } from '@testing-library/react';

import PlayerSelector from './player-selector';

describe('PlayerSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerSelector />);
    expect(baseElement).toBeTruthy();
  });
});
