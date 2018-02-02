import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '_pages/NotFoundPage';
import StatusPage from '_pages/StatusPage';
import HeaderContainer from '_containers/HeaderContainer';
import HomeContainer from '_containers/HomeContainer';
import ProductContainer from '_containers/ProductContainer';
import FooterContainer from '_containers/FooterContainer';
import CategoryContainer from '_containers/CategoryContainer';
import UserContainer from '_containers/UserContainer';
import TopChartsContainer from '_containers/TopChartsContainer';
import SearchContainer from '_containers/SearchContainer';
import RegistrationContainer from '_containers/RegistrationContainer';
import { getSlug } from '_utils/common';
import styles from './styles.scss';

export default class MainPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.any.isRequired
  };

  getContent = categorySlug => {
    const {
      match: {
        params: { section, app, search, subscribeStatus, unsubscribeStatus },
        url
      }
    } = this.props;
    if (url === '/') {
      return <HomeContainer />;
    }
    if (
      subscribeStatus === 'success' ||
      subscribeStatus === 'error' ||
      unsubscribeStatus === 'success' ||
      unsubscribeStatus === 'error'
    ) {
      return (
        <StatusPage
          subscribeStatus={subscribeStatus}
          unsubscribeStatus={unsubscribeStatus}
        />
      );
    }
    if (categorySlug) {
      return <CategoryContainer categorySlug={categorySlug} />;
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
      return (
        <SearchContainer
          search={search}
          isTooShortRequest={search.length < 3}
        />
      );
    }
    return <NotFoundPage />;
  };

  getTab(categorySlug) {
    const { match: { params: { section }, path } } = this.props;

    if (path === '/') {
      return 'home';
    }
    if (section === 'topcharts') {
      return section;
    }
    return categorySlug;
  }

  render() {
    const { match: { params: { category, section, search } } } = this.props;
    const categorySlug = category && getSlug(category);

    if (['signIn', 'signUp', 'forgotPassword'].includes(section)) {
      return <RegistrationContainer section={section} />;
    }

    return (
      <div className={styles.page}>
        <HeaderContainer
          activeTab={this.getTab(categorySlug)}
          searchQuery={search || ''}
        />
        <div className={styles.content}>{this.getContent(categorySlug)}</div>
        <FooterContainer />
      </div>
    );
  }
}
