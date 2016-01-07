import React, { Component } from 'react';
import GwSpec from '../GwSpec';
import style from './style.css';

export class TraitExplaination extends Component {
	state = {
		traitId: 0
	};

	render(){
		return (
			<div className={style.traitExplaination}>
				<div className={style.spec}>
					{this.getSpec()}
				</div>
				<div className={style.explain}>
					{this.getExplaination()}
				</div>
			</div>
		);
	}

	getSpec(){
		let clickHandler = this.onTraitClick.bind(this);
		return React.Children.toArray(this.props.children)
			.filter((x) => x.type == GwSpec)
			.map((x) => {
				return React.cloneElement(x, {
					onTraitClick: clickHandler
				});
			});
	}

	onTraitClick(e, id){
		e.preventDefault();
		this.setState({traitId: id});
	}

	getExplaination(){
		return this.getExplainationById(this.state.traitId) || this.getExplainationById(0);
	}

	getExplainationById(id){
		let child = React.Children.toArray(this.props.children).filter((x) => {
			return x.type == Explaination && x.props.id == id;
		});

		return child && child[0];
	}
}

export class Explaination extends Component{
	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	render(){
		return (<div>{this.props.children}</div>);
	}
}
