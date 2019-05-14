import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { ThemeProvider } from 'styled-components'

// Atoms
import Container from '../atoms/Container'

// Components
import Slideshow from '../components/Slideshow'

// Layout
import Layout from '../layout/DefaultLayout'

// Theme
import theme from '../theme'

// ================================================================================================

const Section = styled.section`
  padding: 2rem 0;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 3rem 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    padding: 4rem 0;
  }
`

// ================================================================================================

const Home = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Slideshow />

      <Section>
        <Container>
          {data.allStrapiArticle.edges.map(article => (
            <div key={article.node.id}>
              <h2>
                <Link to={`/${article.node.id}`}>{article.node.title}</Link>
              </h2>
              <Img fixed={article.node.image.childImageSharp.fixed} />
              <p>{`${article.node.content.substr(0, 100)}...`}</p>
            </div>
          ))}
        </Container>
      </Section>
    </Layout>
  </ThemeProvider>
)

// ================================================================================================

export default Home

// ================================================================================================

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          content
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
        }
      }
    }
  }
`
