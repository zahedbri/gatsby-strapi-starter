import Img from 'gatsby-image'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link, graphql } from 'gatsby'

// Atoms:
import Container from '../atoms/Container'

// Layout:
import Layout from '../layout/DefaultLayout'

// Theme:
import theme from '../theme'

// ================================================================================================

const ArticleContent = styled.article`
  clearfix: left;
  margin-bottom: 4rem;
`

const StyledImg = styled(Img)`
  width: 33%;
  height: auto;

  float: left;

  margin: 0 2rem 1rem 0;
`

const ArticleBackBtn = styled(Link)`
  font-size: 0.675rem;
  color: ${props => props.theme.colors.third};
  text-transform: uppercase;
`

const ArticleHeadline = styled.h1`
  margin: 1.5rem 0 1rem;
`

// ================================================================================================

const Article = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Container>
        <p>{data.strapiPage.title}</p>
      </Container>
    </Layout>
  </ThemeProvider>
)

// ================================================================================================

export default Article

// ================================================================================================

export const query = graphql`
  query Homepage(
    allStrapiPage(
      filter: {
        id: { eq: "Page_1" }
      }
    ) {
      edges {
        node {
          id
          title
        }
      }
    }
  )
`
