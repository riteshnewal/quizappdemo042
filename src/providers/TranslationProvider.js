import React, { Component } from "react";
import PropTypes from "prop-types";

export const TranslationContext = React.createContext();

class TranslationProvider extends Component {
  render() {
    const { children, resourceBundle } = this.props;
    return (
      <TranslationContext.Provider value={{ resourceBundle }}>
        {children}
      </TranslationContext.Provider>
    );
  }
}

export default TranslationProvider;

TranslationProvider.propTypes = {
  resourceBundle: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
