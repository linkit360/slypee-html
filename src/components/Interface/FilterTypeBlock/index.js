import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles.scss';

export default class FilterTypeBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { className, filter, onChange } = this.props;

    return (
      <div className={classNames(className, styles.filterBlock)}>
        <span className={styles.filterText}>Content type:</span>
        <DropDownMenu
          className={styles.filter}
          value={filter}
          onChange={onChange}
        >
          <MenuItem
            className={styles.filterItem}
            value="all"
            primaryText="All"
          />
          <MenuItem
            className={styles.filterItem}
            value="free"
            primaryText="Free"
          />
          <MenuItem
            className={styles.filterItem}
            value="subscription"
            primaryText="Subscription"
          />
          <MenuItem
            className={styles.filterItem}
            value="single"
            primaryText="One-time purchasing"
          />
        </DropDownMenu>
      </div>
    );
  }
}
