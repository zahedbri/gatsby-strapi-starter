import React, { useEffect, useState } from 'react'
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

// Hooks:
import useMedia from '../hooks/useMedia'

// Styling (reset):
import './reset.css'

// Theme:
import theme from '../theme'

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

  // ============================================
  // Provide responsive tool

  const [screenSizes, setScreenSizes] = useState({
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const sm = useMedia([`(min-width: ${theme.breakpoints.sm})`], [true], false)
  const md = useMedia([`(min-width: ${theme.breakpoints.md})`], [true], false)
  const lg = useMedia([`(min-width: ${theme.breakpoints.lg})`], [true], false)
  const xl = useMedia([`(min-width: ${theme.breakpoints.xl})`], [true], false)

  useEffect(() => {
    setScreenSizes({
      ...screenSizes,
      sm,
      md,
      lg,
      xl,
    })
  }, [])

  // ============================================

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
        <AppContext.Provider value={{ navOpen, screenSizes, setNavOpen }}>
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
