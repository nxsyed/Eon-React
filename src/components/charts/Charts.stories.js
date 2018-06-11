import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from './Chart';

storiesOf('Charts', module)
  .add('Chart', () => (
    <Chart>Hello, I'm a Title component</Chart>
  ));