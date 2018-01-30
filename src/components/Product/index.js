import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import SlickWithSlider from '_components/Interface/SlickWithSlider';
import AppCard from '_components/Interface/AppCard';
import Header from './Header';
import styles from './styles.scss';

const related = [
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '1 Jungle Monkey',
    producer: 'Arcade Games',
    rating: 3.6,
    cost: {
      price: 0,
      type: 'single',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '2 Jungle Monkey Run Version Abrakadabra',
    producer: 'Arcade Games',
    rating: 5,
    cost: {
      price: 5500,
      type: 'monthly',
      currency: 'inr'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '3 Jungle Monkey Run Version Abrakadabra',
    producer: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'daily',
      currency: 'usd'
    }
  }
];

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

export default class Product extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired
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
    const { name, description } = this.props;
    const { isButtonMoreClicked } = this.state;

    return (
      <div
        className={classNames(styles.content, {
          [styles.isButtonMoreClicked]: isButtonMoreClicked
        })}
      >
        <Paper className={styles.product} zDepth={1}>
          <Header {...this.props} />
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
