import React from "react"
import { Link,graphql} from "gatsby"
import Image from "../components/image"
import Img from "gatsby-image"
import "../style/SecondPage.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props  => (
  <div className="scbg">
  <Layout>
    <SEO title="Page two" />
    <h1 className="p2h1">Hi , from the Cat & moon</h1>
    <p className="p2p1">Welcome to page 2</p>
   
    <Img className="Img2" fluid={props.data.catImage.childImageSharp.fluid} /> 
    <Link></Link>
    
   
    <div className="pic12">

      {/* <Img fluid={props.data.catImage.childImageSharp.fluid} /> */}

      {/* <Link><Img className="Img1" fluid={props.data.placeholderImage.childImageSharp.fluid} /></Link> */}

      
      </div>
       

 
    <Link to="/"> <button>Go back to the homepage</button>  </Link>
  </Layout>
  </div>
)

export default SecondPage;



export const pageQuery = graphql`
  query {

    catImage: file(relativePath: { eq: "catImage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    imgFive: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    placeholderImage: file(relativePath: { eq: "IMG6782.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  }
`;


