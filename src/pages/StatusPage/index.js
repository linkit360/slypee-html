import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from '_components/Interface/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo } from '_actions';
import styles from './styles.scss';

class StatusPage extends React.PureComponent {
  static propTypes = {
    subscribeStatus: PropTypes.string,
    unsubscribeStatus: PropTypes.string,
    goTo: PropTypes.func.isRequired
  };

  getText = () => {
    const { subscribeStatus, unsubscribeStatus } = this.props;

    if (subscribeStatus === 'success') {
      return 'Subscribe success';
    }

    if (subscribeStatus === 'error') {
      return 'Subscribe error';
    }

    if (unsubscribeStatus === 'success') {
      return 'Unsubscribe success';
    }

    if (unsubscribeStatus === 'error') {
      return 'Unsubscribe error';
    }

    return '';
  };

  handleContinueClick = () => {
    this.props.goTo(localStorage.getItem('pathnameBeforeRedirect'));
  };

  render() {
    return (
      <div className={styles.center}>
        <Paper className={styles.papper}>
          <div className={styles.img} />
          <div className={styles.text}>{this.getText()}</div>
          <Button
            className={styles.button}
            label="CONTINUE"
            color="orange"
            size="big"
            onClick={this.handleContinueClick}
          />
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goTo
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(StatusPage);
