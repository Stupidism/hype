import React from 'react';
import styled from 'styled-components';

import { Flex, Box } from '@hype/ui';
import { LocaleSwitcher, useTranslate } from '@hype/i18n';

const LogoImg = styled.img`
  width: 60px;
  height: 40px;
  margin-right: 50px;
`;

const SelectWrapper = styled.div`
  width: 150px;
  color: black;
  float: right;
`;

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;

  main {
    padding: 0 36px;

    h1 {
      text-align: center;
      margin-left: 18px;
      font-size: 24px;
    }
  }

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
      <Flex as="header" alignItems="center" justifyContent="center" p="5px">
        <LogoImg src="/assets/hype-logo.png" alt="Hype Logo White" />
        <h1>{t('welcome-message')}</h1>
      </Flex>
      <main>{children}</main>
      <footer>
        <SelectWrapper>
          <LocaleSwitcher />
        </SelectWrapper>
      </footer>
    </StyledApp>
  );
};
