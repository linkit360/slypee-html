import React from 'react';
import PropTypes from 'prop-types';
import Button from '_components/Interface/Button';
import CircularProgress from 'material-ui/CircularProgress';
import TabHeader from './TabHeader';
import App from './App';
import styles from './styles.scss';

const COUNT_CARDS_IN_BLOCK = 6;

export default class TabPage extends React.PureComponent {
  static propTypes = {
    isFetchedAll: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    sort: PropTypes.object.isRequired,
    tabName: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: COUNT_CARDS_IN_BLOCK,
    isFetchingMore: false
  };

  componentWillReceiveProps(nextProps) {
    const { list } = this.props;
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({
        countShowItems: COUNT_CARDS_IN_BLOCK
      });
    }
    if (nextProps.list && nextProps.list !== list) {
      if (!list || nextProps.list.length !== list.length) {
        this.setState({ isFetchingMore: false });
      }
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
      countShowItems: countShowItems + COUNT_CARDS_IN_BLOCK,
      isFetchingMore: true
    });
  };

  getContent() {
    const { list, isFetching, isFetchedAll, tabName } = this.props;
    const { countShowItems, isFetchingMore } = this.state;

    if (isFetching) {
      return (
        <CircularProgress
          color="#8d9396"
          className={styles.preloader}
          thickness={5}
        />
      );
    }

    if (list.length === 0) {
      return (
        <div className={styles.notFoundMessage}>
          {`You don't have ${
            tabName === 'single' ? 'purchased apps' : 'subscriptions'
          }`}
        </div>
      );
    }

    const isHideShowMoreButton =
      isFetchingMore || (list.length <= countShowItems && isFetchedAll);

    return (
      <div>
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
        {isFetchingMore && (
          <CircularProgress
            color="#8d9396"
            className={styles.preloader}
            thickness={5}
          />
        )}
      </div>
    );
  }

  render() {
    const { sort } = this.props;

    return (
      <div>
        <TabHeader {...sort} onSort={this.handleSort} />
        {this.getContent()}
      </div>
    );
  }
}
