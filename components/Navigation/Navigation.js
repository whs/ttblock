import React from 'react';
import style from './style.css';
import Link from '../Link';

function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        <li className={style.main}>
          <a href="/" onClick={Link.handleClick}>Triple Trouble Blocking Guide</a>:
        </li>
        <li>
          <a href="/elementalist" onClick={Link.handleClick}>Elementalist</a>
        </li>
        <li>
          <a href="/animation" onClick={Link.handleClick}>Wurm Animation</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
