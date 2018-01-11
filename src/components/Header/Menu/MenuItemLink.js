import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles.scss';

const MenuItemLink = ({ primaryText, route }) => (
  <Link to={`/category/${route}`}>
    <MenuItem className={styles.buttonLink} primaryText={primaryText} />
  </Link>
);

MenuItemLink.propTypes = {
  primaryText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default MenuItemLink;
