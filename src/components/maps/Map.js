import React from 'react';
import PubNubReact from 'pubnub-react';
import eon from 'eon-map';

class Map extends React.Component{
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({  
      subscribeKey: 'sub-c-6af8440e-4890-11e8-a3a7-d29c801c92ae' 
    });
    this.pubnub.init(this);
  }

  componentDidMount() {
    const channel = 'map';
    this.pubnub.subscribe({ channels: [channel] });
    eon({
      pubnub: this.pubnub,
      id: 'map',
      provider: 'google',
      googleKey: 'AIzaSyB3LP6uG9CJka188uLdEEXOdKsVMMoxBs8',
      channels: [channel] })
  }


  render(){
    console.log(eon);
    return (
      <div id='map'/>
    );
  }
}

export default Map;