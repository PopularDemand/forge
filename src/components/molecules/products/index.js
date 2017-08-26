import React from 'react';
import PropTypes from 'prop-types';

export default function Products({ displayedProducts, selectedCategory }) {
  return (
    <div className="products">
      <div className="grid-header">
        <h3 className="title">{selectedCategory.name}</h3>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="product-grid">
        {displayedProducts.length && displayedProducts.map((product, id) => (
          <div className="product-card" key={product.name}>
            <div className="image-background">
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})`}}
              ></div>
            </div>
            <p className="name">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  displayedProducts: PropTypes.array,
  selectedCategory: PropTypes.object
};
