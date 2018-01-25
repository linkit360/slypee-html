import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import SlickWithSlider from '_components/interface/SlickWithSlider';
import AppCard from '_components/interface/AppCard';
import Header from './Header';
import styles from './styles.scss';

const getSlides = slider => {
  const { video, imgs } = slider;
  const slides = [];
  if (video) {
    slides.push(
      <iframe
        key={-1}
        className={styles.iframe}
        src={video}
        frameBorder="0"
        allowFullScreen
        title="video"
      />
    );
  }
  imgs.forEach((img, index) => {
    slides.push(
      <img key={index} className={styles.imageSlide} alt="slide" src={img} />
    );
  });

  return slides;
};

export default class Product extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  state = {
    isButtonMoreClicked: false
  };

  getSlick = className => {
    const { slider } = this.props.app;

    return (
      <div className={className}>
        <SlickWithSlider className={styles.slick} variableWidth isSmooth>
          {getSlides(slider)}
        </SlickWithSlider>
      </div>
    );
  };

  handleButtonMoreClick = () => {
    this.setState({ isButtonMoreClicked: !this.state.isButtonMoreClicked });
  };

  render() {
    const { app } = this.props;
    const { name, description, related } = app;
    const { isButtonMoreClicked } = this.state;

    return (
      <div
        className={classNames(styles.content, {
          [styles.isButtonMoreClicked]: isButtonMoreClicked
        })}
      >
        <Paper className={styles.product} zDepth={1}>
          <Header {...app} />
          <Divider className={styles.mobileDivider} />
          {this.getSlick(styles.desktop)}
          <div className={styles.descriptionHeader}>Description of {name}</div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <FlatButton
            className={classNames(styles.buttonMore, styles.mobile)}
            onClick={this.handleButtonMoreClick}
            label={isButtonMoreClicked ? 'Show less' : 'Show more'}
          />
        </Paper>
        {this.getSlick(styles.mobile)}
        <div className={styles.related}>
          <div className={styles.relatedText}>RELATED CONTENT</div>
          <div className={styles.desktop}>
            {related.map((app, index) => (
              <div key={index} className={styles.relatedCard}>
                <AppCard {...app} isHorisontal />
              </div>
            ))}
          </div>
          <div className={styles.mobile}>
            <SlickWithSlider>
              {related.map((app, index) => (
                <div key={index} className={styles.relatedSlide}>
                  <AppCard {...app} />
                </div>
              ))}
            </SlickWithSlider>
          </div>
        </div>
      </div>
    );
  }
}
