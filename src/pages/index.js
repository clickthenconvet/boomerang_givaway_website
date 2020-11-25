import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Frontpage from '../template/Frontpage';

export default () => {
    const images = {
        hero_feature: "pack.png",
        second_section_feature:"second_feature.jpg",
        third_section_feature:"third_feature.jpg",
        fourth_section_feature:"fourth_feature.jpg",
        fifth_section_feature:"planet_saver.jpg",
        six_section_feature:"sixth_feature.jpg",
    }
    const data = useStaticQuery(graphql`{
        pageContent:contentYaml {

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
        }
    }`);


    return <Frontpage content={data.pageContent} images={images}/>;
}