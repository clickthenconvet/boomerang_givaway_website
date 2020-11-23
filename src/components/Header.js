import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Image from "../components/Image";
export default () => {

  const data = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
      }
    }

    logo: file(relativePath: {eq: "logo_white.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`);

  return(
    <header className="l-header">
      
        <Image 
          src="logo_white.png" 
          className="l-header_logo"
          alt={data.site.siteMetadata.title}
        />
    </header>
  );
  
}

