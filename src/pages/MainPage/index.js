import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '_pages/NotFound';
import HeaderContainer from '_containers/HeaderContainer';
import HomeContainer from '_containers/HomeContainer';
import FooterContainer from '_containers/FooterContainer';

const tabs = [
  '',
  'topcharts',
  'games',
  'educations',
  'business',
  'lifestyle',
  'sociallife',
  'videos'
];

const getContent = activeTab => {
  switch (activeTab) {
    case '':
      return <HomeContainer />;
    default:
      return null;
  }
};

class MainPage extends React.PureComponent {
  static propTypes = {
    match: PropTypes.any.isRequired
  };

  render() {
    const { match: { params: { tab } } } = this.props;
    const activeTab = tab || '';

    if (!tabs.includes(activeTab)) {
      return <NotFoundPage />;
    }

    return (
      <div>
        <HeaderContainer activeTab={activeTab} />
        {getContent(activeTab)}
        <FooterContainer />
      </div>
    );
  }
}

export default MainPage;
