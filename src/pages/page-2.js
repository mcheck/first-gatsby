import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout siteTitle="Boogers">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" srcSet=""/><br/>
    <Link to="/">Go back to the first page</Link><br/>
    <Link to="/about">About Page</Link>

  </Layout>
)

export default SecondPage
