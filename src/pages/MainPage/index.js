import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '_pages/NotFoundPage';
import HeaderContainer from '_containers/HeaderContainer';
import HomeContainer from '_containers/HomeContainer';
import ProductContainer from '_containers/ProductContainer';
import FooterContainer from '_containers/FooterContainer';
import CategoryContainer from '_containers/CategoryContainer';
import UserContainer from '_containers/UserContainer';
import TopChartsContainer from '_containers/TopChartsContainer';
import styles from './styles.scss';

const getContent = (category, section, app, search) => {
  if (category) {
    return <CategoryContainer nameCategory={category} />;
  }
  if (app) {
    return <ProductContainer appId={app} />;
  }
  if (section) {
    switch (section) {
      case 'topcharts':
        return <TopChartsContainer />;
      case 'user':
        return <UserContainer />;
      default:
        return <NotFoundPage />;
    }
  }
  if (search) {
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
    const { category, section, app, search } = params;

    return (
      <div>
        <HeaderContainer
          activeTab={!!search || section || category || 'home'}
        />
        <div className={styles.content}>
          {getContent(category, section, app, search)}
        </div>
        <FooterContainer />
      </div>
    );
  }
}
