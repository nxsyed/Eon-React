import PubNubReact from 'pubnub-react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Chart from './Chart';

const channel = 'eon-components';

this.pubnub = new PubNubReact({ 
    publishKey: 'pub-c-00eff6d9-ef6a-459c-9452-7e34aba11cba',
    subscribeKey: 'sub-c-6af8440e-4890-11e8-a3a7-d29c801c92ae'
  });
  this.pubnub.init(this);

setInterval(() => { 
    this.pubnub.publish({
        channel: channel,
        message: 
        {"eon":
            {
                "Syed":Math.floor(Math.random() * 10),
                "Cameron":Math.floor(Math.random() * 10),
                "Kaushik":Math.floor(Math.random() * 10),
                "Namratha":Math.floor(Math.random() * 10),
                "Adam":Math.floor(Math.random() * 10),
                "_eonDatetime":1528840518322}}
        }); 
}, 5000);


storiesOf('Charts', module)
  .add('Spline Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'spline'}/>
  ))
  .add('Line Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'line'}/>
  ))
  .add('Area Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'area'}/>
  ))
  .add('Donut Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'donut'}/>
  ))
  .add('Bar Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'bar'}/>
  ))
  .add('Area Spline Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'area-spline'}/>
  ))
  .add('Pie Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'pie'}/>
  ))
  .add('Scatter Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'scatter'}/>
  ))
  .add('Area Step Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'area-step'}/>
  ))
  .add('Step Chart', () => (
    <Chart
        pubnub={this.pubnub}
        channels={[channel]} 
        type={'step'}/>
  ));