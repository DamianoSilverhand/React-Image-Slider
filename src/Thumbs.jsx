import React, { Component } from 'react';
import street from './img/street.jpg'
import sea from './img/sea.jpeg'
import mountain from './img/mountain.jpeg'
import './App.css'

 

export class Thumbnails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            style : {background: "blue"}
        }
    }
    ChangeStyle(){
          this.setState({
                style : this.props.style
            });
        }

	render () {
		return (
            <div className="container">
            <div className="row">
              <div className = "col-md-4 hold card">
                <img className = "resize" src={street}/>
                <p className = "card-text"> I am a text</p>
                <a><button onClick = {this.ChangeStyle.bind(this)} style ={this.state.styles}><i className="fas fa-heart fa-3x"></i></button></a>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={sea}/>
                <p className = "card-text"> I am a text</p>
                <a><button><i className="fas fa-heart fa-3x"></i></button></a>
              </div>
              <div className = "col-md-4 hold card">
                <img className = "resize" src={mountain}/>
                <p className = "card-text"> I am a text</p>
                <a><button><i className="fas fa-heart fa-3x"></i></button></a>
              </div>
              <div className = "col-md-4 hold card">
              <img className = "resize" src={street}/>
              <p className = "card-text"> I am a text</p>
              <a><button><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={sea}/>
              <p className = "card-text"> I am a text</p>
              <a><button><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            <div className = "col-md-4 hold card">
              <img className = "resize" src={mountain}/>
              <p className = "card-text"> I am a text</p>
              <a><button><i className="fas fa-heart fa-3x"></i></button></a>
            </div>
            </div>
      
          </div>
		);
	}
}

