import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import Icon from '_components/interface/Icon';
import styles from './styles.scss';

export default class Product extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  render() {
    const { app } = this.props;
    const {
      id,
      img,
      name,
      publisher,
      category,
      cost,
      slider,
      description,
      rating
    } = app;

    return (
      <div className={styles.content}>
        <Paper className={styles.product} zDepth={1}>
          <div className={styles.header}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${img})`
              }}
            />
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.publisher}>{publisher}</div>
              <Link to={`category/${category.replace(/\s+/g, '')}`}>
                <div className={styles.category}>{category}</div>
              </Link>
              <RatingBlock
                className={styles.rating}
                rating={rating}
                size="big"
              />
              <CostBlock className={styles.cost} size="big" {...cost} />
              <div className={styles.buttons}>
                <FlatButton
                  className={styles.buttonSubscribe}
                  label="Subscribe"
                />
                <FlatButton
                  className={styles.buttonUnsubscribe}
                  label="Unsubscribe"
                />
              </div>
              <div className={styles.shareBlock}>
                <span className={styles.shareText}>SHARE</span>
                <Icon
                  className={styles.buttonFacebook}
                  name="facebook"
                  width={42}
                  height={42}
                />
                <Icon
                  className={styles.buttonTwitter}
                  name="twitter"
                  width={42}
                  height={42}
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
