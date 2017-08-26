import { compose, lifecycle } from 'recompose';
import { getProducts } from '../../lib/shop';

const enhance = compose(
  lifecycle({
    componentWillMount() {
      this.props.loadProducts()
      .then(console.log)
    }
  })
);

export default enhance;