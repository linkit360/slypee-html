import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import SlickWithSlider from '_components/Interface/SlickWithSlider';
import AppCard from '_components/Interface/AppCard';
import environmentHOC from '_utils/environmentHOC';
import Header from './Header';
import styles from './styles.scss';

const getSlides = (video, screenshots) => {
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
  screenshots.forEach((img, index) => {
    slides.push(
      <img
        key={index}
        className={styles.imageSlide}
        alt="slide"
        src={img.thumbnail}
      />
    );
  });

  return slides;
};

class Product extends React.PureComponent {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    related: PropTypes.arrayOf(PropTypes.object).isRequired,
    video: PropTypes.string,
    screenshots: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = {
    isButtonMoreClicked: false
  };

  getSlick = className => {
    const { video, screenshots } = this.props;

    return (
      <div className={className}>
        <SlickWithSlider className={styles.slick} variableWidth isSmooth>
          {getSlides(video, screenshots)}
        </SlickWithSlider>
      </div>
    );
  };

  handleButtonMoreClick = () => {
    this.setState({ isButtonMoreClicked: !this.state.isButtonMoreClicked });
  };

  render() {
    const { environment: { width }, name, description, related } = this.props;
    const { isButtonMoreClicked } = this.state;

    return (
      <div
        className={classNames(styles.content, {
          [styles.isButtonMoreClicked]: isButtonMoreClicked
        })}
      >
        <Paper className={styles.product} zDepth={1}>
          <Header {...this.props} />
          {this.getSlick(styles.desktop)}
          {description && (
            <div>
              <div className={styles.descriptionHeader}>
                Description of {name}
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          )}
          <FlatButton
            className={classNames(styles.buttonMore, styles.mobile)}
            label={isButtonMoreClicked ? 'Show less' : 'Show more'}
            onClick={this.handleButtonMoreClick}
          />
          {this.getSlick(styles.mobile)}
        </Paper>
        {related.length > 0 && (
          <div className={styles.related}>
            <div className={styles.relatedText}>RELATED CONTENT</div>
            <div className={styles.relatedList}>
              {related.map((app, index) => (
                <div key={index} className={styles.relatedCard}>
                  <AppCard {...app} isHorisontal={width > 1360} />
                </div>
              ))}
            </div>
            <SlickWithSlider className={styles.slickRelated}>
              {related.map((app, index) => (
                <div key={index} className={styles.relatedSlide}>
                  <AppCard {...app} />
                </div>
              ))}
            </SlickWithSlider>
          </div>
        )}
      </div>
    );
  }
}

export default environmentHOC(Product);
