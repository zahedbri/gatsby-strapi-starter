import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Atoms:
import Container from '../atoms/Container'

// Theme:
import theme from '../theme'

// ================================================================================================

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${props => props.theme.colors.first};
`
const FooterContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    justify-content: flex-start;
  }
`

const Txt = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  /* text-transform: uppercase; */
`

// ================================================================================================

const Footer = () => (
  <ThemeProvider theme={theme}>
    <StyledFooter>
      <Container>
        <FooterContent>
          <Txt>&copy; Company Name 2019</Txt>
        </FooterContent>
      </Container>
    </StyledFooter>
  </ThemeProvider>
)

// ================================================================================================

export default Footer
