import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItemMIU from 'material-ui/MenuItem';
import styles from './styles.scss';

const MenuItem = ({ primaryText, route }) => (
  <Link to={`/category/${route}`}>
    <MenuItemMIU className={styles.Link} primaryText={primaryText} />
  </Link>
);

MenuItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default MenuItem;
