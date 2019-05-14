import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'

// Atoms:
import Icon from '../atoms/Icon'

// Context:
import AppContext from '../context/AppContext'

// Theme:
import theme from '../theme'

// Utils:
import { scale } from '../utils/typography'

// ================================================================================================

export interface NavProps {
  open?: boolean
}

// ================================================================================================

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const BurgerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  box-shadow: none;
  outline: none;
  border: none;
  background: transparent;
`

const AnimatedNav = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.first};
`

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16.67% 1rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 16.67% 1rem;
  }
`

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: none;
  box-shadow: none;
  font-size: ${scale(0.375).fontSize};
  line-height: ${scale(1.625).fontSize};
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${scale(0.5).fontSize};
  }
`

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  padding: 0;
  box-shadow: none;
  outline: none;
  border: none;
  background: transparent;
`

// ================================================================================================

const Nav = () => {
  // Context
  const ctx = useContext(AppContext)

  // Animation
  const animation = useSpring({
    transform: ctx.navOpen ? 'translate(0, 0)' : 'translate(0, -100%)',
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar>
          <BurgerBtn onClick={() => ctx.setNavOpen(true)}>
            <Icon name="menu" size="1.0625rem" />
          </BurgerBtn>
        </NavBar>

        <AnimatedNav style={animation}>
          <CloseBtn onClick={() => ctx.setNavOpen(false)}>
            <Icon color="#fff" name="close" size="1rem" />
          </CloseBtn>

          <NavContent>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/imprint">Imprint</NavItem>
          </NavContent>
        </AnimatedNav>
      </>
    </ThemeProvider>
  )
}

// ================================================================================================

export default Nav
