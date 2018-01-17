import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import AppBlock from './AppBlock';
import styles from './styles.scss';

const apps = [
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
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '4 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'weekly',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '5 Jungle Monkey Run Version Abrakadabra',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '6 Jungle Monkey Run Version Abrakadabra',
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
    name: '7 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'daily',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '8 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'weekly',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '9 Jungle Monkey Run Version Abrakadabra',
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
    name: '10 Jungle Monkey Run Version Abrakadabra',
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
    name: '11 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'daily',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '12 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'weekly',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '13 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'daily',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '14 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'weekly',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '15 Jungle Monkey Run Version Abrakadabra',
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
    name: '16 Jungle Monkey Run Version Abrakadabra',
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
    name: '17 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'daily',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '18 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 1.3,
    cost: {
      price: 5500,
      type: 'weekly',
      currency: 'usd'
    }
  },
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    id: 3453,
    name: '19 Jungle Monkey Run Version Abrakadabra',
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
    name: '20 Jungle Monkey Run Version Abrakadabra',
    publisher: 'Arcade Games',
    rating: 5,
    cost: {
      price: 5500,
      type: 'monthly',
      currency: 'inr'
    }
  }
];

const appBlock = {
  name: 'most popular',
  href: 'http://localhost:3000/topcharts',
  apps
};

const appBlocks = [appBlock, appBlock, appBlock];

export default class Home extends React.PureComponent {
  static propTypes = {
    main: PropTypes.object.isRequired
  };

  render() {
    const { main } = this.props;

    return (
      <div>
        <Slider slides={main.slider} />
        <div className={styles.content}>
          {appBlocks.map((appBlock, index) => (
            <AppBlock
              key={index}
              className={styles.appBlock}
              name={appBlock.name}
              href={appBlock.href}
              apps={appBlock.apps}
            />
          ))}
        </div>
      </div>
    );
  }
}
