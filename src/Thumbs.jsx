import React, { Component } from 'react';
import  {Liker} from './Liker';

import street from './img/street.jpg';
import sea from './img/sea.jpeg';
import mountain from './img/mountain.jpeg';
import blue from './img/blue.svg';
import red from './img/red.svg';

import './App.css'

 

export class Thumbnails extends Component {

    constructor(props){
        super(props);
        this.state = {
            image : blue,
            cls:"initial",
            status: false

        };
    }

    changeStyle(){
        if(this.state.status===false){
            this.setState({
                image : red,
                cls:"on",
                status: true
            });

        }else{
            this.setState({
                image : blue,            
                cls:"off",
                status:false
            });

        }
      
        
        }

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
            </div>
      
          </div>
		);
	}
}

