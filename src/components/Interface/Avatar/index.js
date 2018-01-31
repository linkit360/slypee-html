import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class Avatar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { className, img } = this.props;

    return (
      <div
        className={classNames(className, styles.avatar)}
        style={{ backgroundImage: `url(${img})` }}
      >
        {!img && <Icon className={styles.icon} name="user" />}
      </div>
    );
  }
}
