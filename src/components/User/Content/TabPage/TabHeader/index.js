import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Icon from '_components/interface/Icon';
import IconSort from '_components/interface/IconSort';
import styles from './styles.scss';

export default class TabHeader extends React.PureComponent {
  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    isSortReverse: PropTypes.bool.isRequired,
    tabName: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired
  };

  handleNameClick = () => {
    this.sort('Name');
  };

  handleDateClick = () => {
    this.sort('Date');
  };

  sort(colName) {
    const { tabName, sortBy, isSortReverse, onSort } = this.props;
    const data = { sortBy: colName };
    if (sortBy === colName) {
      data.isSortReverse = !isSortReverse;
    } else if (colName === 'Name') {
      data.isSortReverse = false;
    } else {
      data.isSortReverse = true;
    }
    onSort(tabName, data);
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
    return (
      <div className={styles.tabHeader}>
        <div className={styles.orderBlock}>
          <div>Order by:</div>
          <FlatButton
            className={styles.buttonNameSort}
            label="Name"
            labelPosition="before"
            style={styles.buttonEditProfile}
            icon={this.getSortIcon('Name')}
            onClick={this.handleNameClick}
          />
          <FlatButton
            className={styles.buttonDateSort}
            label="Date"
            labelPosition="before"
            style={styles.buttonEditProfile}
            icon={this.getSortIcon('Date')}
            onClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }
}
