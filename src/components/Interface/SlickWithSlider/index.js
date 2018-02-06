import React from 'react';
import PropTypes from 'prop-types';
import ScrollHidden from '_components/Interface/ScrollHidden';
import ScrollWithSlider from './ScrollWithSlider';
import styles from './styles.scss';

export default class SlickWithSlider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
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
            <ScrollHidden>
              <div className={styles.overflowScrolling}>
                {this.props.children}
              </div>
            </ScrollHidden>
          </div>
        </div>
      </div>
    );
  }
}
