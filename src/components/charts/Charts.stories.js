import React from 'react';
import { storiesOf } from '@storybook/react';
import LineChart from './LineChart';

storiesOf('Charts', module)
  .add('Line Chart', () => (
    <LineChart>Hello, I'm a Title component</LineChart>
  ));