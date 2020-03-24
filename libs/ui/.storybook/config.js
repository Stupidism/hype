import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

import themeDecorator from './decorators/themeDecorator';
import options from './options';

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(themeDecorator);

addParameters({ options });

configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
