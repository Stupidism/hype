import React from 'react';
import LazyLoad from 'react-lazyload';

import Ratio from '../Ratio';
import generateImageUrl from './generateImageUrl';

import * as S from './style.Image';

const Raw = ({ children }) => children;

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number;
  isBackground?: boolean;
  lazy?: {
    height: number;
    once?: boolean;
    overflow?: boolean;
    placeholder?: React.ReactNode;
  };
  fitMode?: 'cover' | 'contain';
  position?: string;
  hasCorner?: boolean;
  imageViewPreferWebp?: boolean;
  imageViewFormat?: 'jpg' | 'webp' | 'png';
  imageViewWidth?: number | string;
  imageViewHeight?: number | string;
  imageViewFit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  imageViewFocus?: string;
  imageViewQuality?:
    | 'center'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom'
    | 'top_right'
    | 'top_left'
    | 'bottom_right'
    | 'bottom_left'
    | 'face'
    | 'faces';
}

export const Image: React.FC<ImageProps> = ({
  lazy,
  ratio,
  isBackground,
  className,
  src,
  children,
  imageViewPreferWebp,
  imageViewFormat,
  imageViewWidth,
  imageViewFit,
  imageViewFocus,
  ...rest
}) => {
  const imageParams = {
    preferWebp: imageViewPreferWebp,
    format: imageViewFormat,
    width: imageViewWidth,
    focus: imageViewFocus,
    fit: imageViewFit,
  };

  const imageUrl = generateImageUrl(src, imageParams);
  const RatioWrapper = ratio ? Ratio : Raw;
  const LazyLoadWrapper = lazy ? LazyLoad : Raw;

  return (
    <RatioWrapper ratio={ratio}>
      <LazyLoadWrapper throttle={100} {...lazy}>
        {isBackground ? (
          <S.BackgroundImage
            className={className}
            backgroundUrl={imageUrl}
            {...rest}
          >
            {children}
          </S.BackgroundImage>
        ) : (
          <S.NormalImage className={className} src={imageUrl} {...rest} />
        )}
      </LazyLoadWrapper>
    </RatioWrapper>
  );
};

Image.defaultProps = {
  fitMode: 'cover',
};
