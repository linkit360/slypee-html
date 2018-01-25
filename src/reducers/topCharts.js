import _ from 'lodash/fp';

const card = {
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
};

const initialState = {
  fetching: false,
  list: [
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card,
    card
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_SEARCH':
      return _.assign(state, {
        lastTimeGoToSearch: new Date()
      });
    case 'GO_TO_MOBILE_SEARCH':
      return _.assign(state, {
        lastTimeGoToMobileSearch: new Date()
      });
    default:
      return state;
  }
};
