import React,{useContext} from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Image from "../components/Image";
import SocialNav from '../components/SocialNav';
import Circle from '../images/circles.svg';
import {globalCTX} from '../context/globalCTX';


export default ({content,bg_img}) => {

    const {pagetype$} = useContext(globalCTX);


     const query = useStaticQuery(graphql`{
         site {
            siteMetadata {
                free4Pack{
                    og_title
                    url
                },

                business{
                    og_title,
                    url
                }
            }
        }
     }`);

     const SocialNavMeta = (pagetype$==='b2c') ? query.site.siteMetadata.free4Pack : query.site.siteMetadata.business; 

 

    return (
        <>
            <SEO title={content.title}/>
            <Layout>
                <div className="l-thankyou">
                    <img src={Circle} alt="" className="l-thankyou_bg1"/>
                    <img src={bg_img} alt="" className="l-thankyou_bg2"/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 g-flash-padding-both l-thankyou_left">
                                <div className="l-thankyou_title">{content.title}</div>
                                <div className="l-thankyou_subtitle">{content.subtitle}</div>
                                <div className="l-thankyou_desc" dangerouslySetInnerHTML={{ __html: ((pagetype$==='b2c') ? content.desc : content.business_desc) }}></div>

                                <div className="l-thanyou_share">
                                    <div className="l-thankyou_share_title">Share</div>
                                    <SocialNav siteMetadata={{title:SocialNavMeta.og_title,url:SocialNavMeta.url}} />
                                </div>

                            </div>
                            <div className="col-lg-6 g-flash-padding-both l-thankyou_right">
                                <Image src={(pagetype$==='b2c') ? 'thankyou.jpg' : 'business_thankyou.jpg'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}