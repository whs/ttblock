/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import config from '../../config';

function Html({ title, description, body, debug }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Merriweather:400,700,300' rel='stylesheet' type='text/css' />
        <link href='/octicons/octicons.css' rel='stylesheet' type='text/css' />
        <script src='/app.js' />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;
