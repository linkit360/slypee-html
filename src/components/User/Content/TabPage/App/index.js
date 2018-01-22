import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Icon from '_components/interface/Icon';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import { getCategoryUrl } from '_utils/common';
import styles from './styles.scss';

export default class App extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    cost: PropTypes.object.isRequired,
    purchaseDate: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
  };

  render() {
    const { id, img, name, rating, cost, purchaseDate, category } = this.props;

    return (
      <div className={styles.app}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className={styles.name}>{name}</div>
        <RatingBlock className={styles.rating} rating={rating} />
        <div className={styles.purchaseBlock}>
          <div>
            <span className={styles.purchaseText}>purchase price:</span>
            <CostBlock className={styles.costBlock} isSimple {...cost} />
          </div>
          <div>
            <span className={styles.purchaseText}>purchase date:</span>
            <span className={styles.purchaseDate}>{purchaseDate}</span>
          </div>
        </div>
        <a className={styles.category} href={getCategoryUrl(category)}>
          {category}
        </a>
        <FlatButton
          className={styles.buttonDownload}
          label="DOWNLOAD AGAIN"
          icon={
            <Icon className={styles.buttonDownloadIcon} name="file-download" />
          }
          onClick={this.handleShowMoreClick}
        />
        <FlatButton
          className={styles.buttonView}
          label="VIEW APP PAGE"
          href={`/app/${id}`}
        />
      </div>
    );
  }
}
