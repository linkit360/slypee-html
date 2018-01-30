import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, signUp, forgotPassword } from '_actions';
import FormWrapper from '_components/interface/FormWrapper';
import SignInForm from '_components/SignInForm';
import SignUpForm from '_components/SignUpForm';
import PasswordForgottenForm from '_components/PasswordForgottenForm';

class RegistrationContainer extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    forgotPassword: PropTypes.func.isRequired
  };

  getForm() {
    const { section, signIn, signUp, forgotPassword } = this.props;

    switch (section) {
      case 'signIn':
        return <SignInForm signIn={signIn} />;
      case 'signUp':
        return <SignUpForm signUp={signUp} />;
      case 'forgotPassword':
        return <PasswordForgottenForm forgotPassword={forgotPassword} />;
      default:
        return null;
    }
  }

  render() {
    return <FormWrapper>{this.getForm()}</FormWrapper>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn,
      signUp,
      forgotPassword
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer
);
