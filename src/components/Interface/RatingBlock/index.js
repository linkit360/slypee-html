import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class RatingBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    rating: PropTypes.number,
    size: PropTypes.oneOf(['big', 'normal']),
    isLong: PropTypes.bool
  };

  static defaultProps = {
    size: 'normal',
    isLong: false
  };

  render() {
    const { className, rating, size, isLong } = this.props;

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
      <div
        className={classNames(className, {
          [styles.big]: size === 'big',
          [styles.isLong]: isLong
        })}
      >
        {stars}
        <span className={styles.rating}>
          {rating &&
            rating
              .toFixed(1)
              .toString()
              .replace(/\./, ',')}
        </span>
      </div>
    );
  }
}
