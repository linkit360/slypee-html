import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles.scss';

export default class FilterCategoryBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { className, categories, filter, onChange } = this.props;

    return (
      <DropDownMenu
        className={classNames(className, styles.filter)}
        value={filter}
        onChange={onChange}
      >
        <MenuItem
          className={styles.filterItem}
          value="all"
          primaryText="All categories"
        />
        {categories.map(category => (
          <MenuItem
            className={styles.filterItem}
            value={category.id}
            primaryText={category.name}
          />
        ))}
      </DropDownMenu>
    );
  }
}
