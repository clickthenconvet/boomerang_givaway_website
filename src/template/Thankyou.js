import React from 'react';

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Image from "../components/Image";
import SocialNav from '../components/SocialNav';
import Circle from '../images/circles.svg';



export default ({content,bg_img}) => {

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
                                <div className="l-thankyou_desc" dangerouslySetInnerHTML={{ __html: content.desc }}></div>

                                <div className="l-thanyou_share">
                                    <div className="l-thankyou_share_title">Share</div>
                                    <SocialNav/>
                                </div>

                            </div>
                            <div className="col-lg-6 g-flash-padding-both l-thankyou_right">
                                <Image src="thankyou.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}