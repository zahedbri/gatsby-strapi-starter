import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Atoms:
import Container from '../atoms/Container'

// Components:
import Nav from '../components/Nav'

// Theme:
import theme from '../theme'

// ================================================================================================

const StyledHeader = styled.header`
  width: 100%;
  height: ${props => `${props.theme.sizes.header}px`};

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
`

// ================================================================================================

const Header = () => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <Container fluid>
        <Nav />
      </Container>
    </StyledHeader>
  </ThemeProvider>
)

// ================================================================================================

export default Header
