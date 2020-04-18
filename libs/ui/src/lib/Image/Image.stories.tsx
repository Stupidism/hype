import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Image } from './Image';

export const storyName = 'Components|Image';

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const ImagesList = styled.div`
  max-width: 500px;
  max-height: 500px;
  overflow: auto;
`;

const BackgroundInnerText = styled.h1`
  color: white;
`;

const stories = storiesOf(storyName, module);
stories.addDecorator(withKnobs);

const bgImages = [
  '//images.ctfassets.net/jqac5lm85hml/4nvmOtle39oOdqCj1M0BcC/dff47506c26235f7f6b73161bc07c933/image_1.png',
  '//images.ctfassets.net/jqac5lm85hml/4nvmOtle39oOdqCj1M0BcC/dff47506c26235f7f6b73161bc07c933/image_1.png',
  '//images.ctfassets.net/jqac5lm85hml/4nvmOtle39oOdqCj1M0BcC/dff47506c26235f7f6b73161bc07c933/image_1.png',
  '//images.ctfassets.net/jqac5lm85hml/4rNs2vLH43V22V38A42I9U/ebbbc73c31c9bc3742de562ea035761b/rob-e1521191219371-320x320.jpg',
];

stories.add('Playground', () => {
  const src = text('src', bgImages[0]);
  const isBackground = boolean('isBackground', false);
  const ratio = number('ratio', 0, {
    range: true,
    min: 0,
    max: 2,
    step: 0.5,
  });
  const imageViewPreferWebp = boolean('imageViewPreferWebp', true);
  const imageViewWidth = text('imageViewWidth', '300');
  const imageViewFormat = select(
    'imageViewFormat',
    ['png', 'jpg', 'webp'],
    'jpg'
  );

  const imageViewFit = select(
    'imageViewFit',
    ['pad', 'fill', 'scale', 'crop', 'thumb'],
    'pad'
  );
  const content = text('image content', 'content');
  const fitMode = select('fit mode', ['cover', 'contain'], 'cover');
  const hasCorner = boolean('hasCorner', false);
  const position = text('position', '50% 50%');

  return (
    <ImageContainer>
      <Image
        src={src}
        isBackground={isBackground}
        ratio={ratio}
        fitMode={fitMode}
        imageViewPreferWebp={imageViewPreferWebp}
        imageViewFormat={imageViewFormat}
        imageViewWidth={imageViewWidth}
        imageViewFit={imageViewFit}
        hasCorner={hasCorner}
        position={position}
      >
        <BackgroundInnerText>{content}</BackgroundInnerText>
      </Image>
    </ImageContainer>
  );
});

stories.add('Background', () => (
  <ImageContainer>
    <Image
      src={bgImages[0]}
      isBackground
      imageViewFocus="face"
      imageViewFit="fill"
    >
      <BackgroundInnerText>Foo Bar</BackgroundInnerText>
    </Image>
  </ImageContainer>
));

stories.add('Lazy Load', () => {
  return (
    <ImagesList>
      {bgImages.map((src, index) => (
        <ImageContainer key={index}>
          <Image
            src={src}
            isBackground={index % 2 === 0}
            lazy={{ height: 300, overflow: true }}
          />
        </ImageContainer>
      ))}
    </ImagesList>
  );
});

stories.add('Ratio', () => (
  <div style={{ width: 200 }}>
    <h1>16 : 9</h1>
    <Image src={bgImages[0]} ratio={16 / 9}>
      <BackgroundInnerText>Foo Bar</BackgroundInnerText>
    </Image>
    <h1>3 : 4</h1>
    <Image src={bgImages[0]} ratio={3 / 4}>
      <BackgroundInnerText>Foo Bar</BackgroundInnerText>
    </Image>
    <h1>2 : 1</h1>
    <Image src={bgImages[0]} ratio={2}>
      <BackgroundInnerText>Foo Bar</BackgroundInnerText>
    </Image>
  </div>
));

const BorderedContainer = styled(ImageContainer)`
  border: 1px blue solid;
`;

stories.add('Fit Mode', () => (
  <div>
    <h1>cover</h1>
    <BorderedContainer>
      <Image src={bgImages[0]} fitMode="cover" />
    </BorderedContainer>
    <h1>contain</h1>
    <BorderedContainer>
      <Image src={bgImages[0]} fitMode="contain" />
    </BorderedContainer>
  </div>
));

stories.add('clickable', () => (
  <div style={{ width: 500 }}>
    <h1>Normal Image</h1>
    <Image src={bgImages[0]} onClick={action('click')} />
    <h1>Background Image</h1>
    <Image
      src={bgImages[0]}
      ratio={16 / 9}
      isBackground
      onClick={action('click')}
    />
  </div>
));

stories.add('hasCorner', () => (
  <div style={{ width: 500 }}>
    <h1>Normal Image</h1>
    <Image src={bgImages[0]} hasCorner />
    <h1>Background Image</h1>
    <Image src={bgImages[0]} ratio={16 / 9} isBackground hasCorner />
  </div>
));

stories.add('position', () => (
  <div style={{ width: 500 }}>
    <h1>Normal Image</h1>
    <Image src={bgImages[0]} position="left" />
    <h1>Background Image</h1>
    <Image src={bgImages[0]} ratio={16 / 9} isBackground position="left" />
  </div>
));
