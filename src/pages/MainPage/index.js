import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotFoundPage from '_pages/NotFound';
import HeaderContainer from '_containers/HeaderContainer';
import { bindActionCreators } from 'redux';
import { fetchCategories, changeTab } from '_actions/categories';

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

class MainPage extends React.Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    match: PropTypes.any.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { categories } = this.props;

    if (!categories.categories) {
      this.props.fetchCategories();
    }
  }

  handleTabChange = value => {
    this.props.changeTab(value);
  };

  render() {
    const { match: { params: { tab } } } = this.props;
    const activeTab = tab || '';

    if (!tabs.includes(activeTab)) {
      return <NotFoundPage />;
    }

    return <HeaderContainer activeTab={activeTab} />;
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategories,
      changeTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
