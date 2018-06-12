import React from 'react';
import PubNubReact from 'pubnub-react';
import PropTypes from "prop-types";
import eon from 'eon-chart';

class Chart extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    eon({
      pubnub: this.props.pubnub,
      channels: this.props.channels,
      generate: {
        bindto: '#chart',
        data: {
          labels: this.props.labels || true,
          type: this.props.type || 'line'
        }
      }
    });
  }

  render(){
    return(
      <div id="chart"> </div>
    );
  }
}
Chart.propTypes = {
  subKey: PropTypes.string,
  channels: PropTypes.array,
  labels: PropTypes.bool,
  type: PropTypes.string,
  pubnub: PropTypes.object
};
export default Chart;