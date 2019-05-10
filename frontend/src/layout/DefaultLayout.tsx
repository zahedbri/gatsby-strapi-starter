import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

// Components:
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  padding: 4rem 0;
  flex: 1;
`

// ================================================================================================

const Layout = ({ children }) => (
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
      <App>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </App>
    )}
  />
)

// ================================================================================================

export default Layout
