/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import style from './style.css';
import Link from '../components/Link';
import GwSkill from '../components/GwSkill';
import GwSpec from '../components/GwSpec';
import GwTrait from '../components/GwTrait';
import { TraitExplaination, Explaination } from '../components/TraitExplaination';
import { Step, Figure } from '../components/Step';

export default class extends Component {

	render() {
		return (
			<div>
				<div className={style.container}>
					<img src="/Elementalist_icon.png" className={style.profession} />
					<div className={style.classHeader}>
						<h1>Elementalist</h1>
						<h3>Triple Trouble Blocking Guide</h3>
						<p>
							<strong>Quick Links: </strong> <a href="#weapon">Weapons</a> &middot; <a href="#spec">Specialization</a> &middot; <a href="#step">Steps</a>
						</p>
					</div>
				</div>
				<div className={style.container} id="weapon">
					<h4>Weapons</h4>
					<div><p />A <strong>Focus</strong> is required. Usually paired with <strong>Dagger</strong> for <GwSkill id={5525} /> (Earth Skill 2), another reflect, but is not really used here.</div>
					<p>If you don't already have one you don't need to get an exotic, as we are looking for invulnerability here and not damage. You can use the trading post at Marshwatch Haven.</p>
				</div>
				<div className={style.container} id="spec">
					<h4>Specializations</h4>
				</div>
				<TraitExplaination>
					<GwSpec id={26} highlight={[282, 277, 1674]} />
					<GwSpec id={41} highlight={[232, 214, 226]} />
					<GwSpec id={48} highlight={[1952, 2015, 1986]} />
					<Explaination id={0}>
						<p>Here's the list of specialization you should be running. The major  focus here is to reduce cooldown for Earth and Air attunement.</p>
						<div><p />The Tempest line is optional. The main use here is from <GwTrait id={1952} />. If you don't have it you can use any other lines.</div>
						<p className={style.tip}>Click on a trait to view its explaination</p>
					</Explaination>
					<Explaination id={282}>
						<h4>Earth's Embrace</h4>
						<p>Help with survivability. Hopefully you won't really need it.</p>
					</Explaination>
					<Explaination id={277}>
						<h4>Geomancer's Training</h4>
						<div><p />Main trait of this specialization. It is used to reduce cooldown of <GwSkill id={5521} /></div>
					</Explaination>
					<Explaination id={1674}>
						<h4>Stone Heart</h4>
						<div><p />Help with survivability. I found that with how the veteran wurms attack you <GwTrait id={1508} /> isn't really helpful here.</div>
					</Explaination>
					<Explaination id={232}>
						<h4>Ferocious Winds</h4>
						<p>This one is from meta build. Helps with DPS.</p>
					</Explaination>
					<Explaination id={214}>
						<h4>Aeromancer's Training</h4>
						<div><p />Main trait of this specialization. It is used to reduce cooldown of <GwSkill id={5530} /></div>
					</Explaination>
					<Explaination id={226}>
						<h4>Bolt to the Heart</h4>
						<p>This one is from meta build. Helps with DPS.</p>
					</Explaination>
					<Explaination id={1952}>
						<h4>Gale Song</h4>
						<p>This trait help you back on your feet when you get knocked back from failed spin dodging, or when veteran wurms slammed you.</p>
						<div><p />Ideally you can predict the attack and can dodge, or pop <GwSkill id={5639} /> or <GwSkill id={5641} /> beforehand to save your positioning but if you can't, this trait will save you once every 40 seconds.</div>
					</Explaination>
					<Explaination id={2015}>
						<h4>Harmonious Conduit</h4>
						<p>This trait is from meta build. It increase your damage output for a short time after you have successfully overload an attunement.</p>
						<p>I haven't tried the stability, but it probably can be used in clutch situation to save your positioning. However, it might grab the attention of veterans around you.</p>
					</Explaination>
					<Explaination id={1986}>
						<h4>Elemental Bastion</h4>
						<p>This trait is from meta build. It reduce incoming damage for 5 seconds when your HP hit 75%.</p>
					</Explaination>
				</TraitExplaination>
				<p id="step" />
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
