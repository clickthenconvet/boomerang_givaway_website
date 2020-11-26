import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import facebook from '../images/social_icons/facebook.svg';
import instagram from '../images/social_icons/instagram.svg';
import linkedin from '../images/social_icons/linkedin.svg';
import twitter from '../images/social_icons/twitter.svg';

export default () => {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                        url
                    }
                }
            }
        `
    );


    return (
        <ul className="m-socialNav">
            <li>
                <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${site.siteMetadata.url}`} 
                    target="_blank"
                    >
                    <img src={linkedin} alt=""/>
                </a>
            </li>
            <li>
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?&u=${site.siteMetadata.url}`}
                    target="_blank"
                    >
                    <img src={facebook} alt=""/>
                </a>
            </li>

            {/* <li>
                <a 
                    href="https://www.instagram.com/?url=https://promo.getboomerangwater.com" 
                    target="_blank"
                    >
                    <img src={instagram} alt=""/>
                </a>
            </li> */}

            <li>
                <a 
                    href={`https://twitter.com/intent/tweet?text=${site.siteMetadata.title}&url=${site.siteMetadata.url}`} 
                    target="_blank"
                    >
                    <img src={twitter} alt=""/>
                </a>
            </li>
        </ul>
    );
}