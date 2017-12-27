import React from 'react';
import PropTypes from 'prop-types';
import MenuItemMIU from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

class MenuItem extends React.Component {
  static propTypes = {
    primaryText: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  };

  handleClick = event => {
    const { route } = this.props;
    event.preventDefault();

    console.log(route);
  };

  render() {
    const { primaryText, route } = this.props;
    return (
      <Link to={`/category/${route}`}>
        <MenuItemMIU className={styles.Link} primaryText={primaryText} />
      </Link>
    );
  }
}

export default MenuItem;
