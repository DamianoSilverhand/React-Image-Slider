import React, { Component } from 'react';
import blue from './img/blue.svg';
import red from './img/red.svg';

import './App.css'

 

export class Liker extends Component {

    constructor(props){
        super(props);
        this.state = {
            image : blue,
            text:"Click To Like",
            status: false

        };
    }

    changeStyle(){
        if(this.state.status===false){
            this.setState({
                image : red,
                text:"Click To Unlike",
                status: true
            });

        }else{
            this.setState({
                image : blue,
                text:"Click To Like",
                status:false
            });

        }
      
        
        }

    likeThis(){
        alert('Thank You for liking this image');
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

