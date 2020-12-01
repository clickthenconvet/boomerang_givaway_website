import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Thankyou from '../template/Thankyou';
import img_Thankyou from '../images/thankyou.svg';

export default () => {

    const query = useStaticQuery(graphql`{
        content:allFile(filter: {relativePath: {eq: "thankyou.yaml"}}) {
            nodes {
                childContentYaml {
                    title,
                    subtitle,
                    desc,
                    business_desc
                }
            }
        }
    }`);

    console.log(query.content.nodes[0].childContentYaml);
    return (
        <>
            <Thankyou content={query.content.nodes[0].childContentYaml} bg_img={img_Thankyou}/>
        </>
    );
}