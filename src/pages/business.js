import React,{useContext,useEffect} from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from "../components/Seo";
import Frontpage from '../template/Frontpage';
import {globalCTX} from '../context/globalCTX';


export default () => {


    const {setPageType$} = useContext(globalCTX);
    const images = {
        hero_feature: "businesshero_feature.png",
        second_section_feature:"business_second_feature.jpg",
        third_section_feature:"business_thrid_feature.jpg",
        fourth_section_feature:"fourth_feature.jpg",
        fifth_section_feature:"business_fifth_feature.jpg",
        six_section_feature:"business_six_feature.jpg",
    }

    const query = useStaticQuery(graphql`{
        site {
            siteMetadata {
                business{
                    title
                    description
                    url,
                    og_image
                }
            }
        }
        content:allFile(filter: {relativePath: {eq: "business.yaml"}}) {
            nodes {
                childContentYaml {
                    cta{
                        title,
                        subtitle
                    }
                    hero_section {
                        title
                        subtitle
                        alert
                    }

                    second_section{
                        title,
                        features{
                            img,
                            title,
                            desc
                        } 
                    }

                    third_section{
                        title,
                        bottom_subtitle,
                        features{
                            title,
                            desc
                        } 
                    }

                    fourth_section{
                        title,
                        desc
                    }

                    fifth_section{
                        title,
                        title_left,
                        subtitle,
                        bullet_points{
                            sine,
                            value,
                            title,
                        }
                    }
                    sixth_section{
                        title,
                        desc,
                        bullet_points
                    },
                    exit_popup{
                        img
                        title,
                        desc
                    }
                }
            }
        }
    }`);

    useEffect(()=>{
        
        setPageType$('b2b')

    },[]);
    return (
        <>
            <SEO 
                title={query.site.siteMetadata.business.title} 
                desc={query.site.siteMetadata.business.description}
                url={query.site.siteMetadata.business.url}
                ogImage={query.site.siteMetadata.business.og_image}
            />
            <Frontpage content={query.content.nodes[0].childContentYaml} images={images}/>
        </>
    );
}