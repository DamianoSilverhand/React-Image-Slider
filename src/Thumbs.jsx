import React, { Component } from 'react';
import street from './img/street.jpg'
import sea from './img/sea.jpeg'
import mountain from './img/mountain.jpeg'
import './App.css'

 

export class Thumbnails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            style: {backgroundColor:"red"},
            status: false

        };
    }

    changeStyle(){
        if(this.state.status===false){
            this.setState({
                style : {backgroundColor:"blue"},
                status: true
            });

        }else{
            this.setState({
                style : {backgroundColor:"red"},
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
                <a><button onClick= {this.changeStyle.bind(this)} style ={this.state.style}><i className="fas fa-heart fa-3x"></i></button></a>
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

