import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SlickWithSlider from '_components/Interface/SlickWithSlider';
import AppCard from '_components/Interface/AppCard';
import AppsGrid from '_components/Interface/AppsGrid';
import FilterTypeBlock from '_components/Interface/FilterTypeBlock';
import styles from './styles.scss';

export default class Category extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    newApps: PropTypes.arrayOf(PropTypes.object.isRequired),
    onFetchContent: PropTypes.func.isRequired,
    onFetchMoreContent: PropTypes.func.isRequired
  };

  state = {
    filter: 'all',
    tab: 'mostPopular'
  };

  handleFilterChange = (event, index, filter) => {
    const { tab } = this.state;
    const { onFetchContent } = this.props;
    this.setState({ filter });
    onFetchContent({ tab, filter });
  };

  handleTabChange = tab => {
    const { filter } = this.state;
    const { onFetchContent } = this.props;
    this.setState({ tab });
    onFetchContent({ tab, filter });
  };

  handleFetchMoreContent = () => {
    const { tab, filter } = this.state;
    const { onFetchMoreContent } = this.props;
    onFetchMoreContent({ tab, filter });
  };

  render() {
    const { tab, filter } = this.state;
    const { name, description, content, newApps } = this.props;

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          <div className={styles.name}>{name}</div>
          <div
            className={styles.description}
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{ __html: description }}
            /* eslint-enable react/no-danger */
          />
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
          <FilterTypeBlock
            className={styles.filterBlock}
            filter={filter}
            onChange={this.handleFilterChange}
          />
        </Paper>
        <div className={styles.content}>
          <AppsGrid
            cards={content}
            startCountRows={2}
            onFetchMore={this.handleFetchMoreContent}
          />
          <Divider className={styles.mobile} />
          <div className={styles.newText}>NEW</div>
          {
            <SlickWithSlider className={styles.slick} isAppCards isSmooth>
              {newApps.map((app, index) => (
                <div key={index} className={styles.card}>
                  <AppCard {...app} />
                </div>
              ))}
            </SlickWithSlider>
          }
        </div>
      </div>
    );
  }
}
