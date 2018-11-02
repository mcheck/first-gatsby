import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <div style={{ color: 'red' }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React</p>
      <Link to="/">Go to the front page</Link>
    </div>
  </Layout>
);

export default AboutPage;
