import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import facebook from '../images/social_icons/facebook.svg';
import linkedin from '../images/social_icons/linkedin.svg';
import twitter from '../images/social_icons/twitter.svg';

export default ({siteMetadata}) => {

    


    return (
        <ul className="m-socialNav">
            <li>
                <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteMetadata.url}`} 
                    target="_blank"
                >
                <img src={linkedin} alt=""/>
                </a>
            </li>
            <li>
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?&u=${siteMetadata.url}`}
                    target="_blank"
                >
                <img src={facebook} alt=""/>
                </a>
            </li>

            <li>
                <a 
                    href={`https://twitter.com/intent/tweet?text=${siteMetadata.title}&url=${siteMetadata.url}`} 
                    target="_blank"
                >
                <img src={twitter} alt=""/>
                </a>
            </li>
        </ul>
    );
}