import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"

// ================================================================================================

const Home = ({ data }) => (
  <Layout>
    <h1>Welcome</h1>

    {data.allStrapiArticle.edges.map(article => (
      <div key={article.node.id}>
        <h2>
          <Link to={`/${article.node.id}`}>{article.node.title}</Link>
        </h2>
        <Img
          fixed={article.node.image.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
        />
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
