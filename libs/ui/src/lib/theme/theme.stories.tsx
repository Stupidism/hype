import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import Color from 'color';

import { Flex, Box } from '../FlexBox';
import { Heading, Text } from '../Typography';
import color from '../utils/color';

import README from './README.md';

const ColorColumn = styled(Box)`
  width: 33%;
  padding: 0 20px;
  text-align: right;
`;

const ColorBlock = styled(Box)`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  height: 80px;
  font-size: 40px;
  line-height: 40px;
  border-radius: 4px;

  ${({ bg, theme }) => css`
    color: ${Color(theme.colors[bg]).isLight() ? 'black' : 'white'};
  `}

  ${({ bg, theme }) =>
    Color(theme.colors[bg]).luminosity() > 0.9 &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${color('borderColor')};
    `}
`;

const renderColorBlocks = (colorNames) => (
  <>
    {colorNames.map((colorName) => (
      <ColorBlock key={colorName} bg={colorName}>
        {colorName}
      </ColorBlock>
    ))}
  </>
);

const colorNumbers = [20, 30, 40, 50, 60, 70, 80];
const renderColorSeries = (colorSeriesName) =>
  renderColorBlocks(
    colorNumbers.map((colorNumber) => `${colorSeriesName}${colorNumber}`)
  );

storiesOf('Theme', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('colors', () => (
    <>
      <h1>Base Colors</h1>
      <Flex width="100%">
        <ColorColumn>{renderColorSeries('black')}</ColorColumn>
        <ColorColumn>{renderColorSeries('gray')}</ColorColumn>
        <ColorColumn>{renderColorSeries('yellow')}</ColorColumn>
      </Flex>
      <Flex width="100%">
        <ColorColumn>{renderColorSeries('blue')}</ColorColumn>
        <ColorColumn>{renderColorSeries('red')}</ColorColumn>
        <ColorColumn>{renderColorSeries('green')}</ColorColumn>
      </Flex>
      <Flex width="100%">
        <ColorColumn>{renderColorBlocks(['white'])}</ColorColumn>
        <ColorColumn />
        <ColorColumn />
      </Flex>

      <h1>Color Aliases</h1>
      <Flex width="100%">
        <ColorColumn>{renderColorBlocks(['primary', 'textBlack'])}</ColorColumn>
        <ColorColumn>{renderColorBlocks(['border', 'bgGray'])}</ColorColumn>
        <ColorColumn>
          {renderColorBlocks([
            'inputActive',
            'inputBorder',
            'inputBorderHover',
            'inputError',
          ])}
        </ColorColumn>
      </Flex>
    </>
  ))
  .add('typography', () => (
    <>
      <h1>Heading Variants</h1>
      <Heading variant="h1">Header 1</Heading>
      <Heading variant="h2">Header 2</Heading>
      <Heading variant="h3">Header 3</Heading>
      <Heading variant="h4">Header 4</Heading>
      <Heading variant="h5">Header 5</Heading>
      <Heading variant="h6">Header 6</Heading>

      <h1>Text fontSizes</h1>
      <Text fontSize={1}>Text 1</Text>
      <Text fontSize={2}>Text 2</Text>
      <Text fontSize={3}>Text 3</Text>
      <Text fontSize={4}>Text 4</Text>
      <Text fontSize={5}>Text 5</Text>
      <Text fontSize={6}>Text 6</Text>
      <Text fontSize={28}>Custom 28</Text>
    </>
  ));
