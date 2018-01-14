import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMain } from '_actions';
import Product from '_components/Product';

class ProductContainer extends React.Component {
  static propTypes = {
    appId: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired,
    fetchMain: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { product, fetchMain } = this.props;

    if (!product) {
      fetchMain();
    }
  }

  render() {
    const { product, appId } = this.props;

    if (!product) {
      return null;
    }

    return <Product app={{ ...product, id: appId }} />;
  }
}

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMain
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
