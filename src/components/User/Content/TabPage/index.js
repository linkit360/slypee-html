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
    sort: PropTypes.object.isRequired,
    tabName: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    countShowItems: COUNT_CARDS_IN_BLOCK,
    isFetching: false
  };

  componentWillReceiveProps(nextProps) {
    const { list } = this.props;
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({
        countShowItems: COUNT_CARDS_IN_BLOCK
      });
    }
    if (nextProps.list !== list) {
      if (nextProps.list.length !== list.length) {
        this.setState({ isFetching: false });
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
      isFetching: true
    });
  };

  render() {
    const { countShowItems, isFetching } = this.state;
    const { list, sort, isFetchedAll } = this.props;
    const isHideShowMoreButton =
      isFetching || (list.length <= countShowItems && isFetchedAll);

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
        {isFetching &&
          !isFetchedAll && (
            <CircularProgress
              color="#8d9396"
              className={styles.preloader}
              thickness={5}
            />
          )}
      </div>
    );
  }
}
