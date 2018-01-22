import _ from 'lodash/fp';

const app = {
  img:
    'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
  id: 3453,
  name: 'AliExpress Shopping App- $100 Coupons For New User',
  rating: 3.6,
  cost: {
    price: 5500,
    type: 'weekly',
    currency: 'inr'
  },
  purchaseDate: '15/01/2018',
  category: 'games'
};

const arrayOfApp = [app, app, app, app, app, app, app, app];

const initialState = {
  avatar:
    'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
  name: 'Jack Jacson',
  mail: 'jack_jacson@gmail.com',
  purchased: {
    list: arrayOfApp,
    sort: {
      sortBy: 'Name',
      isSortReverse: false
    }
  },
  subscription: {
    list: arrayOfApp,
    sort: {
      sortBy: 'Name',
      isSortReverse: false
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_APPS_SORT':
      return _.assign(state, {
        [action.tabName]: {
          ...state[action.tabName],
          sort: action.data
        }
      });
    default:
      return state;
  }
};
