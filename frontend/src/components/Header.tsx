import { Link } from 'gatsby'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Atoms:
import Container from '../atoms/Container'

// Theme:
import theme from '../theme'

// ================================================================================================

const StyledHeader = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.first};
`

// ================================================================================================

const Header = ({ siteTitle }) => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </Container>
    </StyledHeader>
  </ThemeProvider>
)

// ================================================================================================

export default Header
