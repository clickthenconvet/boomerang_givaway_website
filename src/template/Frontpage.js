import React from "react";

import Image from "../components/Image";
import SignupFeature from "../components/SignupFeature";
import ProductFeature from "../components/ProductFeature";
import PollutionStats from "../components/PollutionStats";
import Benefits from "../components/Benefits";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import CTA from "../components/CTA";

import fourthSectionBg from "../images/fourth_section_bg_text_1.svg";


export default ({content,images}) => {

  return(
    <Layout>
      <SEO title="Free 4 Pack" />
      <div className="l-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 l-hero_left">
              <div className="l-hero_left_inner">
                <div><div className="l-hero_title"> {content.hero_section.title}</div></div>
                <div><div className="l-hero_subtitle"> {content.hero_section.subtitle}</div></div>
                <div><div className="l-hero_alert"> {content.hero_section.alert}</div></div>
                <div>
                  <div className="l-hero_left_cta">
                    <CTA title={content.cta.title}/>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="col-lg-6 l-hero_right">
              <Image 
                src={images.hero_feature} 
                className="l-hero_img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> {/* End of l-hero section */}

      <div className="l-second">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 l-second_left">
              <div className="l-second_title">{content.second_section.title}</div>
              {content.second_section.features.map(feature=>
                <SignupFeature 
                  imgSrc={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />)
              }

              <div className="l-second_cta">
                <CTA 
                title={content.cta.title}
                subtitle={content.cta.subtitle}
                />
              </div>

            </div>
            <div className="col-lg-6 l-second_right g-flash-padding-both">
              <Image 
                src={images.second_section_feature}  
                className=""
                alt=""
              />
            </div>
          </div>
        </div>  
      </div> {/* End if second section */}

      <div className="l-third">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 g-flash-padding-both">
              <Image
                src={images.third_section_feature} 
                alt={content.third_section.title}
                className=""
                />
            </div>
            <div className="col-lg-6 l-third_right">
              <div className="l-productFeatures">
                {content.third_section.features.map((feature,i)=>
                  <ProductFeature 
                    bullet={i+1}
                    title={feature.title}
                    desc={feature.desc}
                  />)
                }
              </div>
              
            </div>
          </div>

          <div className="l-third_bottomSubtitle">{content.third_section.bottom_subtitle}</div>
              <div className="l-third_cta">
                <CTA 
                  title={content.cta.title}
                  subtitle={content.cta.subtitle}
                />
              </div>
        </div>
      </div> {/* End of third section */}


      <div className="l-fourth">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 g-flash-padding-both l-fourth_left">

              <div className="l-fourth_left_inner">
                  <div className="l-fourth_title">{content.fourth_section.title}</div>
                  <div 
                    className="l-fourth_desc"
                    dangerouslySetInnerHTML={{__html:content.fourth_section.desc}}>
                  </div>
                  <div className="l-fourth_cta">
                    <CTA 
                      title={content.cta.title}
                      subtitle={content.cta.subtitle}
                      align="left"
                    />
                  </div>
              </div>
              
            </div>
            <div className="col-lg-6 g-flash-padding-both l-fourth_right">
                <div className="l-fourth_bg_1"><img src={fourthSectionBg} alt={content.fourth_section.title}/></div>
                <Image
                  src={images.fourth_section_feature} 
                  className=""
                  alt=""
                />
            </div>
          </div>
        </div>
      </div>  {/* End of fourth section */}

       <div className="l-fifth">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 l-fifth_left">
              <div className="l-fifth_title">{content.fifth_section.title}</div>
              <div className="l-fifth_subtitle">{content.fifth_section.subtitle}</div>
              <PollutionStats stats={content.fifth_section.bullet_points}/>
              
              <div className="l-fifth_cta">
                <CTA 
                  title={content.cta.title}
                  subtitle={content.cta.subtitle}
                />
              </div>
              
            </div>
            <div className="col-lg-6 l-fifth_right  g-flash-padding-both">
              <Image
                  src={images.fifth_section_feature} 
                  className=""
                  alt=""
                />
            </div>
          </div>
        </div>
      </div>{/* End of fifth section */}

      

      <div className="l-sixth">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 l-sixth_left g-flash-padding-both">
              <Image
                  src={images.six_section_feature} 
                  className=""
                  alt=""
                />
            </div>
            <div className="col-lg-6 l-sixth_right">
               <div 
                className="l-sixth_desc" 
                dangerouslySetInnerHTML={{__html:content.sixth_section.desc}}>
              </div>


              <div className="l-sixth_benefits">
                <Benefits benefits={content.sixth_section.bullet_points}/>
              </div>

              <div className="l-sixth_cta">
                <CTA 
                  title={content.cta.title}
                  subtitle={content.cta.subtitle}
                />
              </div>

              
              
            </div>
          </div>
        </div>
      </div>{/* End of sixth section */}

    </Layout>
  );
}

