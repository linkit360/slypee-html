import _ from 'lodash/fp';

const initialState = {
  slider: [
    {
      img:
        'https://www.gamedesigning.org/wp-content/uploads/2015/09/mobile-game-design-checklist.jpg',
      text1: 'top games',
      text2: 'under $ 1',
      text3: 'The best offers of this month',
      link: 'https://www.gamedesigning.org/learn/mobile-game-design-checklist/'
    },
    {
      img: 'http://www.theouthousers.com/images/jck/53c7e42bc9d31.jpg',
      text1: 'top games2',
      text2: 'under $ 2',
      text3: 'The best offers of this month2',
      link:
        'http://www.theouthousers.com/forum/the-news-stand/even-more-guardians-the-galaxy-character-posters-the-sequel-plus-mobile-game-t103115.html'
    },
    {
      img:
        'https://www.gamedesigning.org/wp-content/uploads/2015/09/mobile-game-design-checklist.jpg',
      text1: 'top games',
      text2: 'under $ 1',
      text3: 'The best offers of this month',
      link: 'https://www.gamedesigning.org/learn/mobile-game-design-checklist/'
    },
    {
      img: 'http://www.theouthousers.com/images/jck/53c7e42bc9d31.jpg',
      text1: 'top games2',
      text2: 'under $ 2',
      text3: 'The best offers of this month2',
      link:
        'http://www.theouthousers.com/forum/the-news-stand/even-more-guardians-the-galaxy-character-posters-the-sequel-plus-mobile-game-t103115.html'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SLIDER_REQUEST':
      return _.assign(state, {
        readyStatus: 'REQUESTING'
      });
    case 'FETCH_SLIDER_FAILURE':
      return _.assign(state, {
        readyStatus: 'FAILURE',
        err: action.err
      });
    case 'FETCH_SLIDER_SUCCESS':
      return _.assign(state, {
        readyStatus: 'SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
