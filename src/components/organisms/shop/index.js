import React from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, setStatic } from 'recompose';

import SideNav from '../../molecules/sideNav';
import Products from '../../molecules/products';
import withShopData from '../../decorators/withShopData'

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

      <div className="content-container">
        <div className="content">
          <div className="side-nav-wrapper">
            <SideNav
              headline="Categories"
              navLinks={categories}
              selectedLink={selectedCategory.id}
              onLinkClick={setSelectedCategory}
            />
          </div>

          <main className="main-content">
            <Products
              selectedCategory={selectedCategory}
              displayedProducts={displayedProducts}
            />
          </main>
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
  withShopData,
  defaultProps({
    header: 'Gear Up For Great Changes'
  }),
  setStatic('initialAction', () => actionCreators.loadProducts())
);

export default enhance(Shop);
