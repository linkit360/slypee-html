import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'material-ui/SvgIcon';

/* eslint-disable max-len */
const iconsSvg = {
  'arrow-drop-down': <path d="M7 10l5 5 5-5z" />
};

class Icon extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const { className, name } = this.props;

    return <SvgIcon className={className}>{iconsSvg[name]}</SvgIcon>;
  }
}

export default Icon;
