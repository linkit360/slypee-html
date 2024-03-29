import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RatingBlock from '_components/Interface/RatingBlock';
import CostBlock from '_components/Interface/CostBlock';
import Dotdotdot from 'react-dotdotdot';
import styles from './styles.scss';

export default class AppCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    logo: PropTypes.string,
    name: PropTypes.string,
    producer: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    type: PropTypes.string,
    currency: PropTypes.string,
    isHorisontal: PropTypes.bool
  };

  static defaultProps = {
    isHorisontal: false,
    className: ''
  };

  state = { isFocus: false };

  handleMouseEnter = () => {
    this.setState({ isFocus: true });
  };

  handleMouseLeave = () => {
    this.setState({ isFocus: false });
  };

  render() {
    const {
      className,
      logo,
      id,
      name,
      producer,
      rating,
      price,
      type,
      currency,
      isHorisontal
    } = this.props;
    const { isFocus } = this.state;
    const href = `/apps/${id}`;

    return (
      <Paper
        className={classNames(className, styles.card, {
          [styles.isHorisontal]: isHorisontal
        })}
        zDepth={isFocus ? 3 : 1}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to={href}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${logo})`
            }}
          />
        </Link>
        <div className={styles.content}>
          <Link className={styles.link} to={href}>
            <Dotdotdot className={styles.dotdotdot} clamp={2}>
              {name}
            </Dotdotdot>
          </Link>
          <p className={styles.producer}>{producer}</p>
        </div>
        <div className={styles.footer}>
          <RatingBlock
            className={styles.rating}
            rating={rating}
            isLong={isHorisontal}
          />
          <CostBlock
            className={styles.cost}
            price={price}
            type={type}
            currency={currency}
          />
        </div>
      </Paper>
    );
  }
}
