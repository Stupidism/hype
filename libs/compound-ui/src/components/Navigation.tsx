import React from 'react';
import styled from 'styled-components';

import { Flex } from '@hype/ui';
import { LocaleSwitcher, useTranslate } from '@hype/i18n';
import { LocaleLink } from './LocaleLink';

const SelectWrapper = styled.div`
  width: 150px;
  color: black;
  float: right;
`;

const NavLink = styled.a`
  cursor: pointer;
  padding: 10px;

  letter-spacing: 2.7px;
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    color: #e3d3a6;
  }
`;

export const Navigation = () => {
  const { t } = useTranslate();

  return (
    <Flex width="100%" alignItems="center" justifyContent="space-between">
      <div>
        <LocaleLink href="" as="">
          <NavLink>{t('nav-hype')}</NavLink>
        </LocaleLink>
        <LocaleLink href="/about-us" as="/about-us">
          <NavLink>{t('nav-aboutus')}</NavLink>
        </LocaleLink>
      </div>
      <SelectWrapper>
        <LocaleSwitcher />
      </SelectWrapper>
    </Flex>
  );
};
