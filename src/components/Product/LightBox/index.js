import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

export default class LightBox extends React.PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    index: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  state = {
    photoIndex: 0
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ photoIndex: nextProps.index });
  }

  render() {
    const { images, isOpen, onClose } = this.props;
    const { photoIndex } = this.state;

    if (!isOpen) return null;

    return (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length
          })
        }
      />
    );
  }
}
