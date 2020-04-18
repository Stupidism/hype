import _ from 'lodash';
import { defaultTheme } from '@hype/ui';

const theme = _.defaultsDeep(
  {
    colors: {
      bgColor: '#0f102a',
    },
  },
  defaultTheme
);

export default theme;
