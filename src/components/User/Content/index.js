import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TabPage from './TabPage';
import styles from './styles.scss';

export default class Content extends React.PureComponent {
  static propTypes = {
    purchased: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    subscription: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onSort: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    activeTab: 'purchased',
    sortBy: 'name',
    isSortReverse: false
  };

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

  handleTabChange = label => {
    this.setState({ activeTab: label });
  };

  render() {
    const { activeTab } = this.state;
    const { purchased, subscription, onSort, onFetchMore } = this.props;
    const section = activeTab === 'purchased' ? purchased : subscription;

    return (
      <Paper className={styles.content} zDepth={1}>
        <Tabs
          className={styles.tabs}
          value={activeTab}
          onChange={this.handleTabChange}
        >
          <Tab className={styles.tab} value="purchased" label="purchased" />
          <Tab
            className={styles.tab}
            value="subscription"
            label="subscription"
          />
        </Tabs>
        <TabPage
          section={section}
          onSort={onSort}
          onFetchMore={onFetchMore}
          tabName={activeTab}
        />
      </Paper>
    );
  }
}
