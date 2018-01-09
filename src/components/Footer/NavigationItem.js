import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigationItem } from 'material-ui/BottomNavigation';
import Icon from '_components/interface/Icon';

export default class NavigationItem extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { value, onClick } = this.props;

    onClick(value);
  };

  render() {
    const { label, iconName } = this.props;

    return (
      <BottomNavigationItem
        label={label}
        icon={<Icon name={iconName} />}
        onClick={this.handleClick}
      />
    );
  }
}
