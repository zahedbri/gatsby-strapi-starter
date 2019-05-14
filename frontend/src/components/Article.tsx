import Img from 'gatsby-image'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

// Theme:
import theme from '../theme'

// ================================================================================================

export interface ArticleProps {
  excerpt: string
  image: string
  link: string
  title: string
}

// ================================================================================================

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`

const ArticleImage = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex: 0.24;
    margin-bottom: 0;
  }
`

const ArticleContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: flex-start;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    flex: 0.74;
    justify-content: space-between;
  }
`

const ArticleHeadline = styled.h2`
  font-size: 1.125rem;
  text-transform: uppercase;
  margin: 0 0 0.75em;
`

const ReadMore = styled(Link)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.33rem 1rem 0.25rem;

  background-color: ${props => props.theme.colors.third};
  color: #fff;
  font-size: 0.75rem;
  text-transform: uppercase;
`

// ================================================================================================

const Article = ({ excerpt, image, link, title }) => (
  <ThemeProvider theme={theme}>
    <StyledArticle>
      <ArticleImage>
        <Link to={link}>
          <Img
            fluid={
              image && image.childImageSharp && image.childImageSharp.fluid
            }
          />
        </Link>
      </ArticleImage>
      <ArticleContent>
        <div>
          <ArticleHeadline>
            <Link to={link}>{title}</Link>
          </ArticleHeadline>
          <p>{excerpt}</p>
        </div>
        <ReadMore to={link}>Read more</ReadMore>
      </ArticleContent>
    </StyledArticle>
  </ThemeProvider>
)

// ================================================================================================

export default Article
