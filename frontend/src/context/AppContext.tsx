import React from 'react'

const AppContext = React.createContext({
  // GET
  navOpen: false,
  screenSizes: {
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  },
  // SET
  setNavOpen: (open: boolean) => {},
})

// ================================================================================================

export default AppContext
