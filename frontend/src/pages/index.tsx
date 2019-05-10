import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/DefaultLayout'
import Img from 'gatsby-image'

// ================================================================================================

const Home = ({ data }) => (
  <Layout>
    {data.allStrapiArticle.edges.map(article => (
      <div key={article.node.id}>
        <h2>
          <Link to={`/${article.node.id}`}>{article.node.title}</Link>
        </h2>
        <Img fixed={article.node.image.childImageSharp.fixed} />
        <p>{`${article.node.content.substr(0, 100)}...`}</p>
      </div>
    ))}
  </Layout>
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
