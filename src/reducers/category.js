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
  slug: '',
  content: {
    readyStatus: '',
    list: []
  },
  newApps: [
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
    case 'SET_CATEGORY_SLUG':
      return _.assign(state, {
        slug: action.slug
      });
    case 'FETCH_CATEGORY_CONTENT':
      return _.assign(state, {
        content: { readyStatus: 'REQUESTING', list: [] }
      });
    case 'FETCH_CATEGORY_CONTENT_SUCCESS':
      return _.assign(state, {
        content: { readyStatus: 'SUCCESS', list: action.data }
      });
    case 'FETCH_MORE_CATEGORY_CONTENT_SUCCESS':
      return _.assign(state, {
        content: {
          ...state.content,
          list: [...state.content.list, ...action.data]
        }
      });
    default:
      return state;
  }
};
