import React, { Component } from 'react';
import art from './img/light.jpg'
import food from './img/road.jpg'
import car from './img/bridge.jpg'

 // export const random = imgUrls[Math.floor(Math.random()*imgUrls.length)];
 export const imgUrls = [
  art,food,car
];
export const caption = [
	"A man who builds a road to the Heavens must travel alone",
	"Getting to your destination is important, but the route you take is equally important",
	"Learn to draw lines where you must, but build bridges where you can "
];

export class Carousel extends Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
			currentWordIndex: 0
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		const lastWord = caption.length - 1;
		const { currentWordIndex } = this.state;
		const shouldResetWord = currentWordIndex === 0;
		const word =  shouldResetWord ? lastWord : currentWordIndex - 1

		this.setState({
			currentImageIndex: index,
			currentWordIndex: word
		});
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    const lastWord = caption.length - 1;
		const { currentWordIndex } = this.state;
		const shouldResetWord = currentWordIndex === lastWord;
		const word =  shouldResetWord ? 0 : currentWordIndex + 1;


		this.setState({
			currentImageIndex: index,
			currentWordIndex: word
		});
	}

	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<img src={imgUrls[this.state.currentImageIndex]} style={{width : 100 + "%", height: 40 + 'em'}} alt = "The Journey"/>
				<p>{caption[this.state.currentWordIndex]}</p>
        <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}


const Arrow = ({ direction, clickFunction, glyph }) => (
<div
  className={ `slide-arrow ${direction}` }
  onClick={ clickFunction }>
  { glyph }
</div>
);
const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<div className="image-slide" style={styles}></div>
	);
}

