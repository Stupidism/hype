import React from 'react';
import styled from 'styled-components';

import { Flex, c } from '@hype/ui';
import { useTranslate } from '@hype/i18n';
import { LocaleLink } from './LocaleLink';

const NavLink = styled.a`
  cursor: pointer;
  padding: 10px;

  letter-spacing: 2.7px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  :hover {
    color: ${c('blue40')};
  }
`;

export const Navigation = () => {
  const { t } = useTranslate();

  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <div>
        <LocaleLink href="/about-us" as="/about-us">
          <NavLink>{t('nav-aboutus')}</NavLink>
        </LocaleLink>
      </div>
    </Flex>
  );
};
