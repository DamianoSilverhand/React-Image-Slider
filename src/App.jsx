import React, { Component } from 'react';
import './App.css';
import  {Thumbnails} from './Thumbs';
import {Carousel} from './Slides';



class App extends Component {
  render() {
    console.log('i have mounted from render');
    return (
      <div className="App">
      <Carousel/>
      <Thumbnails/>
      </div>
    );
  }
  
}

export default App;
