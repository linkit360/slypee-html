import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppsGrid from '_components/Interface/AppsGrid';
import styles from './styles.scss';

export default class Search extends React.PureComponent {
  static propTypes = {
    apps: PropTypes.arrayOf(PropTypes.object),
    isTooShortRequest: PropTypes.bool.isRequired,
    onFetchMoreContent: PropTypes.func.isRequired
  };

  getResult() {
    const { isTooShortRequest, apps, onFetchMoreContent } = this.props;

    if (isTooShortRequest) {
      return <span className={styles.message}>Request is too short</span>;
    }
    if (!apps) {
      return null;
    }
    if (!apps.length) {
      return <span className={styles.message}>Sorry, nothing found</span>;
    }
    return (
      <AppsGrid
        className={styles.grid}
        cards={apps}
        startCountRows={3}
        isFetchedAll
        onFetchMore={onFetchMoreContent}
      />
    );
  }

  render() {
    return (
      <div>
        <Paper className={styles.header}>
          <span>SEARCH RESULT</span>
        </Paper>
        <div className={styles.content}>{this.getResult()}</div>
      </div>
    );
  }
}
