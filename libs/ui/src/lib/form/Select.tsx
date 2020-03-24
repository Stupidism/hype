import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

import color from '../utils/color';

const classNamePrefix = 'hype-select';

const Select = styled(ReactSelect).attrs({
  classNamePrefix,
})`
  .${classNamePrefix}__control {
    box-shadow: none;

    /** color changes in different state [start] */
    color: ${color('inputBorder')};

    ${({ hasError }) =>
      hasError
        ? css`
            color: ${color('inputError')};
          `
        : css`
            :hover {
              color: ${color('inputBorderHover')};
            }

            &.${classNamePrefix}__control--is-focused {
              color: ${color('inputActive')};
            }
          `}
    /** color changes in different state [end] */

    /** different colors of states and sub-components inherit color from control [start] */
    &, &:hover, &.${classNamePrefix}__control--is-focused {
      border-color: currentColor;
    }

    .${classNamePrefix}__indicator-separator {
      color: inherit;
      background: currentColor;
    }

    .${classNamePrefix}__indicator {
      color: inherit;
    }
    /** components inherit color from control [end] */
  }
`;

export default Select;
