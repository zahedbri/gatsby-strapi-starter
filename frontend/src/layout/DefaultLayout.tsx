import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

// Components:
import Header from '../components/Header'
import Footer from '../components/Footer'

// Context:
import AppContext from '../context/AppContext'

// Fonts:
import 'typeface-anton'
import 'typeface-montserrat'

// Styling (reset):
import './reset.css'

// ================================================================================================

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  padding: 0;
  flex: 1;
`

// ================================================================================================

const Layout = ({ children }) => {
  // State
  const [navOpen, setNavOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <AppContext.Provider value={{ navOpen, setNavOpen }}>
          <App>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </App>
        </AppContext.Provider>
      )}
    />
  )
}

// ================================================================================================

export default Layout
