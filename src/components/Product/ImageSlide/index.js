import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class ImageSlide extends React.PureComponent {
  static propTypes = {
    img: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { index, onClick } = this.props;
    onClick(index);
  };

  render() {
    const { img, index } = this.props;

    return (
      <img
        key={index}
        className={styles.imageSlide}
        alt="slide"
        src={img.thumbnail}
        onClick={this.handleClick}
      />
    );
  }
}
