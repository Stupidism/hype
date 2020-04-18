import React from 'react';
import styled from 'styled-components';

import { useTranslate } from '@hype/i18n';
import { Box, Image } from '@hype/ui';

import { Container } from '../components/Container';

const BannerDesc = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  header {
    font-weight: 500;
    font-size: 64px;
    line-height: 75px;
    text-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  }

  main {
    margin-top: 30px;
    font-size: 20px;
    line-height: 34px;
    max-width: 50%;
  }
`;

export const HomePage = () => {
  const { t } = useTranslate();

  return (
    <>
      <Box width="100vw" height="600px">
        <Image
          isBackground
          src="https://images.ctfassets.net/jqac5lm85hml/4nvmOtle39oOdqCj1M0BcC/dff47506c26235f7f6b73161bc07c933/image_1.png"
          imageViewWidth="fullscreen"
        >
          <BannerDesc>
            <header>{t('slogon')}</header>
            <main>{t('slogon-description')}</main>
          </BannerDesc>
        </Image>
      </Box>
    </>
  );
};
