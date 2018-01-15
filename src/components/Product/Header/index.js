import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import Icon from '_components/interface/Icon';
import styles from './styles.scss';

export default class Header extends React.PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cost: PropTypes.object.isRequired,
    rating: PropTypes.string.isRequired
  };

  render() {
    const { img, name, publisher, category, cost, rating } = this.props;

    const url = typeof window === 'object' && window.location.href;

    return (
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
          <RatingBlock className={styles.rating} rating={rating} size="big" />
          <CostBlock className={styles.cost} size="big" {...cost} />
          <div className={styles.buttons}>
            <FlatButton className={styles.buttonSubscribe} label="Subscribe" />
            <FlatButton
              className={styles.buttonUnsubscribe}
              label="Unsubscribe"
            />
          </div>
          <div className={styles.shareBlock}>
            <span className={styles.shareText}>SHARE</span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
              <Icon
                className={styles.buttonFacebook}
                name="facebook"
                width={42}
                height={42}
                onClick={this.handleFacebookButtonClick}
              />
            </a>
            <a href={`http://twitter.com/share?url=${url}`}>
              <Icon
                className={styles.buttonTwitter}
                name="twitter"
                width={42}
                height={42}
                onClick={this.handleTwitterButtonClick}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
