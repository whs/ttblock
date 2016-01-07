import React, { Component } from 'react';
import context from '../GwTrait/context';
import GwSkillDescription from '../GwSkillDescription';

export default class GwTraitDescription extends GwSkillDescription {
	getDetail(){
		return context('./' + this.props.id + '.json');
	}
}
