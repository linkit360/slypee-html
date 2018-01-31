import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApp } from '_actions';
import Product from '_components/Product';
import { productCategoryNameSelector } from '_selectors';

class ProductContainer extends React.Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    productCategoryName: PropTypes.string.isRequired,
    fetchApp: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { appId, fetchApp } = this.props;

    fetchApp({ id: appId });
  }

  render() {
    const { product, productCategoryName } = this.props;

    if (!product || !productCategoryName) {
      return null;
    }

    return <Product {...product} category={productCategoryName} />;
  }
}

const mapStateToProps = state => ({
  product: state.product,
  productCategoryName: productCategoryNameSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApp
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
