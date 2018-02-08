import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import SlickWithSlider from '_components/Interface/SlickWithSlider';
import AppCard from '_components/Interface/AppCard';
import environmentHOC from '_utils/environmentHOC';
import Header from './Header';
import LightBox from './LightBox';
import ImageSlide from './ImageSlide';
import styles from './styles.scss';

const MIN_HEIGHT_DESCRIPTION = 60;

const getSlides = (video, screenshots, onImageClick) => {
  const slides = [];
  if (video) {
    slides.push(
      <div key={-1} className={styles.videoWrapper}>
        <div className={styles.preloaderWrapper}>
          <CircularProgress color="#8d9396" thickness={5} />
        </div>
        <iframe
          className={styles.iframe}
          src={video}
          frameBorder="0"
          allowFullScreen
          title="video"
        />
      </div>
    );
  }
  screenshots.forEach((img, index) => {
    slides.push(
      <ImageSlide img={img} key={index} index={index} onClick={onImageClick} />
    );
  });

  return slides;
};

const getImages = screenshots => screenshots.map(img => img.src);

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
    isButtonMoreClicked: false,
    isShowButtonMore: false,
    isLightBoxOpen: false
  };

  componentDidMount() {
    this.updateShowButtonMore();
  }

  componentDidUpdate(prevProps) {
    if (this.props.environment.width !== prevProps.environment.width) {
      this.updateShowButtonMore();
    }
  }

  lightBoxIndex = 0;

  getSlick = className => {
    const { video, screenshots } = this.props;

    return (
      <div className={className}>
        <SlickWithSlider className={styles.slick} variableWidth isSmooth>
          {getSlides(video, screenshots, this.handleImageClick)}
        </SlickWithSlider>
      </div>
    );
  };

  updateShowButtonMore() {
    if (this.description) {
      this.setState({
        isShowButtonMore: this.description.offsetHeight > MIN_HEIGHT_DESCRIPTION
      });
    }
  }

  toogleLightBox(isLightBoxOpen) {
    this.setState({ isLightBoxOpen });
  }

  handleImageClick = index => {
    this.lightBoxIndex = index;
    this.toogleLightBox(true);
  };

  handleButtonMoreClick = () => {
    this.setState({ isButtonMoreClicked: !this.state.isButtonMoreClicked });
  };

  handleLightBoxClose = () => {
    this.toogleLightBox(false);
  };

  descriptionRef = ref => (this.description = ref);

  render() {
    const {
      environment: { width },
      name,
      description,
      related,
      screenshots
    } = this.props;
    const {
      isButtonMoreClicked,
      isLightBoxOpen,
      isShowButtonMore
    } = this.state;

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
              <div className={styles.descriptionWrapper}>
                <div
                  ref={this.descriptionRef}
                  className={styles.description}
                  /* eslint-disable react/no-danger */
                  dangerouslySetInnerHTML={{ __html: description }}
                  /* eslint-enable react/no-danger */
                />
              </div>
            </div>
          )}
          {isShowButtonMore && (
            <FlatButton
              className={classNames(styles.buttonMore, styles.mobile)}
              label={isButtonMoreClicked ? 'Show less' : 'Show more'}
              onClick={this.handleButtonMoreClick}
            />
          )}
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
        <LightBox
          images={getImages(screenshots)}
          isOpen={isLightBoxOpen}
          index={this.lightBoxIndex}
          onClose={this.handleLightBoxClose}
        />
      </div>
    );
  }
}

export default environmentHOC(Product);
