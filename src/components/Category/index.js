import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SlickWithSlider from '_components/interface/SlickWithSlider';
import AppCard from '_components/interface/AppCard';
import MostPopular from './MostPopular';
import styles from './styles.scss';

export default class Category extends React.PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() {
    const { category } = this.props;
    const { name, description, mostPopular, newApps } = category;

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </Paper>
        <div className={styles.content}>
          <div className={styles.mostPopularText}>MOST POPULAR</div>
          <MostPopular
            cards={mostPopular.list}
            onFetchMore={() => console.log('onFetchMore')}
          />
          <Divider className={styles.mobile} />
          <div className={styles.newText}>NEW</div>
          <SlickWithSlider className={styles.slick} slidesToShow={7} isSmooth>
            {newApps.map((app, index) => (
              <div key={index} className={styles.card}>
                <AppCard {...app} />
              </div>
            ))}
          </SlickWithSlider>
        </div>
      </div>
    );
  }
}
