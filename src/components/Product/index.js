import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RatingBlock from '_components/interface/RatingBlock';
import CostBlock from '_components/interface/CostBlock';
import Icon from '_components/interface/Icon';
import SlickWithSlider from '_components/interface/SlickWithSlider';
import Header from './Header';
import styles from './styles.scss';

const getSlides = slider => {
  const { video, imgs } = slider;
  const slides = [];
  if (video) {
    slides.push(
      <iframe
        className={styles.iframe}
        src={video}
        frameBorder="0"
        allowFullScreen
        title="video"
      />
    );
  }
  imgs.forEach(img => {
    slides.push(<img className={styles.imageSlide} alt="slide" src={img} />);
  });

  return slides;
};

export default class Product extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  render() {
    const { app } = this.props;
    const { name, slider, description } = app;

    return (
      <div className={styles.content}>
        <Paper className={styles.product} zDepth={1}>
          <Header {...app} />
          <SlickWithSlider
            className={styles.slick}
            slidesToShow={2}
            variableWidth
            centerMode
            infinity
          >
            {getSlides(slider)}
          </SlickWithSlider>
          <div className={styles.descriptionHeader}>Description of {name}</div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Paper>
      </div>
    );
  }
}
