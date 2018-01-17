import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
Обертка для добавления окружения в компоненты.
Добавляет объект environment в props компонента.
 */

const maxMobileWidth = 768;

export default function environmentHOC(Component) {
  class EnvironmentComponent extends React.Component {
    static propTypes = {
      environment: PropTypes.object
    };

    render() {
      const { environment } = this.props;
      const isMobileWidth = environment.width <= maxMobileWidth;

      return (
        <Component
          {...this.props}
          environment={{ ...environment, isMobileWidth }}
        />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      environment: state.environment
    };
  }

  return connect(mapStateToProps, null)(EnvironmentComponent);
}
