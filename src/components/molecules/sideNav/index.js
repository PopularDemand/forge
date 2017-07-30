import React from 'react';
import { Link } from 'react-router-dom';
// import { compose, withHandlers, withProps } from 'recompose';
import classNames from 'classnames';

export default function SideNav({ headline, navLinks, selectedLink, onLinkClick }) {
  return (
    <nav className="side-nav">
      <div className="side-nav-header">
        <h4>{headline}</h4>
      </div>
      {navLinks.length && navLinks.map((link) => {
        return (
          <Link
            to={`/gear-shop/${link.name}`} 
            key={link.name}
            onClick={() => onLinkClick(link.id)}
            className={classNames("side-nav-link", {
              selected: selectedLink === link.id
            })}>
              {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
