import React, { Component } from 'react';
import style from './style.css';
import context from '../GwSkill/context';

class GwSkill extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	getDetail(){
		return context('./' + this.props.id + '.json');
	}

	render(){
		let skillDetail = this.getDetail();
		return (
			<div className={style.skill}>
				<div className={style.cast}>
					{this.getDuration()}
				</div>
				<h4>{skillDetail.name}</h4>
				<div className={style.description}>{skillDetail.description}</div>
				<ul className={style.facts}>
					{this.renderFacts()}
				</ul>
			</div>
		);
	}

	renderFacts(){
		return this.getDetail().facts.map(function(fact){
			let data = fact.value || fact.duration || fact.percent || fact.field_type || fact.distance || fact.hit_count;
			let image = <img src={fact.icon} />;
			if(!fact.icon){
				return null;
			}
			if(data){
				return (
					<li>
						{image} <strong>{fact.text}: </strong> {data}
					</li>
				);
			}else{
				return (
					<li>
						{image} {fact.text}
					</li>
				);
			}
		});
	}

	getDuration(){
		let value = this.getFact('Recharge');

		if(value){
			return (
				<span><span className="octicon octicon-clock"></span> {value.value}</span>
			);
		}
	}
	
	getFact(fact){
		let detail = this.getDetail();
		for(let item of detail.facts){
			if(item.type == fact){
				return item;
			}
		}
		return null;
	}
}

export default GwSkill;
