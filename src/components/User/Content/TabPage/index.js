import React from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Interface/Button';
import TabHeader from './TabHeader';
import App from './App';
import styles from './styles.scss';

const COUNT_CARDS_IN_BLOCK = 6;

export default class TabPage extends React.PureComponent {
  static propTypes = {
    isFetchedAll: PropTypes.bool.isRequired,
    sort: PropTypes.object.isRequired,
    tabName: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: COUNT_CARDS_IN_BLOCK
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({
        countShowItems: COUNT_CARDS_IN_BLOCK
      });
    }
  }

  handleSort = sort => {
    this.props.onChangeSort({ sort });
  };

  handleShowMoreClick = () => {
    const { onFetchMore } = this.props;
    const { countShowItems } = this.state;
    onFetchMore();
    this.setState({
      countShowItems: countShowItems + COUNT_CARDS_IN_BLOCK
    });
  };

  render() {
    const { countShowItems } = this.state;
    const { list, sort, isFetchedAll } = this.props;
    const isHideShowMoreButton = list.length <= countShowItems && isFetchedAll;

    return (
      <div>
        <TabHeader {...sort} onSort={this.handleSort} />
        {list &&
          list
            .slice(0, countShowItems)
            .map((app, index) => <App key={index} {...app} />)}
        {!isHideShowMoreButton && (
          <Button
            className={styles.buttonShowMore}
            label="SHOW MORE"
            onClick={this.handleShowMoreClick}
          />
        )}
      </div>
    );
  }
}
