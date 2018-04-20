// import React, { Component } from 'react';


//  // export const random = imgUrls[Math.floor(Math.random()*imgUrls.length)];
//  export const caption = [
//   "A man who builds a road to the Heavens must travel alone.","Getting to your destination is important, but be careful of the route you take","Sometimes you have to, as I say, build bridges where you can - but draw lines where you must"
// ]
// export class Caption extends React.Component {
// 	constructor (props) {
// 		super(props);

// 		this.state = {
// 			currentWordIndex: 0
// 		};


// 		this.nextSlide = this.nextSlide.bind(this);
// 		this.previousSlide = this.previousSlide.bind(this);
// 	}

// 	previousSlide () {
// 		const lastIndex = caption.length - 1;
// 		const { currentWordIndex } = this.state;
// 		const shouldResetIndex = currentWordIndex === 0;
// 		const index =  shouldResetIndex ? lastIndex : currentWordIndex - 1;

// 		this.setState({
// 			currentWordIndex: index
// 		});
// 	}

// 	nextSlide () {
// 		const lastIndex = caption.length - 1;
// 		const { currentWordIndex } = this.state;
// 		const shouldResetIndex = currentWordIndex === lastIndex;
// 		const index =  shouldResetIndex ? 0 : currentWordIndex + 1;

// 		this.setState({
// 			currentWordIndex: index
// 		});
// 	}

// 	render () {
// 		return (
// 			<div className="carousel">
// 				<p>{this.props.currentWordIndex}</p>
// 			</div>
// 		);
// 	}
// }

// export default Caption;