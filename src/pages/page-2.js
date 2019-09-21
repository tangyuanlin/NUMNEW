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
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
   
    <div className="pic12">
      <Link><Img className="Img1" fluid={props.data.placeholderImage.childImageSharp.fluid} /></Link>

      <Img className="Img2" fluid={props.data.imgFive.childImageSharp.fluid} />
     
      </div>
       

 
    <Link to="/"> <button>Go back to the homepage</button>  </Link>
  </Layout>
  </div>
)

export default SecondPage;



export const pageQuery = graphql`
  query {
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


