import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from './Chart';

storiesOf('Charts', module)
  .add('Spline Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.16328850858738186']} 
        type={'line'}/>
  ));