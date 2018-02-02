import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  editProfile,
  changeSortUserContent,
  changeTypeUserContent,
  fetchUserContent,
  fetchMoreUserContent
} from '_actions';
import User from '_components/User';

class UserContainer extends React.Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchUserContent: PropTypes.func.isRequired,
    fetchMoreUserContent: PropTypes.func.isRequired,
    editProfile: PropTypes.func.isRequired,
    changeSortUserContent: PropTypes.func.isRequired,
    changeTypeUserContent: PropTypes.func.isRequired
  };

  componentWillMount() {
    if (this.props.user.token) {
      this.props.fetchUserContent();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { token } = nextProps.user;
    if (token !== this.props.user.token && token) {
      this.props.fetchUserContent();
    }
  }

  render() {
    const {
      user,
      content,
      editProfile,
      fetchUserContent,
      fetchMoreUserContent,
      changeSortUserContent,
      changeTypeUserContent
    } = this.props;

    if (!user) {
      return null;
    }

    return (
      <User
        user={user}
        content={content}
        onChangeSortUserContent={changeSortUserContent}
        onChangeTypeUserContent={changeTypeUserContent}
        onFetchContent={fetchUserContent}
        onFetchContentMore={fetchMoreUserContent}
        onEdit={editProfile}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  content: state.userContent
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUserContent,
      fetchMoreUserContent,
      editProfile,
      changeSortUserContent,
      changeTypeUserContent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
