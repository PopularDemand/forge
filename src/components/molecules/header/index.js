import React from 'react';
import { Link } from 'react-router-dom';

import { Ren } from '../../atoms/logo';

import './header.css';

export function Header() {
  return (
    <nav className="navbar navbar-fixed-top header">
      <Link to='/' className="navbar-brand">
        <Ren />
      </Link>
    </nav>
  )
}
