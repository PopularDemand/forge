import Shop, { initialAction } from '../../components/organisms/shop';

const routes = [
  {
    path: '/gear-shop',
    component: Shop,
    initialAction
  },
  {
    path: '/gear-shop/:category',
    component: Shop,
    initialAction
  }
];

export default routes;
