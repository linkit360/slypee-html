import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import AppCard from '_components/interface/AppCard';
import SlickWithSlider from '_components/interface/SlickWithSlider';
import styles from './styles.scss';

export default class AppBlock extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    apps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  getAppCards = apps =>
    apps.map((app, index) => (
      <div key={index} className={styles.card}>
        <AppCard {...app} />
      </div>
    ));

  getButton = () => {
    const { href } = this.props;

    return (
      <FlatButton className={styles.buttonMore} href={href} label="More" />
    );
  };

  getSlick = () => {
    const { apps } = this.props;

    return (
      <SlickWithSlider className={styles.slick} slidesToShow={7} isSmooth>
        {this.getAppCards(apps)}
      </SlickWithSlider>
    );
  };

  render() {
    const { className, name } = this.props;

    return (
      <div className={className}>
        <div className={styles.desktop}>
          <div className={styles.header}>
            <span className={styles.name}>{name}</span>
            {this.getButton()}
          </div>
          {this.getSlick()}
        </div>
        <div className={styles.mobile}>
          <span className={styles.name}>{name}</span>
          {this.getSlick()}
          {this.getButton()}
        </div>
      </div>
    );
  }
}
