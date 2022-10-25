import * as React from "react"
import { Link, HeadFC, graphql } from "gatsby"
import { headingStyles, pageStyles } from "../pages"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  )
}

export const Head: HeadFC = () => <title>Blog Post</title>

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
