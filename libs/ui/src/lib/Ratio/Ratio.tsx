import React from 'react';

import type { RadioStyleProps } from './style.Ratio';
import * as S from './style.Ratio';

interface RatioProps extends RadioStyleProps {
  className?: string;
}

const Ratio: React.FC<RatioProps> = ({ ratio, children, className }) => (
  <S.Ratio ratio={ratio} className={className}>
    <S.ContentWrapper>{children}</S.ContentWrapper>
  </S.Ratio>
);

Ratio.defaultProps = {
  ratio: 1,
};

export default Ratio;
