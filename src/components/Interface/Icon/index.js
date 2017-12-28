import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

/* eslint-disable max-len */
const iconsSvg = {
  'arrow-drop-down': <path d="M7 10l5 5 5-5z" />,
  'account-circle': (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  )
};

class Icon extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    className: '',
    width: 24,
    height: 24
  };

  render() {
    const { className, name, width, height } = this.props;

    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        className={classNames(styles.svg, className)}
      >
        {iconsSvg[name]}
      </svg>
    );
  }
}

export default Icon;
