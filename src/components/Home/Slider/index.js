import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Slick from '_components/interface/Slick';
import styles from './styles.scss';

export default class Slider extends React.PureComponent {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { slides } = this.props;

    console.log(slides);

    return (
      <Slick
        className={styles.slider}
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        startResizeHack
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className={styles.sliderInner} />
            <div className={styles.sliderTextBlock}>
              <div className={styles.sliderText1}>{slide.title}</div>
              <div className={styles.sliderText2}>{slide.subtitle}</div>
              <div className={styles.sliderText3}>{slide.description}</div>
              <FlatButton
                className={styles.sliderButton}
                label="Learn more"
                href={slide.link}
              />
            </div>
          </div>
        ))}
      </Slick>
    );
  }
}
