import React from 'react';
import PubNubReact from 'pubnub-react';
import eon from 'eon-chart';

class Chart extends React.Component{

  constructor(props){
    super(props);
    this.pubnub = new PubNubReact({ 
      publishKey: 'pub-c-00eff6d9-ef6a-459c-9452-7e34aba11cba', 
      subscribeKey: 'sub-c-6af8440e-4890-11e8-a3a7-d29c801c92ae' 
    });
    this.pubnub.init(this);
  }

  componentDidMount(){
    eon({
      pubnub: this.pubnub,
      channels: ["c3-spline"],
      generate: {
        bindto: '#chart',
        data: {
          labels: true
        }
      }
    });
  }

  render(){
    console.log(eon);
    return(
      <div id="chart"> </div>
    );
  }
}
export default Chart;