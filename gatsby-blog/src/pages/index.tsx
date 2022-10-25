import * as React from "react";
import type { HeadFC } from "gatsby";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

export default ({data} : {data: any}) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Yihua's Thoughts
      </h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </main>
  );
};

export const Head: HeadFC = () => <title>Home</title>;

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          description
          title
          date
        }
        html
      }
    }
  }
}
`;
