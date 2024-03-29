import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import ScrollHidden from '_components/Interface/ScrollHidden';
import Icon from '_components/Interface/Icon';
import AvatarBlock from './AvatarBlock';
import MobileSearchBlock from './MobileSearchBlock';
import Menu from './Menu';
import logo from '../../images/logo.svg';
import styles from './styles.scss';

export default class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    searchQuery: PropTypes.string,
    mainMenu: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    lastTimeGoToSearch: PropTypes.instanceOf(Date).isRequired,
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    activeTab: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
  };

  static defaultProps = {
    activeTab: ''
  };

  state = { isMenuOpen: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.lastTimeGoToSearch !== this.props.lastTimeGoToSearch) {
      window.scrollTo(0, 0);
      this.searchInput.focus();
    }
  }

  handleButtonMenuClick = event => {
    event.preventDefault();

    this.setState({
      isMenuOpen: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  handleSearchChange = (event, value) => {
    this.search = value;
  };

  handleSearchClick = () => {
    if (this.search) {
      this.props.onSearch(this.search);
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.search);
    }
  };

  handleTabChange = value => {
    this.props.onTabChange(value);
  };

  searchRef = ref => (this.searchInput = ref);

  render() {
    const {
      user,
      searchQuery,
      mainMenu,
      categories,
      activeTab,
      lastTimeGoToMobileSearch,
      onLogout
    } = this.props;
    const { isMenuOpen } = this.state;

    const isLogin = user.token;

    return (
      <div>
        <div className={styles.headerTop}>
          <div className={styles.logoWrapper}>
            <Link to="/">
              <img className={styles.logo} alt="logo" src={logo} />
            </Link>
          </div>
          <FlatButton
            className={styles.buttonMenu}
            onClick={this.handleButtonMenuClick}
            label="CATEGORIES"
            labelPosition="before"
            icon={
              <Icon className={styles.buttonMenuIcon} name="arrow-drop-down" />
            }
          />
          <Icon
            className={styles.buttonMenuMobile}
            name="menu"
            onClick={this.handleButtonMenuClick}
          />
          <Popover
            className={styles.menuPopover}
            open={isMenuOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu
              categories={categories}
              isAutorizedUser
              user={user}
              onClose={this.handleRequestClose}
              onLogout={onLogout}
            />
          </Popover>
          {!isLogin && (
            <Link to="/signIn">
              <FlatButton
                className={styles.buttonSignIn}
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
            </Link>
          )}
          {isLogin && (
            <AvatarBlock
              className={styles.avatarBlock}
              user={user}
              onLogout={onLogout}
            />
          )}
          <MobileSearchBlock
            lastTimeGoToMobileSearch={lastTimeGoToMobileSearch}
            searchQuery={searchQuery}
            onSearchChange={this.handleSearchChange}
            onSearch={this.handleSearchClick}
          />
          <div className={styles.searchBlock}>
            <TextField
              ref={this.searchRef}
              className={styles.search}
              defaultValue={searchQuery}
              hintText="Search your content here"
              underlineShow={false}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleKeyDown}
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
        <ScrollHidden className={styles.overflowScrolling}>
          <Tabs
            className={classNames(
              styles.tabs,
              styles[`countTabs${2 + mainMenu.length}`]
            )}
            value={activeTab}
            onChange={this.handleTabChange}
          >
            <Tab value="home" label="home" />
            <Tab value="topcharts" label="top charts" />
            {mainMenu.map((category, index) => (
              <Tab key={index} value={category.slug} label={category.name} />
            ))}
          </Tabs>
        </ScrollHidden>
      </div>
    );
  }
}
