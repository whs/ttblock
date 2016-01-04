import React, { PropTypes } from 'react';
import './style.css';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
