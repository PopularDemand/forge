import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { chunk } from 'lodash';
import { compose, defaultProps } from 'recompose';

import './shop.css';
import products from './products.tmp.json';

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
              <div className="side-nav-header">
                <h4>Categories</h4>
              </div>
              <Link to="#" className="side-nav-link">Most Popular</Link>
              <Link to="#" className="side-nav-link">Apparel</Link>
              <Link to="#" className="side-nav-link">Accessories</Link>
              <Link to="#" className="side-nav-link">Household</Link>
              <Link to="#" className="side-nav-link">Gifts</Link>
            </nav>
          </div>
          
          <div className="col-sm-9">
            <div className="row grid-header">
              <h3 className="title">Most Popular</h3>
              <input className="search" type="text" placeholder="Search" />
            </div>
            <div className="row product-grid">
              {products.length && chunk(products, 3).map((products) => (
                <div className="product-row" key={products[0].id}>
                  {products.map((product) => (
                    <div className="col-sm-4" key={product.id}>
                      <div className="product-card">
                        <div className="name">{product.name}</div>
                        <img src={product.image} alt="product"/>
                        <div className="description">{product.description}</div>
                        <div className="price">{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

const enhance = compose(
  connect(mapStateToProps),
  defaultProps({
    header: 'Gear Up For Great Changes'
  })
);

export default enhance(Shop);