import React, { Component } from 'react';
import style from './style.css';
import Link from '../components/Link';
import { Step, Figure, FigureDescription } from '../components/Step';
import WurmVideo from '../components/WurmVideo';

export default class extends Component {
	render() {
		return (
			<div>
				<div className={style.container}>
					<h1>Animation guide</h1>
					<p>Knowing the animation and the attack cycle is the key to successful blocking. The wurm has several animations:</p>
					<p className={style.tip}>Many of these animations are present at Great Jungle Wurm at Caledon Forest.</p>
				</div>
				<Step>
					<Figure><video /></Figure>
					<FigureDescription forFigure={0}>
						<h4>Husk spit</h4>
						<p>Spawn 3 husks, one per direction</p>
						<p><strong>Cooldown</strong>: 100s for Crimson/Amber, 90s for Cobalt</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={1}>
						<h4>Egg spit</h4>
						<p>Spawn 9 eggs, 3 per direction. If not destroyed the eggs will spawn larvae.</p>
						<p><strong>Cooldown</strong>: 50s for Crimson/Amber, 45s for Cobalt</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={2}>
						<h4>Large Spin</h4>
						<p>Damage and knockback</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={3}>
						<h4>Small spin</h4>
						<p>Damage and knockback. Spit several AOE drools in the area.</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={4}>
						<h4><span className={style.amber}>Amber</span> Moving underground</h4>
						<p>Eat the zerg. Will be the next animation after 20 people with wurm attractant buff stacked.</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={5}>
						<h4><span className={style.amber}>Amber</span> Spitting zerg</h4>
						<p>Spit the zerg out. Will be the next animation after pyloric valve is destroyed.</p>
						<p className={style.tip}>This animation is the same as fear animation from Great Jungle Wurm at Caledon Forest.</p>
					</FigureDescription>

					<Figure><video /></Figure>
					<FigureDescription forFigure={6}>
						<h4><span className={style.cobalt}>Cobalt</span> Eating keg</h4>
						<p>Occur when burn phase triggered.</p>
						<p className={style.tip}>This animation is the same as Great Jungle Wurm's eating summoned husk.</p>
					</FigureDescription>
				</Step>
				<div className={style.container}>
					<p>The animation you should be on the watch are husk and egg spits. They use the same animation, but has varying cooldown. With this difference in cooldown, a cycle can be derived:</p>
					<ol>
						<li>Start with 2 large spins</li>
						<li><strong>Spit twice in a row</strong></li>
						<li>Small spin</li>
						<li>Large spin</li>
						<li>A few more alternating spin/idle</li>
						<li><strong>Egg spit</strong></li>
						<li>Large spin</li>
						<li>Small spin</li>
						<li>
							A few more spins, then repeat from 2
							<div className={style.tip}>1-2 spins could be added between the two spits on the repeating cycle, but never on the starting cycle</div>
						</li>
					</ol>
					<p>Note that once both husks and eggs are off cooldown, it can use both skill in any order.</p>
					<p className={style.warn}><strong>The wurm does not operate on a cycle</strong>, rather the cycle is a simplification of the cooldown. If animation outside of the cycle (eg. burn phase, eating the zerg) happen the cycle could be inaccurate.</p>
				</div>
				<div className={style.container}>
					<p>This video demonstrate a blocking attempt at Crimson. A husk and eggs cooldown timer is provided, but should be disabled to simulate in game attempt.</p>
				</div>
				<WurmVideo
					src="/animation.webm"
					egg={[
						29,
						120,
						170,
						241,
						292,
						358,
						464,
						570,
						654,
						704,
						772,
						823
					]}
					husk={[
						37,
						138,
						249,
						350,
						456,
						562,
						662,
						780
					]}
				/>
			</div>
		);
	}
}