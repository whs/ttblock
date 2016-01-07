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
		let facts = this.getDetail().facts;
		return facts && facts.map(function(fact, index){
			if(!fact.icon){
				return null;
			}

			let data = fact.description || fact.value || fact.duration || fact.percent || fact.field_type || fact.distance || fact.hit_count;
			let image = <div className={style.icon}><img src={fact.icon} /></div>;

			if(fact.text == 'Apply Buff/Condition'){
				fact.text = `${fact.status}`;
				if(fact.duration > 0){
					fact.text += ` (${fact.duration}s)`;
				}
			}

			if(fact.apply_count && fact.apply_count > 1){
				image = <div className={style.icon}>
					<img src={fact.icon} />
					<div className={style.stack}>{fact.apply_count}</div>
				</div>;
			}

			if(data){
				return (
					<li key={index}>
						{image}
						<div className={style.detail}><strong>{fact.text}: </strong> {data}</div>
					</li>
				);
			}else{
				return (
					<li key={index}>
						{image}
						<div className={style.detail}>{fact.text}</div>
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
		if(!detail.facts){
			return null;
		}
		for(let item of detail.facts){
			if(item.type == fact){
				return item;
			}
		}
		return null;
	}
}

export default GwSkill;
