import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import Icon from '_components/interface/Icon';
import MenuItem from './MenuItem';
import styles from './styles.scss';

class Header extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeTab: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired
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

  handleSearchChange = (event, value) => {
    this.search = value;
  };

  handleSearchClick = () => {
    this.props.onSearch(this.search);
  };

  handleTabChange = value => {
    this.props.onTabChange(value);
  };

  render() {
    const { categories, activeTab } = this.props;

    console.log(styles.tabs);

    return (
      <div>
        <div className={styles.headerTop}>
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
            <Menu className={styles.menu}>
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
              onChange={this.handleSearchChange}
            />
            <FlatButton
              className={styles.buttonSearch}
              icon={
                <Icon
                  className={styles.buttonSearchIcon}
                  name="search"
                  width={30}
                  height={30}
                />
              }
              onClick={this.handleSearchClick}
            />
          </div>
        </div>
        <Tabs
          className={styles.tabs}
          value={activeTab}
          onChange={this.handleTabChange}
        >
          <Tab value="" label="home" />
          <Tab value="topcharts" label="top charts" />
          <Tab value="games" label="games" />
          <Tab value="educations" label="educations" />
          <Tab value="business" label="business" />
          <Tab value="lifestyle" label="lifestyle" />
          <Tab value="sociallife" label="social life" />
          <Tab value="videos" label="videos" />
        </Tabs>
      </div>
    );
  }
}

export default Header;
