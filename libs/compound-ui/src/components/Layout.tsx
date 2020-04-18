import React from 'react';
import styled, { css } from 'styled-components';

import { LocaleSwitcher, useTranslate } from '@hype/i18n';
import { Navigation } from './Navigation';
import { LocaleLink } from './LocaleLink';
import { containerCss } from './Container';

const SelectWrapper = styled.div`
  width: 150px;
  color: black;
  float: right;
`;

const LogoText = styled.h1`
  margin: 0 50px 0 0;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  height: 80px;
  background: white;
  border-bottom: 1px solid #e0e0e0;

  ${containerCss}
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${containerCss}
`;

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  margin: 0 auto;

  footer {
    background: #000728;

    ::after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
`;

export const Layout = ({ children }) => {
  const { t } = useTranslate();

  return (
    <StyledApp>
      <Header height={[60, 80]}>
        <LocaleLink href="" as="">
          <LogoText>Compound</LogoText>
        </LocaleLink>
        <Navigation />
        <SelectWrapper>
          <LocaleSwitcher />
        </SelectWrapper>
      </Header>
      <Main>{children}</Main>
      <footer></footer>
    </StyledApp>
  );
};
