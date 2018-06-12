import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from './Chart';

storiesOf('Charts', module)
  .add('Spline Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'spline'}/>
  ))
  .add('Line Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'line'}/>
  ))
  .add('Area Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'area'}/>
  ))
  .add('Donut Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'donut'}/>
  ))
  .add('Bar Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'bar'}/>
  ))
  .add('Area Spline Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'area-spline'}/>
  ))
  .add('Pie Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'pie'}/>
  ))
  .add('Scatter Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'scatter'}/>
  ))
  .add('Step Chart', () => (
    <Chart
        subKey={'sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f'}
        channels={['test-channel-0.6445586469630309']} 
        type={'step'}/>
  ));