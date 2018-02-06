import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, signUp, recoveryPassword } from '_actions';
import FormWrapper from '_components/Interface/FormWrapper';
import SignInForm from '_components/SignInForm';
import SignUpForm from '_components/SignUpForm';
import PasswordForgottenForm from '_components/PasswordForgottenForm';

class RegistrationContainer extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    registrationStatus: PropTypes.string.isRequired,
    signInStatus: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    recoveryPassword: PropTypes.func.isRequired
  };

  getForm() {
    const {
      registrationStatus,
      signInStatus,
      section,
      signIn,
      signUp,
      recoveryPassword
    } = this.props;

    switch (section) {
      case 'signIn':
        return <SignInForm signIn={signIn} signInStatus={signInStatus} />;
      case 'signUp':
        return (
          <SignUpForm signUp={signUp} registrationStatus={registrationStatus} />
        );
      case 'forgotPassword':
        return <PasswordForgottenForm recoveryPassword={recoveryPassword} />;
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
      recoveryPassword
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer
);
