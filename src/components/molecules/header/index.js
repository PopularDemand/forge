import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Ren } from '../../atoms/logo';

// import { headerSelector } from './selector';
import './header.css';

export function Header() {
  return (
    <nav className="navbar navbar-fixed-top header">
      <Link to='/' className="navbar-brand">
        <Ren />
      </Link>
    </nav>
  );
}

const headerSelector = (state) => {
  console.log(state.app)
  return {
    ...state.app
  }
}

const mapState = (state) => {
  // debugger
  return { ...headerSelector(state) }
}

export const ConnectedHeader = connect(
  mapState
)(Header);
