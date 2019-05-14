import React, { useState, useCallback } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'

// Atoms:
import Icon from '../atoms/Icon'

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

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
`

const H2 = styled.h2`
  color: #fff;
  text-shadow: none;
  margin: 0 0 0.25em;
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;
`

const P = styled.p`
  font-size: 1.125rem;
  margin: 0;
  font-weight: 400;
  text-align: center;
`

// ================================================================================================

const Slide = ({ headline, image, text }: SlideProps) => (
  <StyledSlide image={image}>
    <SlideContent>
      <H2>{headline}</H2>
      <P>{text}</P>
    </SlideContent>
  </StyledSlide>
)

// ================================================================================================

const Slideshow = () => {
  // Slides data
  const slides = [
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Consectetuer elit"
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Lorem Ipsum"
          image="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Slide
          headline="Dolor sit et"
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
