import { configure } from '@storybook/vue';

import '../src/index.css';

configure(require.context('../src/components', true, /\.stories\.js$/), module);
