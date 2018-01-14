import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import styles from './styles.scss';

export default class AppCard extends React.PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cost: PropTypes.object.isRequired
  };

  state = { isFocus: false };

  handleMouseEnter = () => {
    this.setState({ isFocus: true });
  };

  handleMouseLeave = () => {
    this.setState({ isFocus: false });
  };

  render() {
    const { img, id, name, category, rating, cost } = this.props;
    const { isFocus } = this.state;
    const href = `apps/${id}`;

    return (
      <Paper
        className={styles.card}
        zDepth={isFocus ? 3 : 1}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to="href">
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${img})`
            }}
          />
        </Link>
        <div className={styles.content}>
          <Link className={styles.link} to={href}>
            {name}
          </Link>
          <p className={styles.category}>{category}</p>
        </div>
        <div className={styles.footer}>
          <RatingBlock className={styles.rating} rating={rating} />
          <CostBlock className={styles.cost} {...cost} />
        </div>
      </Paper>
    );
  }
}
