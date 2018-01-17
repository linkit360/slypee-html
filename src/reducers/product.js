import _ from 'lodash/fp';

const initialState = {
  name: 'AliExpress Shopping App- $100 Coupons For New User',
  publisher: 'Arcade Games',
  category: 'games',
  rating: 3.3,
  cost: {
    price: 5500,
    type: 'weekly',
    currency: 'inr'
  },
  img:
    'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
  slider: {
    video: 'http://www.youtube.com/embed/DkaUsBwe0fo',
    imgs: [
      'https://lh3.googleusercontent.com/3JZgrBIGBsg1zwxJsoa12MyI07pOh0hZKUAp1NGUx8hC7R9uFReRv4VxeSRxbS8Dkrs=h900-rw',
      'https://lh3.googleusercontent.com/2fFSLOWcsgjykAsFnuQVK3DrREhL_4AqB15qD_hEzgF2y16WIiJ7QebG_NRZ3hzHUw=h900-rw',
      'https://lh5.ggpht.com/ZGFlCUKbhK8wafq9CEGMYKOIU9-ctZiqOnM7ljiawbEt2M0oHNP7o2hrEsiCfToaHGM=h900-rw',
      'https://lh3.googleusercontent.com/n9F5uj-EkBqr5GawnpnLWn46scbCG_GCVtDUZAgpuzIq4y4BP6ZnGDggXR5DEysqj-o=h900-rw',
      'https://lh6.ggpht.com/oeJfJgdFlF9Iaba0M39V1BiBUoF_lhXraj5ywejqHEe5yyJNQAD5rF7UX7E9KpTk39Q=h900-rw'
    ]
  },
  description:
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>',
  related: [
    {
      img:
        'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
      id: 3453,
      name: '1 Jungle Monkey',
      publisher: 'Arcade Games',
      rating: 3.6,
      cost: {
        price: 0,
        type: 'single',
        currency: 'usd'
      }
    },
    {
      img:
        'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
      id: 3453,
      name: '2 Jungle Monkey Run Version Abrakadabra',
      publisher: 'Arcade Games',
      rating: 5,
      cost: {
        price: 5500,
        type: 'monthly',
        currency: 'inr'
      }
    },
    {
      img:
        'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
      id: 3453,
      name: '3 Jungle Monkey Run Version Abrakadabra',
      publisher: 'Arcade Games',
      rating: 1.3,
      cost: {
        price: 5500,
        type: 'daily',
        currency: 'usd'
      }
    }
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
