import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class StatusPage extends React.PureComponent {
  static propTypes = {
    subscribeStatus: PropTypes.string,
    unsubscribeStatus: PropTypes.string
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

  render() {
    return <p className={styles.text}>{this.getText()}</p>;
  }
}
