import React from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps } from 'recompose';
import { chunk } from 'lodash';

import SideNav from '../../molecules/sideNav';

import './shop.css';
import * as actionCreators from '../../../store/actions/shop';
import { shopSelector } from './selector';

export function Shop({
  header,
  displayedProducts,
  categoriesById,
  categories,
  variationsById,
  selectedProduct,
  selectedCategory,
  cart,
  setSelectedCategory
}) {
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
            <SideNav
              headline="Categories"
              navLinks={categories}
              selectedLink={selectedCategory}
              onLinkClick={setSelectedCategory}
            />
          </div>
          
          <div className="col-sm-9">
            <div className="row grid-header">
              <h3 className="title">Most Popular</h3>
              <input className="search" type="text" placeholder="Search" />
            </div>
            <div className="row product-grid">
              {displayedProducts.length && chunk(displayedProducts, 3).map((products) => (
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
  );
}

function mapState(state) {
  return { ...shopSelector(state) }
}

const enhance = compose(
  connect(mapState, actionCreators),
  defaultProps({
    header: 'Gear Up For Great Changes'
  })
);

export default enhance(Shop);