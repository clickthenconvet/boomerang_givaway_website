import React,{useContext,useEffect} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from "../components/Seo";
import Frontpage from '../template/Frontpage';

import {globalCTX} from '../context/globalCTX';

export default () => {

    const {setPageType$} = useContext(globalCTX);

    const images = {
        hero_feature: "pack.png",
        second_section_feature:"second_feature.jpg",
        third_section_feature:"third_feature.jpg",
        fourth_section_feature:"fourth_feature.jpg",
        fifth_section_feature:"planet_saver.jpg",
        six_section_feature:"sixth_feature.jpg",
    }

    const query = useStaticQuery(graphql`{

        site {
            siteMetadata {
                free4Pack{
                    title
                    description
                    url,
                    og_image
                }
            }
        }

        content:allFile(filter: {relativePath: {eq: "free_4_pack.yaml"}}) {
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
                    }

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
        
        setPageType$('b2c')

    },[]);


    return(

        <>
            <SEO 
                title={query.site.siteMetadata.free4Pack.title} 
                desc={query.site.siteMetadata.free4Pack.description}
                url={query.site.siteMetadata.free4Pack.url}
                ogImage={query.site.siteMetadata.free4Pack.og_image}
            />
            <Frontpage 
                content={query.content.nodes[0].childContentYaml} 
                images={images}
            />
        </>
    );
}