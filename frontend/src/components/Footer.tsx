import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Atoms:
import Container from '../atoms/Container'

// Theme:
import theme from '../theme'

// ================================================================================================

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: ${props => props.theme.first};
`

// ================================================================================================

const Footer = () => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <Container>
        <span style={{ color: '#fff' }}>Footer</span>
      </Container>
    </StyledFooter>
  </ThemeProvider>
)

// ================================================================================================

export default Footer
