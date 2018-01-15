import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import Icon from '_components/interface/Icon';
import Header from './Header';
import styles from './styles.scss';

export default class Product extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  render() {
    const { app } = this.props;
    const { slider, description } = app;

    return (
      <div className={styles.content}>
        <Paper className={styles.product} zDepth={1}>
          <Header {...app} />
        </Paper>
      </div>
    );
  }
}
