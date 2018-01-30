import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class IconSort extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(className, styles.icon)}>
        <Icon className={styles.up} name="arrow-drop-up" />
        <Icon className={styles.down} name="arrow-drop-down" />
      </div>
    );
  }
}
