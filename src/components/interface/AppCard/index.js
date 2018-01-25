import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import styles from './styles.scss';

export default class AppCard extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cost: PropTypes.object.isRequired,
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
      publisher,
      rating,
      cost,
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
            {name}
          </Link>
          <p className={styles.publisher}>{publisher}</p>
        </div>
        <div className={styles.footer}>
          <RatingBlock
            className={styles.rating}
            rating={rating}
            isLong={isHorisontal}
          />
          <CostBlock className={styles.cost} {...cost} />
        </div>
      </Paper>
    );
  }
}
