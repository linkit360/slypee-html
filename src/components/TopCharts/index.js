import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from '_components/interface/Avatar';
import Icon from '_components/interface/Icon';
import AppsGrid from '_components/interface/AppsGrid';
import styles from './styles.scss';

export default class TopCharts extends React.PureComponent {
  static propTypes = {
    apps: PropTypes.object.isRequired
  };

  state = {
    categoryName: 'All categories'
  };

  render() {
    const { apps } = this.props;
    const { categoryName } = this.state;

    return (
      <div>
        <Paper className={styles.header}>
          <span>TOP CHARTS</span>
        </Paper>
        <div className={styles.content}>
          <div className={styles.categoryName}>{categoryName}</div>
          <AppsGrid
            className={styles.grid}
            cards={apps}
            startCountRows={3}
            onFetchMore={() => console.log('onFetchMore')}
          />
        </div>
      </div>
    );
  }
}
