import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import TabPage from './TabPage';
import styles from './styles.scss';

export default class Content extends React.PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeType: PropTypes.func.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  handleTabChange = value => {
    this.props.onChangeType({ contentType: value });
  };

  render() {
    const { content, onChangeSort, onFetchMore, onChangeType } = this.props;

    return (
      <Paper className={styles.content} zDepth={1}>
        <Tabs
          className={styles.tabs}
          value={content.ontentType}
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
          {...content}
          onChangeType={onChangeType}
          onChangeSort={onChangeSort}
          onFetchMore={onFetchMore}
        />
      </Paper>
    );
  }
}
