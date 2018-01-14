import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '_pages/NotFound';
import HeaderContainer from '_containers/HeaderContainer';
import HomeContainer from '_containers/HomeContainer';
import ProductContainer from '_containers/ProductContainer';
import FooterContainer from '_containers/FooterContainer';
import styles from './styles.scss';

const getContent = (category, section, app) => {
  if (category) {
    return <NotFoundPage />;
  }
  if (app) {
    return <ProductContainer appId={app} />;
  }
  if (section) {
    if (section === 'topcharts') {
      return <NotFoundPage />;
    }
    return <NotFoundPage />;
  }
  return <HomeContainer />;
};

export default class MainPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.any.isRequired
  };

  render() {
    const { match: { params } } = this.props;
    const { category, section, app } = params;

    return (
      <div>
        <HeaderContainer activeTab={category || section || 'home'} />
        <div className={styles.content}>
          {getContent(category, section, app)}
        </div>
        <FooterContainer />
      </div>
    );
  }
}
