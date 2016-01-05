/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import style from './style.css';
import Link from '../components/Link';
import GwSkill from '../components/GwSkill';
import { Step, Figure } from '../components/Step';

export default class extends Component {

	render() {
		return (
			<div>
				<div className={style.container}>
					<img src="/Elementalist_icon.png" className={style.profession} />
					<h1>Elementalist</h1>
					<h3>Triple Trouble Blocking Guide</h3>
					<p>
						<strong>Quick Links: </strong> <a href="#weapon">Weapons</a> &middot; <a href="#spec">Specialization</a> &middot; <a href="#step">Steps</a>
					</p>
				</div>
				<div className={style.container} id="weapon">
					<h4>Weapons</h4>
					<div><p />A <strong>Focus</strong> is required. Usually paired with <strong>Dagger</strong> for <GwSkill id={5525} /> (Earth Skill 2), another reflect, but is not really used here.</div>
					<p>If you don't already have one you don't need to get an exotic, as we are looking for invulnerability here and not damage. You can use the trading post at Marshwatch Haven.</p>
				</div>
				<div className={style.container} id="spec">
					<h4>Specialization</h4>
				</div>
				<div id="step"></div>
				<Step number={1}>
					<p>When the wurm spawn it will spin twice before starts</p>
					<ul>
						<li><span className={style.amber}>Amber</span> will eat the abomination in between the spins</li>
					</ul>
					<p className={style.warn}>Very rarely, it will spin only once before it starts.</p>
				</Step>
				<Step number={2}>
					<Figure><img src="/ele/spot-1.jpg" /></Figure>
					<p>Position yourself at this spot. You should be right below rock to the left, and one step to the right of it.</p>
					<ul>
						<li><span className={style.amber}>Amber</span> has a bush that you can also use as reference</li>
					</ul>
					<div className={style.tip}>The rocks can be used as a reference. The model of all 3 wurms are the same.</div>
				</Step>
				<Step number={3}>
					<p>When the wurm is about to spit (<a href="/animation" onClick={Link.handleClick}>animation guide</a>), use an invulnerability skill.</p>
					<ul>
						<li><GwSkill id={5521} /> (Earth 5)</li>
						<li><GwSkill id={5546} /> (Utility) Skill 5: <GwSkill id={5623} /> is also usable. Keep in mind that with its very short duration the timing is more precise.</li>
					</ul>
					<p>The skill should be pressed closer to the actual spit (usually when the head is going down) to be able to cover all 3, as the skills has very short duration</p>
					<p className={style.warn}>The wurm may spit back to back, so if you have to use Magnetic Shield casting it beforehand could be useful.</p>
				</Step>
				<Step number={4}>
					<p>The game will show 3 <em>Invulnerable</em> messages, one per direction if you have blocked husks. If there are 9, you have blocked eggs.</p>
					<p />
					<div className={style.tip}>Since husk has longer cooldown, you can use <GwSkill id={5530} /> (Air 4) to block eggs if you know it will be eggs. It is safer, as it does not requires precise positioning. However, with its long cast time it should be casted immediately after the spit animation start.</div>
				</Step>
				<div className={style.container}>
					<h4>Other tips</h4>
					<ul className={style.tipList}>
						<li>Only one person will get <em>Invulnerable</em> message. If you're doing it as a group and you get no message, you should be using another invulnerability skill on the second spit if it is spitting back to back.</li>
						<li><GwSkill id={21647} /> (Magnetic Shield 2) block one attack, which can be used to block spins. Keep in mind though that if something attack you during the block it will be blocked instead of the spin. </li>
						<li>Magnetic Shield autoattack chain has a charging attack which cause you to lose positioning. If you're holding it during burn phase, it is better not to burn at all</li>
						<li><GwSkill id={15795} /> and Take Root (Sylvari racial elite) can be used to block spits caused by small spins. When used this way you will see a lot of <em>Invulnerable</em> message.</li>
						<li><GwSkill id={5555} /> (Earth Focus 4) clears two conditions. It also can be used to reflect two set of eggs.</li>
					</ul>
				</div>
				<div className={style.container}>
					This guide is based on <a href="https://wiki.guildwars2.com/wiki/User:Ventaurion/WurmNotes/SoloEleBlock">Ventaurion's SoloEleBlock guide</a>.
				</div>
			</div>
		);
	}

}
