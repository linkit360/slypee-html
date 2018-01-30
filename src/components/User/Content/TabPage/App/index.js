import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import Icon from '_components/Interface/Icon';
import RatingBlock from '_components/Interface/RatingBlock';
import CostBlock from '_components/Interface/CostBlock';
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

  getCategoryLink(className) {
    const { category } = this.props;

    return (
      <a
        className={classNames(styles.category, className)}
        href={getCategoryUrl(category)}
      >
        {category}
      </a>
    );
  }

  render() {
    const { id, img, name, rating, cost, purchaseDate, category } = this.props;

    return (
      <div className={styles.appWrapper}>
        <div className={styles.app}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className={styles.name}>{name}</div>
          {this.getCategoryLink(styles.mobile)}
          <RatingBlock className={styles.rating} rating={rating} isLong />
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
          {this.getCategoryLink(styles.desktop)}
          <FlatButton
            className={styles.buttonDownload}
            label="DOWNLOAD AGAIN"
            icon={
              <Icon
                className={styles.buttonDownloadIcon}
                name="file-download"
              />
            }
            onClick={this.handleShowMoreClick}
          />
          <FlatButton
            className={styles.buttonView}
            label="VIEW APP PAGE"
            href={`/app/${id}`}
          />
        </div>
      </div>
    );
  }
}
