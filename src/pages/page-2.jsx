import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout.jsx'
import SEO from '../components/SEO.jsx'

const SecondPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[]}
      />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
