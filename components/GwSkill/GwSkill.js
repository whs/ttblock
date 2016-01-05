import React, { Component } from 'react';
import style from './style.css';
import context from './context';
import GwSkillDescription from '../GwSkillDescription';
import Popover from 'react-popover';

class GwSkill extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	state = {
		tooltip: false
	};

	getDetail(){
		return context('./' + this.props.id + '.json');
	}

	render(){
		let skillDetail = this.getDetail();
		return (
			<Popover isOpen={this.state.tooltip} body={<GwSkillDescription id={this.props.id} />} preferPlace="column">
				<div className={style.skill} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
					<a href={this.getSkillLink()} target="_blank">
						<img src={skillDetail.icon} />
						{skillDetail.name}
					</a>
				</div>
			</Popover>
		);
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
}

export default GwSkill;
