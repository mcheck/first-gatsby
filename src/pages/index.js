import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from 'react-emotion';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1 className={css`
            display: inline-block;
            border-bottom: 1px solid red;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>
          {data.allMarkdownRemark.totalCount}
          {' '}
          Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}
              {' '}
              <span className={css`
              color: #999;
              `}
              >
                —
                {' '}
                {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <h1>
        yo peeps
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/pokemons/">List of Pokemons</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
