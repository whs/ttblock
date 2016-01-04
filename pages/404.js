/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import style from './style.css';

export default class extends Component {

  render() {
    return (
      <div className={style.container}>
        <h1>Not Found</h1>
        <p>The page you're looking for was not found.</p>
      </div>
    );
  }

}
