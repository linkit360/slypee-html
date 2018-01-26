/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { resize } from '_actions';
import Helmet from 'react-helmet';
import _ from 'lodash/fp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import '../../theme/fonts.css';
import styles from './styles.scss';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#263238',
    accent1Color: '#f4511e'
  }
});

const RouteWithSubRoutes = (route): Element<typeof Route> => (
  <Route
    key={_.uniqueId()}
    exact={route.exact || false}
    path={route.path}
    render={props => (
      // Pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes || null} />
    )}
  />
);

class App extends React.Component {
  static propTypes = {
    resize: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.resizeListener();
    if (typeof window === 'object') {
      window.addEventListener('resize', this.resizeListener);
    }
  }

  componentWillUnmount() {
    if (typeof window === 'object') {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  resizeListener = () => {
    if (typeof document === 'object') {
      this.props.resize(document.body.offsetWidth, document.body.offsetHeight);
    }
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={styles.App}>
          <Helmet {...config.app} />
          <Switch>{routes.map(route => RouteWithSubRoutes(route))}</Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resize
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
