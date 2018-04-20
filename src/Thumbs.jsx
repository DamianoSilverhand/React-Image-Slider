import React, { Component } from 'react';
import street from './img/street.jpg';
import sea from './img/sea.jpeg';
import mountain from './img/mountain.jpeg';
import blue from './img/blue.svg';
import red from './img/red.svg';

import './App.css'

 

export class Thumbnails extends React.Component {

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

    likeThis(){
        alert('Thank You for liking this image');
    }

	render () {
		return (
            <div className="container">
            <div className="row">
              <div className = "col-md-4 hold card">
                <img className = "resize" src={street}/>
                <p className = "card-text"> I am a text</p>
                <div className= "App">
                <img onClick= {this.changeStyle.bind(this)} className = "like" src={this.state.image}/>
                </div>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={sea}/>
                <p className = "card-text"> I am a text</p>
                <a><button onClick= {this.likeThis.bind(this)}><i className="fas fa-heart fa-3x"></i></button></a>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={mountain}/>
                <p className = "card-text"> I am a text</p>
                <a><button onClick= {this.likeThis.bind(this)}><i className="fas fa-heart fa-3x"></i></button></a>
              </div>
              <div className = "col-md-4 hold card">
              <img className = "resize" src={street}/>
              <p className = "card-text"> I am a text</p>
              <a><button onClick= {this.likeThis.bind(this)}><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={sea}/>
              <p className = "card-text"> I am a text</p>
              <a><button onClick= {this.likeThis.bind(this)}><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={mountain}/>
              <p className = "card-text"> I am a text</p>
              <a><button onClick= {this.likeThis.bind(this)}><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            </div>
      
          </div>
		);
	}
}

