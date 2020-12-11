import React,{useEffect} from "react";

import Image from "../components/Image";
import SignupFeature from "../components/SignupFeature";
import ProductFeature from "../components/ProductFeature";
import PollutionStats from "../components/PollutionStats";
import Benefits from "../components/Benefits";
import Layout from "../components/Layout";
import CTA from "../components/CTA";

import fourthSectionBg from "../images/fourth_section_bg_text_1.svg";
import close from "../images/close.svg";

export default ({content,images,location}) => {
  
 
  useEffect(()=>{

    var eventTrigerd = false;

    const openExitPopUp = ()=>{
      eventTrigerd = true;
      document.querySelector('.m-exitPopup') && (document.querySelector('.m-exitPopup').style.display = 'block');
    }
    
    const closeExitPopUp = ()=>{
      document.querySelector('.m-exitPopup').style.display = 'none';
    
    }
    
    function mouseOutListner(event){
      if (!event.toElement && !event.relatedTarget) {
        setTimeout(() => {
          
          if(!eventTrigerd){
            
            openExitPopUp()
          }
        }, 1000)
      }
    }
    
    function scrollListner(){
      let scrollPercentage = Math.round((window.scrollY / (document.body.offsetHeight-window.innerHeight)*100));
      
      
      if(scrollPercentage === 95){
        setTimeout(()=>{
          !eventTrigerd && openExitPopUp();
        },15000)
      }
      
    }
    
    //exit popup open event
    setTimeout(()=>{
      document.addEventListener("mouseout",mouseOutListner);
    },25000);
    
    window.addEventListener('scroll',scrollListner);
    
    
    const timeoutEvent = setTimeout(()=>{
      
      !eventTrigerd && openExitPopUp();
    },20000)
    


    
    
    //exit popup close event
    document.querySelector('.m-exitPopup_close').addEventListener('click',()=>closeExitPopUp());
    
    return ()=>{
      document.removeEventListener('mouseout',mouseOutListner);
      window.removeEventListener('scroll',scrollListner);
      clearTimeout(timeoutEvent);
    }

  },[]);

  return(
    <>
      <div className="m-exitPopup">
        <div className="l-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 m-exitPopup_left">
                  <div className="m-exitPopup_left_img"> <Image src={images.hero_feature} /></div>
                  <div className="m-exitPopup_title">{content.exit_popup.title}</div>
                  <div className="m-exitPopup_desc">{content.exit_popup.desc}</div>
                  <div className="m-exitPopup_cta">
                   <CTA title={content.cta.title} subtitle={content.cta.subtitle}/>
                  </div>
              </div>
              <div className="col-lg-6 m-exitPopup_right">
                <div className="m-exitPopup_close"><img src={close} alt=""/></div>
                <Image src={images.hero_feature} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout>
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

              <div className="l-third_bottomSubtitle">{content.third_section.bottom_subtitle}</div>
              <div className="l-third_cta">
                <CTA 
                  title={content.cta.title}
                  subtitle={content.cta.subtitle}
                />
              </div>
                
              </div>
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
                    className="l-fourth_section_feature"
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
    </>
  );
}

