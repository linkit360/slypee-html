import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const types = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month'
};

export default class CostBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  };

  render() {
    const { className, type, currency, price } = this.props;

    const priceStr = price
      ? price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1, ')
      : 'FREE';

    return (
      <div className={className}>
        <span className={styles.price}>{priceStr}</span>
        {price !== 0 && <span className={styles.currency}>{currency}</span>}
        {type !== 'single' && (
          <span className={styles.type}>/ {types[type]}</span>
        )}
      </div>
    );
  }
}
