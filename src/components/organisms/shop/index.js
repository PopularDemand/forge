import React from 'react';
import { Link } from 'react-router-dom';
import { compose, defaultProps } from 'recompose';

import './shop.css';

export function Shop({ header }) {
  return (
    <div className="shop-page">
      <div className="jumbotron hero">
        <h1 className="hero-text">
          {header}
        </h1>
      </div>

      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-sm-3 hide-xs">
            <nav className="side-nav">
              <Link to="#" className="side-nav-link">Apparel</Link>
              <Link to="#" className="side-nav-link">Accessories</Link>
              <Link to="#" className="side-nav-link">Household</Link>
              <Link to="#" className="side-nav-link">Gifts</Link>
            </nav>
          </div>
          
          <div className="col-sm-9">
            <div className="row">
              <h4>Most Popular</h4>
              <input type="text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const enhance = compose(
  defaultProps({
    header: 'Gear Up For Great Changes'
  })
);

export default enhance(Shop);