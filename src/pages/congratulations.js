import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Thankyou from '../template/Thankyou';
import img_Congratulations from '../images/congratulations.svg';
export default () => {

    const query = useStaticQuery(graphql`{
        content:allFile(filter: {relativePath: {eq: "congratulations.yaml"}}) {
            nodes {
                childContentYaml {
                    title,
                    subtitle,
                    desc
                }
            }
        }
    }`);
    return (
        <>
            <Thankyou content={query.content.nodes[0].childContentYaml} bg_img={img_Congratulations}/>
        </>
    );
}