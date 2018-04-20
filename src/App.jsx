import React, { Component } from 'react';
import './App.css';
import  {Thumbnails} from './Thumbs';
import {Carousel} from './Slides';



class App extends Component {
// componentDidMount(){
//   console.log('i have mount')
// }
// componentWillMount(){
//   console.log('i will mount');
// }
// componentDidUpdate(){
//   console.log('i updated');
// }
// componentWillReceiveProps(nextProps){
//   console.log(nextProps);
// }
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
