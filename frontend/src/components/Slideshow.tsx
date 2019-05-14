import React, { useContext, useState, useCallback } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'

// Atoms:
import Icon from '../atoms/Icon'

// Context:
import AppContext from '../context/AppContext'

// Theme:
import theme from '../theme'

// Utils:
import { scale } from '../utils/typography'

// ================================================================================================

export interface SlideProps {
  headline?: string
  image?: string
  text?: string
}

// ================================================================================================

const StyledSlideshow = styled.div`
  position: relative;
  height: ${props => props.theme.sizes.stage};

  > div {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    font-size: 25em;
    will-change: transform, opacity;
    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  }
`

const StyledSlide = styled.div<SlideProps>`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  :after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }
`

const SlideContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 50%;
  }
`

const H2 = styled.h2`
  padding: 8% 4%;
  margin: 0 0 0.25em;

  color: #fff;
  text-shadow: none;
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;

  border: 2px solid #fff;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 2% 4%;
  }
`

const P = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  text-align: center;
`

// ================================================================================================

const Slide = ({ headline, image, text }: SlideProps) => {
  const ctx = useContext(AppContext)

  return (
    <StyledSlide image={image}>
      <SlideContent>
        <H2>{headline}</H2>
        {ctx.screenSizes.md && <P>{text}</P>}
      </SlideContent>
    </StyledSlide>
  )
}

// ================================================================================================

const Slideshow = () => {
  // Slides data
  const slides = [
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Lorem ipsum"
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula et dolore."
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Consect etuere"
          image="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Dolore amet"
          image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        />
      </animated.div>
    ),
  ]

  // Animation
  const [slide, setSlide] = useState(0)
  const onClick = useCallback(() => setSlide(s => (s + 1) % 3), [])
  const transitions = useTransition(slide, s => s, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  // ============================================

  return (
    <ThemeProvider theme={theme}>
      <StyledSlideshow onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const CurrentSlide = slides[item]
          return <CurrentSlide key={key} style={props} />
        })}
      </StyledSlideshow>
    </ThemeProvider>
  )
}

// ================================================================================================

export default Slideshow
