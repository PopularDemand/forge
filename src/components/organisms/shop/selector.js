import { createSelector } from 'reselect';
import { map, size } from 'lodash';

const getShopState = (state) => {
  return state.shop;
}

const getCategories = ({ categoriesById }) => {
  return map(categoriesById, (category) => category);
}

const getDisplayedProducts = ({ 
  selectedCategory,
  categoriesById,
  productsById
}) => {
  if (!selectedCategory || !size(categoriesById) || !size(productsById)) {
    return [];
  }

  return map(categoriesById[selectedCategory].products, (id) => productsById[id]);
}

export const shopSelector = createSelector(
  [getShopState],
  (shop) => {
    return {
      ...shop,
      categories: getCategories(shop),
      displayedProducts: getDisplayedProducts(shop)
    };
  }
);
