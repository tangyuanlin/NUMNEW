import React from "react"
import { Link } from "gatsby"
import "../style/SecondPage.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <div className="scbg">
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/"> <button>Go back to the homepage</button>  </Link>
  </Layout>
  </div>
)

export default SecondPage
