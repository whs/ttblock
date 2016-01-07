import React, { Component } from 'react';
import style from './style.css';

export class Step extends Component {
	static propTypes = {
		number: React.PropTypes.number
	};

	state = {
		index: 0
	};

	render(){
		let stepNumber = null;

		if(this.props.number){
			stepNumber = (<h4>Step {this.props.number}</h4>);
		}

		let figureList = null;

		if(this.getFigure().length > 1){
			figureList = (
				<div className={style.figureList}>
					{this.getFigureList()}
				</div>
			);
		}

		return (
			<div className={style.step}>
				<div className={style.figure}>
					{this.getFigure().length > 0 && this.getFigure()[this.state.index]}
				</div>
				<div className={style.description}>
					{stepNumber}
					{React.Children.toArray(this.props.children).filter((x) => x.type != Figure)}
					{figureList}
				</div>
			</div>
		);
	}

	changeFigure(index){
		this.setState({index: index});
	}

	getFigure(){
		return React.Children.toArray(this.props.children).filter((x) => x.type == Figure);
	}

	getFigureList(){
		return this.getFigure().map((figure, index) => {
			let cls = this.state.index === index ? style.active : '';

			if(figure.type == 'video'){
				return (
					<Figure><img src={figure.props.poster} /></Figure>
				);
			}

			return (
				<div className={cls} onClick={this.changeFigure.bind(this, index)}>
					{figure}
				</div>
			);
		});
	}
}

export class Figure extends Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render(){
		return (
			<div className={style.figureItem}>
				{this.props.children}
			</div>
		);
	}
}
