import React from 'react'
import styled from 'styled-components'

// ================================================================================================

export interface ContainerProps {
  children: any
  fluid?: boolean
}

// ================================================================================================

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => (props.fluid ? 'none' : '1140px')};
  padding: 0 1rem;
  margin: 0 auto;
`

// ================================================================================================

const Container = ({ children, fluid }: ContainerProps) => (
  <StyledContainer fluid={fluid}>{children}</StyledContainer>
)

// ================================================================================================

export default Container
