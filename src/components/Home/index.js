import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import AppBlock from './AppBlock';
import styles from './styles.scss';

const apps = [
  {
    img:
      'https://i.pinimg.com/736x/f8/89/8e/f8898e79f66ec9545847915a2b306594--icon-design-game-design.jpg',
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '1 Jungle Monkey',
    category: 'Arcade Games',
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
    name: '2 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '3 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '4 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '5 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '7 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '8 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '9 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    name: '10 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '11 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '12 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '13 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '14 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '15 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    name: '16 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '17 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '18 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    href:
      'https://play.google.com/store/apps/details?id=com.zeptolab.ctr2.f2p.google&hl=ru',
    name: '19 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    name: '20 Jungle Monkey Run Version Abrakadabra',
    category: 'Arcade Games',
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
    slider: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { slider } = this.props;

    return (
      <div>
        <Slider slides={slider} />
        <div className={styles.content}>
          {appBlocks.map(appBlock => (
            <AppBlock
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
