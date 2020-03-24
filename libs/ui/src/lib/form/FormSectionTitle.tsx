import React from 'react';
import styled from 'styled-components';
import color from '../utils/color';

const Content = styled.div`
  width: 150px;
  padding-left: 14px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  ::before {
    content: ' ';
    position: absolute;
    left: 0;
    border-left: 2px solid ${color('blue50')};
    height: 1em;
  }

  ::after {
    content: ' ';
    display: inline-flex;
    flex: 1;
    height: 1px;
    border-top: 1px solid ${color('border')};
  }
`;

const FormSectionTitle = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Content>{children}</Content>
  </Wrapper>
);

export default FormSectionTitle;
