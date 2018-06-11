import React, { Component } from 'react';
import './App.css';
import Map from './components/maps/Map';
import styled from 'styled-components';

const Maps = styled.div`
  color:blue
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map> 
          <Maps>Hello</Maps>  
        </Map>
        
      </div>
    );
  }
}

export default App;
