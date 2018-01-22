import React from 'react';
import PropTypes from 'prop-types';
import { getCategoryUrl } from '_utils/common';
import Slider from './Slider';
import AppBlock from './AppBlock';
import styles from './styles.scss';

export default class Home extends React.PureComponent {
  static propTypes = {
    slider: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    main: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  render() {
    const { slider, main } = this.props;

    return (
      <div>
        <Slider slides={slider} />
        <div className={styles.content}>
          {main.map((item, index) => (
            <AppBlock
              key={index}
              className={styles.appBlock}
              name={item.category.name}
              href={getCategoryUrl(item.category.name)}
              apps={item.items}
            />
          ))}
        </div>
      </div>
    );
  }
}
