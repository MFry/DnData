import React from 'react';
import { render } from '@testing-library/react';

import Help from './help';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Help />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Help />);

    expect(getByText('Welcome to dndata!')).toBeTruthy();
  });
});
