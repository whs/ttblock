/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import style from './style.css';
import Link from '../components/Link';

export default class extends Component {

	render() {
		return (
			<div>
				<div className={style.container}>
					<h1>Triple Trouble Blocking Guide</h1>
					<p className={style.preamble}>Triple Trouble is a unique boss: not only coodination and DPS, it also requires player skills to complete it. In this guide, we will cover the most important part of the fight: <strong>preventing mobs from ruining your runs</strong>.</p>
					<p>At every heads, the wurm will spit out eggs and husks on a set interval. To be able to complete this, those enemies should be dealed with. The traditional way of doing it is to reflect or use projectile destroyers when the wurm is spitting eggs, while the unblockable husks are dealed by people with condition-based build.</p>
					<p>As knowledge of the fight improve, people found that invulnerability can also block projectiles which remove the need to split the zerg to two groups. It is also easier to setup: an organized triple decap map could be setup by <strong>6 people</strong>: one commander and one blocker per head.</p>
				</div>
				<div className={style.container}>
					<p>This guide is split into two parts: guide for each professions, and the animation guide. Use the top bar to change to the part you wish to read.</p>

					<ul>
						<li>
							<a href="/elementalist" onClick={Link.handleClick}>Elementalist blocking</a>
						</li>
						<li>
							<a href="/animation" onClick={Link.handleClick}>Animation guide</a>
						</li>
					</ul>
				</div>
				<div className={style.container}>
					This guide is made possible by the help of following people:
					<ul>
						<li>Created by Zemoregal</li>
						<li>Elementalist guide based on <a href="https://wiki.guildwars2.com/wiki/User:Ventaurion/WurmNotes/SoloEleBlock">Ventaurion's SoloEleBlock</a></li>
						<li><a href="https://github.com/whs/ttblock">Fork and contribute to this guide on GitHub</a></li>
					</ul>
				</div>
			</div>
		);
	}

}
