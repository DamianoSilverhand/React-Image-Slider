import React, { Component } from 'react';
import  {Liker} from './Liker';
import street from './img/street.jpg';
import sea from './img/sea.jpeg';
import mountain from './img/mountain.jpeg';
import pather from './img/path.jpg';
import walk from './img/walk.jpeg';
import stream from './img/stream.jpeg';



import blue from './img/blue.svg';
import red from './img/red.svg';
import './App.css';

 
//Component for displaying image thumbnails
export class Thumbnails extends Component {


	render () {
		return (
            <div className="container">
            <div className="row">
              <div className = "col-md-4 hold card">
                <img className = "resize" src={street} alt = "Street"/>
                <Liker/>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={sea} alt = "Sea"/>
                <Liker/>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={mountain} alt = "Mountain"/>
                <Liker/>
              </div>
              <div className = "col-md-4 hold card">
              <img className = "resize" src={pather} alt = "Street"/>
              <Liker/>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={walk} alt = "Sea"/>
              <Liker/>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={stream} alt = "Mountain"/>
              <Liker/>
            </div>
            </div>
      
          </div>
		);
	}
}

