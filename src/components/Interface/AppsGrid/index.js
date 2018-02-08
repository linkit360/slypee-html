import React from 'react';
import PropTypes from 'prop-types';
import PreloaderPage from '_pages/PreloaderPage';
import Grid from './Grid';

export default class AppsGrid extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  };

  render() {
    const { cards, className } = this.props;

    console.log(cards);

    if (!cards) {
      return <PreloaderPage />;
    }

    if (cards.list.length === 0) {
      return <div className={className}>Sorry, no data</div>;
    }

    return (
      <Grid
        {...this.props}
        cards={cards.list}
        isFetchedAll={cards.isFetchedAll}
      />
    );
  }
}
