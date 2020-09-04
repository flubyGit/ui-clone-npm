import React, { createContext, useState } from 'react'

export const LandingContext = createContext()

export default function LandingProvider({ children }) {
  const [search, setSearch] = useState('')

  const state = {
    search,
    setSearch
  }
  Object.freeze(state)
  return (
    <LandingContext.Provider value={state}>
      {children}
    </LandingContext.Provider>
  )
}
