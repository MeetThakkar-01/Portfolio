import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
  <main className="error-page">
    <h1>Page Not Found</h1>
    <Link to='/' className='btn'> Home </Link>
  </main>
  </Layout>

}

export default Error
