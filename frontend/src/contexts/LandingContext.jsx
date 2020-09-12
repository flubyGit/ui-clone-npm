/* eslint react/prop-types: 0 */
import React, { createContext, useState } from 'react';
// import PropTypes from 'prop-types'

export const LandingContext = createContext();

export default function LandingProvider({ children }) {
  const [search, setSearch] = useState('');

  const state = {
    search,
    setSearch,
  };
  Object.freeze(state);
  return <LandingContext.Provider value={state}>{children}</LandingContext.Provider>;
}

// LandingProvider.propTypes = {
//   children: PropTypes.node.isRequired
// }
