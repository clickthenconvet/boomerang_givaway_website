import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Image from "../components/Image";
import SignupFeature from "../components/SignupFeature";
import ProductFeature from "../components/ProductFeature";
import PollutionStats from "../components/PollutionStats";
import Benefits from "../components/Benefits";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import CTA from "../components/CTA";


export default () => {


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


  
  return(
    <Layout>
      <SEO title="Free 4 Pack" />
      
      <div className="l-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 l-hero_left">
              <div className="l-hero_left_inner">
                <div><div className="l-hero_title"> {data.pageContent.hero_section.title}</div></div>
                <div><div className="l-hero_subtitle"> {data.pageContent.hero_section.subtitle}</div></div>
                <div><div className="l-hero_alert"> {data.pageContent.hero_section.alert}</div></div>
                <div>
                  <div className="l-hero_left_cta">
                    <CTA title={data.pageContent.cta.title}/>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="col-lg-6 l-hero_right">
              <Image 
                src="pack.png" 
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
              <div className="l-second_title">{data.pageContent.second_section.title}</div>
              {data.pageContent.second_section.features.map(feature=>
                <SignupFeature 
                  imgSrc={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />)
              }

              <div className="l-second_cta">
                <CTA 
                title={data.pageContent.cta.title}
                subtitle={data.pageContent.cta.subtitle}
                />
              </div>

            </div>
            <div className="col-lg-6 l-second_right g-flash-padding-both">
              <Image 
                src="dilvery_box_1.png" 
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
                src="boost.png"
                alt={data.pageContent.third_section.title}
                className=""
                />
            </div>
            <div className="col-lg-6 l-third_right">
              <div className="l-productFeatures">
                {data.pageContent.third_section.features.map((feature,i)=>
                  <ProductFeature 
                    bullet={i+1}
                    title={feature.title}
                    desc={feature.desc}
                  />)
                }
              </div>
              
            </div>
          </div>

          <div className="l-third_bottomSubtitle">{data.pageContent.third_section.bottom_subtitle}</div>
              <div className="l-third_cta">
                <CTA 
                  title={data.pageContent.cta.title}
                  subtitle={data.pageContent.cta.subtitle}
                />
              </div>
        </div>
      </div> {/* End of third section */}


      <div className="l-fourth">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 g-flash-padding-both l-fourth_left">

              <div className="l-fourth_left_inner">
                  <div className="l-fourth_title">{data.pageContent.fourth_section.title}</div>
                  <div 
                    className="l-fourth_desc"
                    dangerouslySetInnerHTML={{__html:data.pageContent.fourth_section.desc}}>
                  </div>
                  <div className="l-fourth_cta">
                    <CTA 
                      title={data.pageContent.cta.title}
                      subtitle={data.pageContent.cta.subtitle}
                      align="left"
                    />
                  </div>
              </div>
              
            </div>
            <div className="col-lg-6 g-flash-padding-both l-fourth_right">
                <Image
                  src="cleaner.png"
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
              <div className="l-fifth_title">{data.pageContent.fifth_section.title}</div>
              <div className="l-fifth_subtitle">{data.pageContent.fifth_section.subtitle}</div>
              <PollutionStats stats={data.pageContent.fifth_section.bullet_points}/>
              
              <div className="l-fifth_cta">
                <CTA 
                  title={data.pageContent.cta.title}
                  subtitle={data.pageContent.cta.subtitle}
                />
              </div>
              
            </div>
            <div className="col-lg-6 l-fifth_right  g-flash-padding-both">
              <Image
                  src="planet_saver.jpg"
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
                  src="healthier.png"
                  className=""
                  alt=""
                />
            </div>
            <div className="col-lg-6 l-sixth_right">
               <div 
                className="l-sixth_desc" 
                dangerouslySetInnerHTML={{__html:data.pageContent.sixth_section.desc}}>
              </div>


              <div className="l-sixth_benefits">
                <Benefits benefits={data.pageContent.sixth_section.bullet_points}/>
              </div>

              <div className="l-sixth_cta">
                <CTA 
                  title={data.pageContent.cta.title}
                  subtitle={data.pageContent.cta.subtitle}
                />
              </div>

              
              
            </div>
          </div>
        </div>
      </div>{/* End of sixth section */}

    </Layout>
  );
}

