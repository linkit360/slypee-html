import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import Icon from '_components/Interface/Icon';
import IconSort from '_components/Interface/IconSort';
import styles from './styles.scss';

export default class TabHeader extends React.PureComponent {
  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    isSortReverse: PropTypes.bool.isRequired,
    // tabName: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired
    // onSearch: PropTypes.func.isRequired
  };

  state = {
    // search: '',
    isSearchOpen: false
  };

  handleNameClick = () => {
    this.sort('name');
  };

  handleDateClick = () => {
    this.sort('date');
  };

  /* handleSearchChange = (event, value) => {
    this.setState({ search: value });
  }; */

  /* handleSearchClick = () => {
    const { tabName, onSearch } = this.props;
    const { isSearchOpen, search } = this.state;

    if (isSearchOpen) {
      onSearch(search, tabName);
    } else {
      this.toogleSearch(true);
    }
  }; */

  /* handleSearchFieldBlur = () => {
    this.toogleSearch(false);
  }; */

  handleBackButtonClick = () => {
    this.toogleSearch(false);
  };

  /* toogleSearch(isSearchOpen) {
    this.setState({ isSearchOpen });
  } */

  sort(colName) {
    const { sortBy, isSortReverse, onSort } = this.props;
    const data = { sortBy: colName };
    if (sortBy === colName) {
      data.isSortReverse = !isSortReverse;
    } else if (colName === 'Name') {
      data.isSortReverse = false;
    } else {
      data.isSortReverse = true;
    }
    onSort(data);
  }

  getSortIcon = name => {
    const { sortBy, isSortReverse } = this.props;

    if (name !== sortBy) {
      return <IconSort className={styles.iconSortBoth} />;
    }
    if (isSortReverse) {
      return <Icon className={styles.iconDrop} name="arrow-drop-down" />;
    }
    return <Icon className={styles.iconDrop} name="arrow-drop-up" />;
  };

  render() {
    const { isSearchOpen /* , search */ } = this.state;

    return (
      <div
        className={classNames(styles.tabHeader, {
          [styles.isSearchOpen]: isSearchOpen
        })}
      >
        <div className={styles.orderBlock}>
          <div>Order by:</div>
          <FlatButton
            className={styles.buttonNameSort}
            label="Name"
            labelPosition="before"
            style={styles.buttonEditProfile}
            icon={this.getSortIcon('name')}
            onClick={this.handleNameClick}
          />
          <FlatButton
            className={styles.buttonDateSort}
            label="Date"
            labelPosition="before"
            style={styles.buttonEditProfile}
            icon={this.getSortIcon('date')}
            onClick={this.handleDateClick}
          />
        </div>
        {/* <div className={styles.searchBlock}>
          {isSearchOpen && (
            <div>
              <Icon
                className={styles.buttonBack}
                name="arrow-back"
                onClick={this.handleBackButtonClick}
              />
              <TextField
                className={styles.search}
                hintText="Search your content here"
                value={search}
                onChange={this.handleSearchChange}
                onBlur={this.handleSearchFieldBlur}
              />
            </div>
          )}
          <Icon
            className={styles.iconSearch}
            name="search"
            onClick={this.handleSearchClick}
          />
        </div> */}
      </div>
    );
  }
}
