import React, { Component } from 'react';
import style from './style.css';
import context from './context';
import GwSkillDescription from '../GwSkillDescription';

class GwSkill extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	state = {
		tooltip: false
	};

	render(){
		let skillDetail = context('./' + this.props.id + '.json');
		return (
			<div className={style.skill} onMouseOver={this.onMouseOver.bind(this)} onMouseMove={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
				{skillDetail.name}
				<div className={style.tooltip} style={{display: this.state.tooltip ? 'block' : 'none', top: this.state.top + 15, left: this.state.left + 15}}>
					<GwSkillDescription id={this.props.id} />
				</div>
			</div>
		);
	}

	onMouseOver(e){
		this.setState({tooltip: true, top: e.pageY, left: e.pageX});
	}
	onMouseOut(){
		this.setState({tooltip: false});	
	}
}

export default GwSkill;
