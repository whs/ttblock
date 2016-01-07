import React, { Component } from 'react';
import style from './style.css';
import Link from '../components/Link';

export default class extends Component {
	render() {
		return (
			<div>
				<div className={style.container}>
					<h1>Animation guide</h1>
					Soon <sup>TM</sup>
				</div>
			</div>
		);
	}
}