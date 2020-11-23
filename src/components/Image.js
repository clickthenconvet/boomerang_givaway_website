import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery,graphql} from 'gatsby';

export default (props) => {

    const data = useStaticQuery(graphql`{
        images:allImageSharp{
            nodes {
                fluid{
                    originalName,
                    ...GatsbyImageSharpFluid
                }
            }
        }
        
    }`);


   

    return <Img fluid={data.images.nodes.find(i=>i.fluid.originalName===props.src).fluid} {...props}/>;
}