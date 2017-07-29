export const exampleState = {
  app: {
    user: { id: 1, name: 'Alexa' }
  },
  shop: {
    productsById: {
      1: {
        'id': 1,
        'name': 'Generic Name',
        'image': 'http://via.placeholder.com/150x150',
        'description': 'Generic product description. Comes in small, medium, and large sizes',
        'price': '12.00',
        productVariationsById: {
          1: { type: 'small', price: '12.00'}
        }
      }
    },
    categoriesById: {
      1: { id: 1, name: 'Most Popular' },
      2: { id: 2, name: 'Apparel' },
      3: { id: 3, name: 'Accessories' },
      4: { id: 4, name: 'Household' },
      5: { id: 5, name: 'Gifts' }
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