import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sort } from '_actions/user';
import { fetchMain } from '_actions';
import TopCharts from '_components/TopCharts';

class TopChartsContainer extends React.Component {
  static propTypes = {
    topCharts: PropTypes.object.isRequired,
    fetchMain: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { topCharts, fetchMain } = this.props;

    if (!topCharts) {
      fetchMain();
    }
  }

  render() {
    const { topCharts } = this.props;

    if (!topCharts) {
      return null;
    }

    return <TopCharts apps={topCharts.list} />;
  }
}

const mapStateToProps = state => ({
  topCharts: state.topCharts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMain,
      sort
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TopChartsContainer);
