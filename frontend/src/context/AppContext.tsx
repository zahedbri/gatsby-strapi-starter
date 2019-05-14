import React from 'react'

const AppContext = React.createContext({
  // GET
  navOpen: '',
  // SET
  setNavOpen: (open: boolean) => {},
})

// ================================================================================================

export default AppContext
