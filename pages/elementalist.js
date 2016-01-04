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
					<img src="/Elementalist_icon.png" className={style.profession} />
					<h1>Elementalist</h1>
					<h3>Triple Trouble Blocking Guide</h3>
					<p>
						<strong>Quick Links: </strong> <a href="#weapon">Weapons</a> &middot; <a href="#spec">Specialization</a> &middot; <a href="#step">Steps</a>
					</p>
				</div>
				<div className={style.container} id="weapon">
					<h4>Weapons</h4>
					<p>A <strong>Focus</strong> is required. Usually paired with <strong>Dagger</strong> for Ring of Earth (Skill 2), another reflect, but is not really used here.</p>
					<p>No need to use an exotic one, as we are looking for invulnerability here and not damage. You can use the trading post at Marshwatch Haven.</p>
				</div>
				<div className={style.container} id="spec">
					<h4>Specialization</h4>
				</div>
				<div className={style.step} id="step">
					<div className={style.figure}></div>
					<div className={style.description}>
						<h4>Step 1</h4>
						<p>When the wurm spawn it will spin twice before starts</p>
						<ul>
							<li><span className={style.amber}>Amber</span> will eat the abomination in between the spins</li>
						</ul>
						<p className={style.warn}>Very rarely, it will spin only once before it starts.</p>
					</div>
				</div>
				<div className={style.step}>
					<div className={style.figure}></div>
					<div className={style.description}>
						<h4>Step 2</h4>
						<p>Position yourself at this spot. You should be right below rock to the left, and one step to the right of it.</p>
						<ul>
							<li><span className={style.amber}>Amber</span> has a bush that you can also use as reference</li>
						</ul>
					</div>
				</div>
				<div className={style.step}>
					<div className={style.figure}></div>
					<div className={style.description}>
						<h4>Step 3</h4>
						<p>When the wurm is about to spit (<a href="/animation" onClick={Link.handleClick}>animation guide</a>), use an invulnerability skill.</p>
						<p>The skill should be pressed closer to the actual spit (usually when the head is going down) to be able to cover all 3, as the skills has very short duration</p>
						<p className={style.warn}>The wurm may spit back to back, so if you have to use Magnetic Shield casting it beforehand could be useful.</p>
						<p className={style.warn}>Fortify (Magnetic Shield 5) has a very short duration, so the timing is more precise.</p>
					</div>
				</div>
				<div className={style.step}>
					<div className={style.figure}></div>
					<div className={style.description}>
						<h4>Step 4</h4>
						<p>The game will show 3 <em>Invulnerable</em>, one per direction if you have blocked husks. If there are 9, you have blocked eggs.</p>
						<p className={style.tip}>Since husk has longer cooldown, you can use Swirling Winds (Air 4) to block next set of eggs. It is safer, as it does not requires precise positioning. Consider the <a href="/animation" onClick={Link.handleClick}>animation guide</a> for a simplified version of wurm skill rotation.</p>
					</div>
				</div>
				<div className={style.container}>
					<h4>Other tips</h4>
					<ul className={style.tipList}>
						<li>Only one person will get <em>Invulnerable</em> message. If you're doing it as a group and you get no message, you should be using another invulnerability skill on the second spit if it is spitting back to back.</li>
						<li>Stone Sheath (Magnetic Shield 2) block one attack, which can be used to block spins. Keep in mind though that if something attack you during the block it will be blocked instead of the spin. </li>
						<li>Magnetic Shield autoattack chain has a charging attack which cause you to lose positioning. If you're holding it during burn phase, it is better not to burn at all</li>
						<li>Mist Form and Take Root (Sylvari racial elite) can be used to block spits caused by small spins. When used this way you will see a lot of <em>Invulnerable</em> message.</li>
						<li>Magnetic Wave (Earth Focus 4) clears two conditions. It also can be used to reflect two set of eggs.</li>
					</ul>
				</div>
				<div className={style.container}>
					This guide is based on <a href="https://wiki.guildwars2.com/wiki/User:Ventaurion/WurmNotes/SoloEleBlock">Ventaurion's SoloEleBlock guide</a>.
				</div>
			</div>
		);
	}

}
