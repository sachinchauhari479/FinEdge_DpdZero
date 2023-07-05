import React from 'react'
import Layout from '../component/Layout/Layout'
import '../styles/pagenotfound.css'
const Pagenotfound = () => {
  return (
    <Layout>
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    </Layout>
  )
}

export default Pagenotfound