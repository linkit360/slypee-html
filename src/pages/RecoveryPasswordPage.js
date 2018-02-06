import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recoveryPasswordByToken } from '_actions';
import FormWrapper from '_components/Interface/FormWrapper';
import RecoveryPasswordForm from '_components/RecoveryPasswordForm';

class RecoveryPasswordPage extends React.Component {
  static propTypes = {
    match: PropTypes.any.isRequired,
    recoveryPasswordByToken: PropTypes.func.isRequired
  };

  render() {
    const { match: { params: { token } } } = this.props;
    const { recoveryPasswordByToken } = this.props;
    return (
      <FormWrapper>
        <RecoveryPasswordForm
          token={token}
          recoveryPasswordByToken={recoveryPasswordByToken}
        />
      </FormWrapper>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      recoveryPasswordByToken
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  RecoveryPasswordPage
);
