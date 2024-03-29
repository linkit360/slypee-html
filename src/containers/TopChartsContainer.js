import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopCharts, fetchMoreTopCharts } from '_actions';
import TopCharts from '_components/TopCharts';
import PreloaderPage from '_pages/PreloaderPage';

class TopChartsContainer extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object.isRequired),
    topCharts: PropTypes.object,
    fetchTopCharts: PropTypes.func.isRequired,
    fetchMoreTopCharts: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { fetchTopCharts } = this.props;
    fetchTopCharts();
  }

  render() {
    const {
      topCharts,
      categories,
      fetchTopCharts,
      fetchMoreTopCharts
    } = this.props;

    if (!categories) {
      return <PreloaderPage />;
    }

    return (
      <TopCharts
        isFetching={!topCharts}
        apps={topCharts}
        categories={categories}
        onFetchContent={fetchTopCharts}
        onFetchMoreContent={fetchMoreTopCharts}
      />
    );
  }
}

const mapStateToProps = state => ({
  topCharts: state.topCharts,
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTopCharts,
      fetchMoreTopCharts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TopChartsContainer);
