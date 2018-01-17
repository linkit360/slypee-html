import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import OverflowScrolling from 'react-overflow-scrolling';
import Icon from '_components/interface/Icon';
import MobileSearchBlock from './MobileSearchBlock';
import Menu from './Menu';
import styles from './styles.scss';

const user = {
  avatar:
    'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
  name: 'Jack Jackson',
  mail: 'jack_jacson@gmal.com'
};

export default class Header extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    lastTimeGoToSearch: PropTypes.instanceOf(Date).isRequired,
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    activeTab: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onTabChange: PropTypes.func.isRequired
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
    this.props.onSearch(this.search);
  };

  handleTabChange = value => {
    this.props.onTabChange(value);
  };

  searchRef = ref => (this.searchInput = ref);

  render() {
    const { categories, activeTab, lastTimeGoToMobileSearch } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div>
        <div className={styles.headerTop}>
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
              onLogout={() => console.log('onLogout')}
            />
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
          <MobileSearchBlock
            lastTimeGoToMobileSearch={lastTimeGoToMobileSearch}
            onSearchChange={this.handleSearchChange}
            onSearch={this.handleSearchClick}
          />
          <div className={styles.searchBlock}>
            <TextField
              ref={this.searchRef}
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
        <div className={styles.overflowScrollingWrapper}>
          <OverflowScrolling className={styles.overflowScrolling}>
            <Tabs
              className={styles.tabs}
              value={activeTab}
              onChange={this.handleTabChange}
            >
              <Tab value="home" label="home" />
              <Tab value="topcharts" label="top charts" />
              <Tab value="games" label="games" />
              <Tab value="educations" label="educations" />
              <Tab value="business" label="business" />
              <Tab value="lifestyle" label="lifestyle" />
              <Tab value="sociallife" label="social life" />
              <Tab value="videos" label="videos" />
            </Tabs>
          </OverflowScrolling>
        </div>
      </div>
    );
  }
}
