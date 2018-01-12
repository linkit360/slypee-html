import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Icon from '_components/interface/Icon';
import styles from './styles.scss';

export default class MobileSearchBlock extends React.Component {
  static propTypes = {
    lastTimeGoToMobileSearch: PropTypes.instanceOf(Date).isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    isSearchMode: false
  };

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

  toogleSearchMode(isSearchMode) {
    this.setState({ isSearchMode });
  }

  searchRef = ref => (this.searchInput = ref);

  render() {
    const { isSearchMode } = this.state;
    const { onSearchChange } = this.props;
    return (
      <div
        className={classNames(styles.mobileSearchBlock, {
          [styles.isSearchMode]: isSearchMode
        })}
      >
        {isSearchMode && (
          <TextField
            ref={this.searchRef}
            className={styles.search}
            hintText="Search your content here"
            underlineShow={false}
            onChange={onSearchChange}
          />
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
