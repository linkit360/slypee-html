import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
Обертка для добавления окружения в компоненты.
Добавляет объект environment в props компонента.
 */

const portraitPhoneWidth = 320;

export default function environmentHOC(Component) {
  class EnvironmentComponent extends React.Component {
    static propTypes = {
      environment: PropTypes.object
    };

    render() {
      const { environment } = this.props;
      const isPortraitPhone = environment.width <= portraitPhoneWidth;

      return (
        <Component
          {...this.props}
          environment={{ ...environment, isPortraitPhone }}
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
