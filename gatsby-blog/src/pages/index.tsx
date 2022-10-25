import * as React from "react"
import { HeadFC, Link } from "gatsby"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

export const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
export const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

export default ({ data }: { data: any }) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Yihua's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <div key={node.id}>
          <h3>
            <Link to={node.fields.slug}> {node.frontmatter.title} </Link>
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </main>
  )
}

export const Head: HeadFC = () => <title>Home</title>

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            description
            title
            date
          }
        }
      }
    }
  }
`
