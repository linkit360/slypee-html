import React from 'react';
import PropTypes from 'prop-types';
import Icon from '_components/interface/Icon';
import styles from './styles.scss';

export default class RatingBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    rating: PropTypes.number.isRequired
  };

  render() {
    const { className, rating } = this.props;

    const stars = [];

    for (let i = 1; i <= 5; i++) {
      let iconName;
      if (rating >= i) {
        iconName = 'star';
      } else if (rating >= i - 0.5) {
        iconName = 'star-half';
      } else {
        iconName = 'star-outline';
      }

      stars.push(<Icon key={i} className={styles.star} name={iconName} />);
    }

    return (
      <div className={className}>
        {stars}
        <span className={styles.rating}>
          {rating.toString().replace(/\./, ',')}
        </span>
      </div>
    );
  }
}
