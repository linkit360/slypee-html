import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TabPage from './TabPage';
import styles from './styles.scss';

export default class Content extends React.PureComponent {
  static propTypes = {
    contentType: PropTypes.string.isRequired,
    sort: PropTypes.object.isRequired,
    list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    isFetchedAll: PropTypes.bool.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeType: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  handleTabChange = value => {
    this.props.onChangeType({ contentType: value });
  };

  render() {
    const {
      isFetchedAll,
      list,
      contentType,
      sort,
      onChangeSort,
      onFetchMore,
      onChangeType
    } = this.props;

    return (
      <Paper className={styles.content} zDepth={1}>
        <Tabs
          className={styles.tabs}
          value={contentType}
          onChange={this.handleTabChange}
        >
          <Tab className={styles.tab} value="single" label="purchased" />
          <Tab
            className={styles.tab}
            value="subscription"
            label="subscription"
          />
        </Tabs>
        <TabPage
          list={list}
          isFetchedAll={isFetchedAll}
          sort={sort}
          tabName={contentType}
          onChangeType={onChangeType}
          onChangeSort={onChangeSort}
          onFetchMore={onFetchMore}
        />
      </Paper>
    );
  }
}
