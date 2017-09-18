import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import { Ren } from '../../atoms/logo';

import { headerSelector } from './selector';
import './header.scss';

export function Header({ user }) {
  return (
    <nav className="navbar navbar-fixed-top header">
      <Link to='/' className="navbar-brand">
        <Ren />
      </Link>
    </nav>
  );
}

const mapState = (state) => {
  return { ...headerSelector(state) }
}

const enhance = compose(
  connect(mapState)
);

export const EnhancedHeader = enhance(Header);