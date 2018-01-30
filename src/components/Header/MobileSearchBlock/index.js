import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class MobileSearchBlock extends React.Component {
  static propTypes = {
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    searchQuery: PropTypes.string,
    onSearchChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    isSearchMode: false
  };

  componentWillMount() {
    const { searchQuery } = this.props;
    if (searchQuery) {
      this.toogleSearchMode(true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.lastTimeGoToMobileSearch !== this.props.lastTimeGoToMobileSearch
    ) {
      window.scrollTo(0, 0);
      this.toogleSearchMode(true);
    }
  }

  handleSearchClick = () => {
    const { onSearch } = this.props;
    const { isSearchMode } = this.state;

    if (isSearchMode) {
      onSearch();
    } else {
      this.toogleSearchMode(true);
    }
  };

  handleBackButtonClick = () => {
    this.toogleSearchMode(false);
  };

  toogleSearchMode(isSearchMode) {
    this.setState({ isSearchMode });
  }

  searchRef = ref => (this.searchInput = ref);

  render() {
    const { isSearchMode } = this.state;
    const { searchQuery, onSearchChange } = this.props;
    return (
      <div
        className={classNames(styles.mobileSearchBlock, {
          [styles.isSearchMode]: isSearchMode
        })}
      >
        {isSearchMode && (
          <div>
            <Icon
              className={styles.buttonBack}
              name="arrow-back"
              onClick={this.handleBackButtonClick}
            />
            <TextField
              ref={this.searchRef}
              className={styles.search}
              defaultValue={searchQuery}
              hintText="Search your content here"
              underlineShow={false}
              onChange={onSearchChange}
            />
          </div>
        )}
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
    );
  }
}
