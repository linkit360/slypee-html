import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import Icon from '_components/Interface/Icon';
import RatingBlock from '_components/Interface/RatingBlock';
import CostBlock from '_components/Interface/CostBlock';
import { getCategoryUrl } from '_utils/common';
import Dotdotdot from 'react-dotdotdot';
import styles from './styles.scss';

export default class App extends React.PureComponent {
  static propTypes = {
    contentId: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
    // onSubscribe: PropTypes.func.isRequired
  };

  getCategoryLink(className) {
    const { categoryName } = this.props;

    return (
      <a
        className={classNames(styles.category, className)}
        href={getCategoryUrl(categoryName)}
      >
        {categoryName}
      </a>
    );
  }

  handleDownloadAgainClick = () => {
    /* const { contentId, onSubscribe } = this.props;
    onSubscribe({ id: contentId }); */
  };

  render() {
    const {
      contentId,
      logo,
      name,
      rating,
      price,
      type,
      currency,
      date
    } = this.props;

    return (
      <div className={styles.appWrapper}>
        <div className={styles.app}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${logo})` }}
          />
          <div className={styles.name}>
            <Dotdotdot className={styles.dotdotdot} clamp={2}>
              {name}
            </Dotdotdot>
          </div>
          {this.getCategoryLink(styles.mobile)}
          <div className={styles.ratingWrapper}>
            <RatingBlock className={styles.rating} rating={rating} isLong />
            {this.getCategoryLink(styles.desktop)}
          </div>
          <div className={styles.purchaseBlock}>
            <div>
              <span className={styles.purchaseText}>purchase price:</span>
              <CostBlock
                className={styles.costBlock}
                isSimple
                price={price}
                type={type}
                currency={currency}
              />
            </div>
            <div>
              <span className={styles.purchaseText}>purchase date:</span>
              <span className={styles.purchaseDate}>
                {moment(date * 1000).format('MM/DD/YYYY')}
              </span>
            </div>
          </div>
          <FlatButton
            className={styles.buttonDownload}
            label="DOWNLOAD AGAIN"
            icon={
              <Icon
                className={styles.buttonDownloadIcon}
                name="file-download"
              />
            }
            href="http://xmp.linkit360.ru/get-content"
          />
          <Link to={`/apps/${contentId}`}>
            <FlatButton className={styles.buttonView} label="VIEW APP PAGE" />
          </Link>
        </div>
      </div>
    );
  }
}
