import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch, fetchMoreSearch } from '_actions';
import Search from '_components/Search';
import PreloaderPage from '_pages/PreloaderPage';

class SearchContainer extends React.Component {
  static propTypes = {
    apps: PropTypes.arrayOf(PropTypes.object),
    search: PropTypes.string.isRequired,
    isTooShortRequest: PropTypes.bool.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    fetchMoreSearch: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { isTooShortRequest, search, fetchSearch } = this.props;

    if (!isTooShortRequest) {
      fetchSearch({ search });
    }
  }

  handleFetchMore() {
    const { search, fetchMoreSearch } = this.props;

    fetchMoreSearch({ search });
  }

  render() {
    const { apps, isTooShortRequest } = this.props;

    if (!apps) {
      return <PreloaderPage />;
    }

    return (
      <Search
        isTooShortRequest={isTooShortRequest}
        apps={apps}
        onFetchMoreContent={this.handleFetchMore}
      />
    );
  }
}

const mapStateToProps = state => ({
  apps: state.search,
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSearch,
      fetchMoreSearch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
