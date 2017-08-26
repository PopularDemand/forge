export const exampleState = {
  app: {
    user: { id: 1, name: 'Alexa' }
  },
  shop: {
    categoriesById: {
      1: {
        id: 1,
        name: 'Most Popular',
        products: [1, 2, 3]
      },
      2: {
        id: 2,
        name: 'Apparel',
        products: [2, 4]
      },
      3: {
        id: 3,
        name: 'Accessories',
        products: [3, 4]
      },
      4: {
        id: 4,
        name: 'Household',
        products: [4, 1]
      },
      5: {
        id: 5,
        name: 'Gifts',
        products: []
      }
    },
    variationsById: {
      1: { id: 1, type: 'small' }
    },
    selectedProduct: 1,
    selectedCategory: 1,
    cart: {
      cartedProductsById: {
        1: {
          product: { id: 1, variation: 1 },
          quantity: 1
        }
      },
      shipped: false
    }
  }
};