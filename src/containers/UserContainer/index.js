import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sort } from '_actions/user';
import User from '_components/User';

class UserContainer extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fetchMain: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { user, fetchMain } = this.props;

    if (!user) {
      fetchMain();
    }
  }

  render() {
    const { user, sort } = this.props;

    if (!user) {
      return null;
    }

    return <User user={user} onSort={sort} />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sort
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
