import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class Avatar extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { className, img, onClick } = this.props;

    return (
      <div
        className={classNames(className, styles.avatar)}
        style={{ backgroundImage: `url(${img})` }}
        onClick={onClick}
      >
        {!img && <Icon className={styles.icon} name="user" />}
      </div>
    );
  }
}
