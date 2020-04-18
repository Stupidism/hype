import styled, { css, StyledComponent } from 'styled-components';

const clickableCss = css<{ onClick?: Function }>`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

const corner = css<{ hasCorner?: boolean }>`
  ${({ hasCorner }) =>
    hasCorner &&
    `
    border-radius: 4px;
    overflow: hidden;
  `}
`;

interface NormalImageProps {
  fitMode?: string;
  position?: string;
}

interface BackgroundImageProps extends NormalImageProps {
  backgroundUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: ${({ fitMode }) => fitMode};
  background-position: ${({ position }) => position || '50% 50%'};
  ${({ backgroundUrl }) => `
    background-image: url(${backgroundUrl});
  `}

  display: flex;
  align-items: center;
  justify-content: center;

  ${clickableCss}
  ${corner}
` as React.FC<BackgroundImageProps & React.HTMLAttributes<HTMLDivElement>>;

export const NormalImage = styled.img<
  NormalImageProps & React.ImgHTMLAttributes<HTMLImageElement>
>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ fitMode }) => fitMode};
  ${({ position }) => position && `object-position: ${position};`}

  ${clickableCss}
  ${corner}
`;
