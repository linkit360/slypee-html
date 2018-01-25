import React from 'react';
import PropTypes from 'prop-types';
import Button from '_components/interface/Button';
import TabHeader from './TabHeader';
import App from './App';
import styles from './styles.scss';

const COUNT_CARDS_IN_BLOCK = 6;

export default class TabPage extends React.PureComponent {
  static propTypes = {
    section: PropTypes.object.isRequired,
    tabName: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: COUNT_CARDS_IN_BLOCK,
    sortBy: 'name',
    isSortReverse: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({
        countShowItems: COUNT_CARDS_IN_BLOCK
      });
    }
  }

  getSortIconName = name => {
    const { sortBy, isSortReverse } = this.state;

    if (name !== sortBy) {
      return 'sort-both';
    }
    if (isSortReverse) {
      return 'arrow-drop-up';
    }
    return 'arrow-drop-down';
  };

  handleShowMoreClick = () => {
    const { section, tabName, onFetchMore } = this.props;
    const { list } = section;
    const { countShowItems } = this.state;
    if (countShowItems + COUNT_CARDS_IN_BLOCK < list.length) {
      onFetchMore(list.length, COUNT_CARDS_IN_BLOCK, tabName);
    }
    this.setState({
      countShowItems: countShowItems + COUNT_CARDS_IN_BLOCK
    });
  };

  render() {
    const { countShowItems } = this.state;
    const { section, tabName, onSort } = this.props;
    const { list, sort } = section;

    return (
      <div>
        <TabHeader onSort={onSort} tabName={tabName} {...sort} />
        {list
          .slice(0, countShowItems)
          .map((app, index) => <App key={index} {...app} />)}
        <Button
          className={styles.buttonShowMore}
          label="SHOW MORE"
          onClick={this.handleShowMoreClick}
        />
      </div>
    );
  }
}
