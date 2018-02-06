import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  signIn,
  signUp,
  recoveryPasswordByEmail,
  recoveryPasswordByToken
} from '_actions';
import FormWrapper from '_components/Interface/FormWrapper';
import SignInForm from '_components/SignInForm';
import SignUpForm from '_components/SignUpForm';
import PasswordForgottenForm from '_components/PasswordForgottenForm';
import RecoveryPasswordForm from '_components/RecoveryPasswordForm';

class UserFormContainer extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    recoveryPasswordToken: PropTypes.string.isRequired,
    registrationStatus: PropTypes.string.isRequired,
    signInStatus: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    recoveryPasswordByEmail: PropTypes.func.isRequired,
    recoveryPasswordByToken: PropTypes.func.isRequired
  };

  getForm() {
    const {
      recoveryPasswordToken,
      registrationStatus,
      signInStatus,
      section,
      signIn,
      signUp,
      recoveryPasswordByEmail,
      recoveryPasswordByToken
    } = this.props;

    switch (section) {
      case 'signIn':
        return <SignInForm signIn={signIn} signInStatus={signInStatus} />;
      case 'signUp':
        return (
          <SignUpForm signUp={signUp} registrationStatus={registrationStatus} />
        );
      case 'forgotPassword':
        return (
          <PasswordForgottenForm
            recoveryPasswordByEmail={recoveryPasswordByEmail}
          />
        );
      case 'recovery-password':
        return (
          <RecoveryPasswordForm
            token={recoveryPasswordToken}
            recoveryPasswordByToken={recoveryPasswordByToken}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return <FormWrapper>{this.getForm()}</FormWrapper>;
  }
}

const mapStateToProps = state => ({
  registrationStatus: state.user.registrationStatus,
  signInStatus: state.user.signInStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn,
      signUp,
      recoveryPasswordByEmail,
      recoveryPasswordByToken
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
