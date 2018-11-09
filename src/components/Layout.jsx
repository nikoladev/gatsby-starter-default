import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header.jsx'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      const title = data.site.siteMetadata.title
      return (
        <React.Fragment>
          <Helmet
            title={title}
            meta={[
              {
                name: 'description',
                content: 'Sample',
              },
              {
                name: 'keywords',
                content: 'sample, something',
              },
            ]}
          >
            <html
              lang='en'
            />
          </Helmet>
          <Header
            siteTitle={title}
          />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
