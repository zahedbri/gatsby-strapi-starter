import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout/DefaultLayout'

// ================================================================================================

const Article = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{' '}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

// ================================================================================================

export default Article

// ================================================================================================

export const query = graphql`
  query Article($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
