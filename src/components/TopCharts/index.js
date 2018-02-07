import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppsGrid from '_components/Interface/AppsGrid';
import FilterTypeBlock from '_components/Interface/FilterTypeBlock';
import FilterCategoryBlock from '_components/Interface/FilterCategoryBlock';
import PreloaderPage from '_pages/PreloaderPage';
import styles from './styles.scss';

export default class TopCharts extends React.PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    apps: PropTypes.object.isRequired,
    onFetchContent: PropTypes.func.isRequired,
    onFetchMoreContent: PropTypes.func.isRequired
  };

  state = {
    type: 'all',
    category: 'all'
  };

  handleTypeChange = (event, index, type) => {
    const { category } = this.state;
    const { onFetchContent } = this.props;
    this.setState({ type });
    onFetchContent({ type, category });
  };

  handleCategoryChange = (event, index, category) => {
    const { type } = this.state;
    const { onFetchContent } = this.props;
    this.setState({
      category
    });
    onFetchContent({ type, category });
  };

  handleFetchMoreContent = () => {
    const { type, category } = this.state;
    const { onFetchMoreContent } = this.props;
    onFetchMoreContent({ type, category });
  };

  render() {
    const { apps, categories, isFetching } = this.props;
    const { type, category } = this.state;

    return (
      <div>
        <Paper className={styles.header}>
          <span className={styles.headerText}>TOP CHARTS</span>
          <div className={styles.headerRight}>
            <FilterCategoryBlock
              className={styles.filterCategoryBlock}
              categories={categories}
              filter={category}
              onChange={this.handleCategoryChange}
            />
            <FilterTypeBlock
              className={styles.filterTypeBlock}
              filter={type}
              onChange={this.handleTypeChange}
            />
          </div>
        </Paper>
        <div className={styles.content}>
          {isFetching ? (
            <PreloaderPage />
          ) : (
            <AppsGrid
              className={styles.grid}
              cards={apps.list}
              isFetchedAll={apps.isFetchedAll}
              startCountRows={3}
              onFetchMore={this.handleFetchMoreContent}
            />
          )}
        </div>
      </div>
    );
  }
}
