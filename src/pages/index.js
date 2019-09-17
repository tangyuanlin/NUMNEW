import React from "react"
import { Link } from "gatsby"
import "../style/IndexPage.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="bg">
    <Layout> 
    

        {/* < Image></Image> */}
        {/* <Link to="./404.js"></Link> */}


      <div className="bigbgc"> </div>
      <SEO title="Home" />
      <div className='bgc'></div>

     <h2 className="welcom">Welcome to NUM Design</h2>
     <p className="huanyin">欢 迎 来 到a 楠 木 设 计</p>

     <Link  to="page-2"><div className='cardapp'> app </div></Link>
        <Link to="page-2"> <div className='cardapp2'> app </div></Link>
      
       <div className='cardapp3'> app </div>         
       <div className='cardapp4'> app </div> 

  

    </Layout>
  </div>
)

export default IndexPage
