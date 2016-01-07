import React, { Component } from 'react';
import style from './style.css';
import context from './context';
import GwTrait from '../GwTrait';

class GwSpec extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired,
		onTraitClick: React.PropTypes.func
	};

	getDetail(){
		return context('./' + this.props.id + '.json');
	}

	render(){
		let detail = this.getDetail();

		let traitList = [
			detail.minor_traits[0],
			detail.major_traits[0],
			detail.major_traits[1],
			detail.major_traits[2],

			detail.minor_traits[1],
			detail.major_traits[3],
			detail.major_traits[4],
			detail.major_traits[5],

			detail.minor_traits[2],
			detail.major_traits[6],
			detail.major_traits[7],
			detail.major_traits[8],
		];

		let traits = traitList.map((id, index) => {
			let cls = [style.trait];

			if(this.props.highlight){
				if(this.props.highlight.indexOf(id) != -1 || [0, 4, 8].indexOf(index) != -1){
					cls.push(style.highlight);
				}else{
					cls.push(style.unhighlight);
				}
			}

			return (
				<div className={cls.join(' ')} data-index={index} key={id}>
					<GwTrait id={id} iconOnly={true} onClick={this.onTraitClick.bind(this, id)} />
				</div>
			)
		});

		return (
			<div className={style.specWrap}>
				<div className={style.spec} style={{backgroundImage: `url('${detail.background}')`}}>
					<div className={style.specName}>
						{detail.name}
					</div>
					<img src={detail.icon} className={style.specIcon} />
					{traits}
				</div>
			</div>
		);
	}

	onTraitClick(id, e){
		return this.props.onTraitClick && this.props.onTraitClick(e, id);
	}
}

export default GwSpec;
