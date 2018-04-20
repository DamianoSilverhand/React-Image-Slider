import React, { Component } from 'react';
import street from './img/street.jpg'
import sea from './img/sea.jpeg'
import mountain from './img/mountain.jpeg'
import './bootstrap.min.css'
import './App.css'

 

export class Thumbnails extends React.Component {


	render () {
		return (
        <div className="container">
            <div className="row imagetiles">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <img src={sea} className ="img-responsive"/>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <img src={street} className="img-responsive"/>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <img src={mountain} className="img-responsive"/>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <img src={} className="img-responsive"/>
        </div>
    </div>
</div>
		);
	}
}

