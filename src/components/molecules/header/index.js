import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export function Header() {
  return (
    <nav className="navbar navbar-static-top header">
      <Link to='/' className="navbar-brand logo">Ren</Link>
    </nav>
  )
}
