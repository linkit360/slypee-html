import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
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

  handleSliderChange = (e, value) => {
    const { apps } = this.props;
    const index = Math.round(value * (apps.length - SLIDES_TO_SHOW));
    this.slickIndex = index;
    setTimeout(() => {
      this.slickGoTo(this.slickIndex);
    }, 200);
  };

  slickGoTo(index) {
    this.slick.root.innerSlider.slickGoTo(index);
  }

  slickRef = ref => (this.slick = ref);

  render() {
    const { name, href, apps } = this.props;

    return (
      <div>
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
          <FlatButton className={styles.buttonMore} href={href} label="More" />
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
          {apps.map((app, index) => (
            <div key={index} className={styles.card}>
              <AppCard {...app} />
            </div>
          ))}
        </Slick>
        <Slider className={styles.slider} onChange={this.handleSliderChange} />
      </div>
    );
  }
}
