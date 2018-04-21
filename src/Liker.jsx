import React, { Component } from 'react';
import blue from './img/blue.svg';
import red from './img/red.svg';

import './App.css'

 //Component for displaying the like button

export class Liker extends Component {
//setting initial state of button and text
    constructor(props){
        super(props);
        this.state = {
            image : blue,
            text:"Click Button To Like",
            status: false

        };
    }
// This method changes button color and text when clicked
    changeStyle(){
        if(this.state.status===false){
            this.setState({
                image : red,
                text:"Click Button To Unlike",
                status: true
            });

        }else{
            this.setState({
                image : blue,
                text:"Click Button To Like",
                status:false
            });

        }
      
        
        }

	render () {
		return (
            <div className= "App">
            <p className = "card-text">{this.state.text}</p>
            <img onClick= {this.changeStyle.bind(this)} className = "like" src={this.state.image} alt= "Like Button"/>
            </div>
		);
	}
}

