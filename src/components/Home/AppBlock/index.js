import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import OverflowScrolling from 'react-overflow-scrolling';
import AppCard from '_components/interface/AppCard';
import Slick from '_components/interface/Slick';
import styles from './styles.scss';

const SLIDES_TO_SHOW = 7;

export default class AppBlock extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  getAppCards = apps =>
    apps.map((app, index) => (
      <div key={index} className={styles.card}>
        <AppCard {...app} />
      </div>
    ));

  getButton = () => {
    const { href } = this.props;

    return (
      <FlatButton className={styles.buttonMore} href={href} label="More" />
    );
  };

  slickRef = ref => (this.slick = ref);

  slickGoTo(index) {
    this.slick.root.innerSlider.slickGoTo(index);
  }

  handleSliderChange = (e, value) => {
    const { apps } = this.props;
    const index = Math.round(value * (apps.length - SLIDES_TO_SHOW));
    this.slickIndex = index;
    setTimeout(() => {
      this.slickGoTo(this.slickIndex);
    }, 200);
  };

  render() {
    const { name, apps } = this.props;

    return (
      <div>
        <div className={styles.desktop}>
          <div className={styles.header}>
            <span className={styles.name}>{name}</span>
            {this.getButton()}
          </div>
          <Slick
            ref={this.slickRef}
            className={styles.slick}
            slidesToShow={SLIDES_TO_SHOW}
            arrows={false}
            infinite={false}
            draggable={false}
            afterChange={this.handleSlickChange}
          >
            {this.getAppCards(apps)}
          </Slick>
          <Slider
            className={styles.slider}
            onChange={this.handleSliderChange}
          />
        </div>
        <div className={styles.mobile}>
          <span className={styles.name}>{name}</span>
          <div className={styles.overflowScrollingWrapper}>
            <OverflowScrolling className={styles.overflowScrolling}>
              {this.getAppCards(apps)}
            </OverflowScrolling>
          </div>
          {this.getButton()}
        </div>
      </div>
    );
  }
}
