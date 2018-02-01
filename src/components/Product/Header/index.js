import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import RatingBlock from '_components/Interface/RatingBlock';
import CostBlock from '_components/Interface/CostBlock';
import Icon from '_components/Interface/Icon';
import { getCategoryUrl } from '_utils/common';
import styles from './styles.scss';

export default class Header extends React.PureComponent {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  };

  getButtonsLabels = () => {
    const { price, type } = this.props;

    if (price === 0) {
      return ['Download', null];
    }

    if (type === 'single') {
      return ['Buy', null];
    }

    return ['Subscribe', 'Unsubscribe'];
  };

  render() {
    const {
      logo,
      name,
      producer,
      category,
      price,
      type,
      currency,
      rating
    } = this.props;

    const url = typeof window === 'object' && window.location.href;
    const buttonLabels = this.getButtonsLabels();

    return (
      <div>
        <div className={styles.mobile}>
          <div className={styles.name}>{name}</div>
          <div className={styles.producer}>{producer}</div>
        </div>
        <div className={styles.header}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${logo})`
            }}
          />
          <div className={styles.info}>
            <div className={styles.desktop}>
              <div className={styles.name}>{name}</div>
              <div className={styles.producer}>{producer}</div>
            </div>
            <Link to={getCategoryUrl(category)}>
              <div className={styles.category}>{category}</div>
            </Link>
            <RatingBlock className={styles.rating} rating={rating} size="big" />
            <CostBlock
              className={styles.cost}
              size="big"
              price={price}
              type={type}
              currency={currency}
            />
            <div className={styles.buttons}>
              <FlatButton
                className={styles.buttonSubscribe}
                label={buttonLabels[0]}
              />
              {buttonLabels[1] && (
                <FlatButton
                  className={styles.buttonUnsubscribe}
                  label={buttonLabels[1]}
                />
              )}
            </div>
            <div className={styles.shareBlock}>
              <span className={styles.shareText}>SHARE</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                <Icon
                  className={styles.buttonFacebook}
                  name="facebook"
                  width={42}
                  height={42}
                />
              </a>
              <a href={`http://twitter.com/share?url=${url}`}>
                <Icon
                  className={styles.buttonTwitter}
                  name="twitter"
                  width={42}
                  height={42}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
