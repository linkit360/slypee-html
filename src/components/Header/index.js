import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import MenuItem from './MenuItem';
import Icon from '../Interface/Icon';
import styles from './styles.scss';

class Header extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = { open: false };

  handleClick = event => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { categories } = this.props;

    return (
      <div className={styles.header}>
        <FlatButton
          className={styles.buttonMenu}
          onClick={this.handleClick}
          label="CATEGORIES"
          labelPosition="before"
          icon={
            <Icon className={styles.buttonMenuIcon} name="arrow-drop-down" />
          }
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu className={styles.menu} maxHeight={795}>
            {categories.map((item, index) => (
              <MenuItem
                key={index}
                primaryText={item.value}
                route={item.route}
              />
            ))}
          </Menu>
        </Popover>
        <FlatButton
          className={styles.buttonSignIn}
          href="/signin"
          label="Sign in"
          icon={
            <Icon
              className={styles.buttonSignInIcon}
              name="account-circle"
              width={30}
              height={30}
            />
          }
        />
        <div className={styles.searchBlock}>
          <TextField
            className={styles.search}
            hintText="Search your content here"
            underlineShow={false}
          />
        </div>
      </div>
    );
  }
}

export default Header;

// react - icons / lib / fa / caret - down;
