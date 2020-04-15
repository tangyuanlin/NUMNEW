import React from "react"
import { Link,graphql} from "gatsby"
import "../style/IndexPage.css"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <div className="bg">
    <Layout> 


      <div className="bigbgc"> </div>
      <SEO title="Home" />
      <div className='bgc'></div>

     <h2 className="welcom">Welcome to NUM Design</h2>
     <p className="huanyin">欢 迎 来 到 楠 木 设 计</p>
     

       <Link  to="page-2">
         <div className='cardapp'> 
           <Img className="P1img1" fluid={props.data.catliteImage.childImageSharp.fluid} /> 
         </div>
       </Link>

       <Link  to="page-3">
         <div className='cardapp2'> 
           <Img className="P1img2" fluid={props.data.NUUUMImage.childImageSharp.fluid} /> 
         </div>
       </Link>

        {/* <Link to="page-2"> <div className='cardapp2'> app </div></Link>
      
       <div className='cardapp3'> app </div>         
       <div className='cardapp4'> app </div>  */}

  

    </Layout>
  </div>
)

export default IndexPage



export const pageQuery = graphql`
  query {

    catliteImage: file(relativePath: { eq: "catLite.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }


    NUUUMImage: file(relativePath: { eq: "NUUUM.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }



  }
`;


