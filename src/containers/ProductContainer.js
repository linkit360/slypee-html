import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApp, subscribe, unsubscribe } from '_actions';
import Product from '_components/Product';
import { productCategoryNameSelector } from '_selectors';
import NotFoundPage from '_pages/NotFoundPage';
import PreloaderPage from '_pages/PreloaderPage';

class ProductContainer extends React.Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    productCategoryName: PropTypes.string,
    fetchApp: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { appId, fetchApp } = this.props;

    fetchApp({ id: appId });
  }

  render() {
    const { product, productCategoryName, subscribe, unsubscribe } = this.props;

    if (product.readyStatus === 'FAILURE') {
      return <NotFoundPage />;
    }
    if (!product.app || !productCategoryName) {
      return <PreloaderPage />;
    }

    return (
      <Product
        {...product.app}
        category={productCategoryName}
        onSubscribe={subscribe}
        onUnsubscribe={unsubscribe}
      />
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  productCategoryName: productCategoryNameSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApp,
      subscribe,
      unsubscribe
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
