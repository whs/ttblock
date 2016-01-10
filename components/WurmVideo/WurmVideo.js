import React, { Component } from 'react';
import style from './style.css';

export default class WurmVideo extends Component {
	static propTypes = {
		src: React.PropTypes.string.isRequired,
		egg: React.PropTypes.arrayOf(React.PropTypes.number),
		husk: React.PropTypes.arrayOf(React.PropTypes.number),
	};

	state = {
		time: 0,
		show: 2
	};

	render(){
		let cooldown = [];

		if(this.state.show > 0){
			cooldown = [
				<Cooldown key="husk" cast={this.props.husk} time={this.state.time} display={this.state.show} name="Husk" cooldown={100} />,
				<Cooldown key="egg" cast={this.props.egg} time={this.state.time} display={this.state.show} name="Egg" cooldown={50} />
			];
		}

		return (
			<div className={style.container}>
				<div><video src={this.props.src} preload="auto" controls={true} onTimeUpdate={this.onTimeUpdate.bind(this)} /></div>
				<div className={style.toolbar}><strong>Show cooldown</strong>: <a href="#" onClick={this.setShow.bind(this, 0)}>None</a> &middot; <a href="#" onClick={this.setShow.bind(this, 1)}>No countdown</a> &middot; <a href="#" onClick={this.setShow.bind(this, 2)}>Full</a></div>
				{cooldown}
			</div>
		);
	}

	onTimeUpdate(e){
		this.setState({time: e.target.currentTime});
	}

	setShow(type, e){
		this.setState({show: type});
		e.preventDefault();
	}
}

class Cooldown extends Component{
	static propTypes = {
		cast: React.PropTypes.arrayOf(React.PropTypes.number),
		time: React.PropTypes.number.isRequired,
		display: React.PropTypes.number,
		name: React.PropTypes.string,
		cooldown: React.PropTypes.number.isRequired
	};

	render(){
		let lastCast = this.getLastCast();
		let nextExpected = lastCast + this.props.cooldown;
		if(lastCast === 0){
			nextExpected = 0;
		}

		let timeLeft = Math.max(0, nextExpected - this.props.time);
		let percent = (timeLeft / this.props.cooldown) * 90;
		let cooldownState = timeLeft <= 0 ? style.offcooldown : style.oncooldown;
		let cls;

		let casting = this.props.time - lastCast < 6;

		switch(this.props.display){
		case 0:
			return <noscript />;
		case 1:
			cls = [style.miniCooldown, cooldownState];
			if(casting){
				cls.push(style.casting);
			}
			return (
				<div className={cls.join(' ')}>
					{this.props.name}
				</div>
			);
		default:
			cls = [style.skillName, cooldownState];
			let barCls = [style.bar];
			if(casting){
				cls.push(style.casting);
				barCls.push(style.casting);
			}
			return (
				<div className={style.cooldown}>
					<div className={cls.join(' ')}>{this.props.name}</div>
					<div className={style.timer}>{Math.ceil(timeLeft)}</div>
					<div className={barCls.join(' ')} style={{width: `${percent}%`}}></div>
				</div>
			);
		}
	}

	getLastCast(){
		let prev = 0;
		for(let cast of this.props.cast){
			if(cast > this.props.time){
				return prev;
			}
			prev = cast;
		}
		return prev;
	}
}