import React from 'react';
import PropTypes from 'prop-types';
import environmentHOC from '_utils/environmentHOC';
import classNames from 'classnames';
import styles from './styles.scss';

class ScrollHidden extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    environment: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.update();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.environment.width !== this.props.environmentHOC) {
      this.update();
    }
  }

  update() {
    const delta = this.wrapper.offsetHeight - this.wrapper.clientHeight;
    this.wrapper.style.marginBottom = `${-delta}px`;
  }

  rootRef = ref => (this.root = ref);
  wrapperRef = ref => (this.wrapper = ref);

  render() {
    const { className, children } = this.props;

    return (
      <div
        ref={this.rootRef}
        className={classNames(styles.scrollHidden, className)}
      >
        <div ref={this.wrapperRef} className={styles.wrapper}>
          {children}
        </div>
      </div>
    );
  }
}

export default environmentHOC(ScrollHidden);
