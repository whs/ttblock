import React, { Component } from 'react';
import style from './style.css';
import { specContext, traitContext } from './context';

class GwSpec extends Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	getDetail(){
		return specContext('./' + this.props.id + '.json');
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

		let traits = traitList.map((item, index) => {
			let trait = this.getTraitDetail(item);
			let cls = [style.trait];

			if(trait.slot != 'Minor' && this.props.highlight){
				if(this.props.highlight.indexOf(trait.id) != -1){
					cls.push(style.highlight);
				}else{
					cls.push(style.unhighlight);
				}
			}

			return (
				<div className={cls.join(' ')} data-index={index}>
					<img src={trait.icon} />
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

	getTraitDetail(id){
		return traitContext(`./${id}.json`);
	}
}

export default GwSpec;
