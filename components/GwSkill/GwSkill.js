import React, { Component } from 'react';
import style from './style.css';
import context from './context';
import GwSkillDescription from '../GwSkillDescription';
import Popover from 'react-popover';

class GwSkill extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired,
		iconOnly: React.PropTypes.bool,
		onClick: React.PropTypes.func
	};

	state = {
		tooltip: false
	};

	getDetail(){
		return context('./' + this.props.id + '.json');
	}

	render(){
		let skillDetail = this.getDetail();
		let name = skillDetail.name;

		if(this.props.iconOnly){
			name = null;
		}

		return (
			<Popover isOpen={this.state.tooltip} body={this.getPopup()} preferPlace="column">
				<div className={style.skill} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
					<a href={this.getSkillLink()} target="_blank" onClick={this.onClick.bind(this)}>
						<img src={skillDetail.icon} />
						{name}
					</a>
				</div>
			</Popover>
		);
	}

	getPopup(){
		return <GwSkillDescription id={this.props.id} />;
	}

	getSkillLink(){
		let skillDetail = this.getDetail();
		let name = skillDetail.name.replace(/ /g, '_');

		return `https://wiki.guildwars2.com/wiki/${name}`;
	}

	onMouseOver(e){
		this.setState({tooltip: true});
	}
	onMouseOut(){
		this.setState({tooltip: false});	
	}

	onTouchStart(e){
		if(this.props.onClick){
			return;
		}

		this.onMouseOver(e);
		e.preventDefault();
	}
	onTouchEnd(e){
		if(this.props.onClick){
			return;
		}

		this.onMouseOut(e);
		e.preventDefault();
	}

	onClick(e){
		return this.props.onClick && this.props.onClick(e);
	}
}

export default GwSkill;
