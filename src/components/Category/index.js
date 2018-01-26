import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Tabs, Tab } from 'material-ui/Tabs';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SlickWithSlider from '_components/interface/SlickWithSlider';
import AppCard from '_components/interface/AppCard';
import AppsGrid from '_components/interface/AppsGrid';
import styles from './styles.scss';

export default class Category extends React.PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onFetchMore: PropTypes.func.isRequired
  };

  state = {
    filter: 'All',
    tab: 'mostPopular'
  };

  handleFilterChange = (event, index, filter) => {
    this.setState({ filter });
  };

  handleTabChange = tab => {
    this.setState({ tab });
  };

  handleFetchMore = startNumber => {
    const { tab, filter } = this.state;
    const { onFetchMore } = this.props;
    onFetchMore(startNumber, tab, filter);
  };

  render() {
    const { tab, filter } = this.state;
    const { category } = this.props;
    const { name, description, mostPopular, newApps } = category;

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
          <Tabs
            className={styles.tabs}
            value={tab}
            onChange={this.handleTabChange}
          >
            <Tab
              className={styles.tab}
              value="mostPopular"
              label="most popular"
            />
            <Tab className={styles.tab} value="mostRated" label="most rated" />
          </Tabs>
          <div className={styles.filterBlock}>
            <span className={styles.filterText}>Content type:</span>
            <DropDownMenu
              className={styles.filter}
              value={filter}
              onChange={this.handleFilterChange}
            >
              <MenuItem
                className={styles.filterItem}
                value="All"
                primaryText="All"
              />
              <MenuItem
                className={styles.filterItem}
                value="Free"
                primaryText="Free"
              />
              <MenuItem
                className={styles.filterItem}
                value="Subscription"
                primaryText="Subscription"
              />
            </DropDownMenu>
          </div>
        </Paper>
        <div className={styles.content}>
          <AppsGrid
            cards={mostPopular.list}
            startCountRows={2}
            onFetchMore={this.handleFetchMore}
          />
          <Divider className={styles.mobile} />
          <div className={styles.newText}>NEW</div>
          <SlickWithSlider className={styles.slick} slidesToShow={7} isSmooth>
            {newApps.map((app, index) => (
              <div key={index} className={styles.card}>
                <AppCard {...app} />
              </div>
            ))}
          </SlickWithSlider>
        </div>
      </div>
    );
  }
}
