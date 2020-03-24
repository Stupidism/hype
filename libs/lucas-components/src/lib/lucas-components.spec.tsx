import React from 'react';
import { render } from '@testing-library/react';

import LucasComponents from './lucas-components';

describe(' LucasComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LucasComponents />);
    expect(baseElement).toBeTruthy();
  });
});
