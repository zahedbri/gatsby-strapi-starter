import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

// Atoms
import Container from '../atoms/Container'

// Components
import Article from '../components/Article'
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
            <Article
              excerpt={`${article.node.content.substr(0, 175)}...`}
              image={article.node.image}
              key={article.node.id}
              link={`/${article.node.id}`}
              title={article.node.title}
            />
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
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  }
`
