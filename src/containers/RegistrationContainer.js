import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin, signup, forgotPassword } from '_actions';
import FormWrapper from '_components/interface/FormWrapper';
import SignInForm from '_components/SignInForm';

class RegistrationContainer extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    forgotPassword: PropTypes.func.isRequired
  };

  getForm() {
    const { section, signin, signup, forgotPassword } = this.props;

    switch (section) {
      case 'signin':
        return <SignInForm signin={signin} />;
      /* case 'signup':
        return <SignUpForm />;
      case 'forgotPassword':
        return <ForgotPasswordForm />; */
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
      signin,
      signup,
      forgotPassword
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer
);
