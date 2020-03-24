import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Flex } from '../FlexBox';

const LabelWrapper = styled(Flex)`
  width: 100%;
  align-items: center;
`;

const Label = forwardRef(({ children, ...rest }, ref) => (
  <LabelWrapper as="label" ref={ref} {...rest}>
    {children}
  </LabelWrapper>
));

export default Label;
