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
      },
      2: {
        'id': 2,
        'name': 'Generic Name 2',
        'image': 'http://via.placeholder.com/150x150',
        'description': 'Generic product description. Comes in small, medium, and large sizes',
        'price': '12.00',
        productVariationsById: {
          1: { type: 'small', price: '12.00'}
        }
      },
      3: {
        'id': 3,
        'name': 'Generic Name 3',
        'image': 'http://via.placeholder.com/150x150',
        'description': 'Generic product description. Comes in small, medium, and large sizes',
        'price': '12.00',
        productVariationsById: {
          1: { type: 'small', price: '12.00'}
        }
      },
      4: {
        'id': 4,
        'name': 'Generic Name 4',
        'image': 'http://via.placeholder.com/150x150',
        'description': 'Generic product description. Comes in small, medium, and large sizes',
        'price': '12.00',
        productVariationsById: {
          1: { type: 'small', price: '12.00'}
        }
      },
    },
    categoriesById: {
      1: {
        id: 1,
        name: 'Popular',
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