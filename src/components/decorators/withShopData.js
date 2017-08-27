import { compose, lifecycle } from 'recompose';

const enhance = compose(
  lifecycle({
    componentWillMount() {
      this.props.loadProducts()
    }
  })
);

export default enhance;