import React, { Component } from 'react';
import context from './context';
import GwSkill from '../GwSkill';
import GwTraitDescription from '../GwTraitDescription';

export default class GwTrait extends GwSkill {
	getDetail(){
		return context('./' + this.props.id + '.json');
	}
	getPopup(){
		return <GwTraitDescription id={this.props.id} />;
	}
}
