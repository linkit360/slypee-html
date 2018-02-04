import React from 'react';
import PropTypes from 'prop-types';
import OverflowScrolling from 'react-overflow-scrolling';
import ScrollWithSlider from './ScrollWithSlider';
import styles from './styles.scss';

class SlickWithSlider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    environment: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.node)
  };

  render() {
    const { className, children } = this.props;

    if (children.length === 0) {
      return null;
    }

    return (
      <div className={className}>
        <div className={styles.desktop}>
          <ScrollWithSlider {...this.props} />
        </div>
        <div className={styles.mobile}>
          <div className={styles.scrollWrapper}>
            <OverflowScrolling className={styles.overflowScrolling}>
              {this.props.children}
            </OverflowScrolling>
          </div>
        </div>
      </div>
    );
  }
}

export default SlickWithSlider;
