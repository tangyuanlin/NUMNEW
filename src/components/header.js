import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/header.css"

const Header = ({ siteTitle }) => (
  <header>
     <Link className="titile1" to="/">
       
         NUM Design
   
     </Link>
  

  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
