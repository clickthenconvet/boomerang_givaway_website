import React,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import StepNavigation from '../components/StepNavigation';
import ToggleView from '../components/ToggleView';
import {navigate} from 'gatsby';
import config from "../config.json";

import Loading from "../images/loading.svg"

var formdata = {};

export default () => {

    
    const {register, handleSubmit, errors } = useForm();
    const [stepCount,setStepCount] = useState(0);
    const [formSending,setformSending] = useState(false);
    const [submitError,setsubmitError] = useState(false);


    

    const _submitStep1 = data => {

        setformSending(true);

        formdata = {
            ...data,
            size:'4 Pack',
            campaign_type:'Regular free 4 Pack',
            in_zip_range:'No'
        };
        
        // check for zip code
        if(config.serviceable_zips.indexOf(parseInt(data.zip))!==-1){
            
            setStepCount(1);
        }else{

            const HTMLFormData = new FormData();

            for( var key in formdata ) {
                HTMLFormData.append(key, formdata[key]);
            }

            //send data to google sheet
            fetch(config.google_sheet_url, {
                method: 'POST',
                body: HTMLFormData
            })
            .then(res=>{
                navigate('/thankyou');
            })
            .catch(err=> {
                navigate('/thankyou');
            });
            
        } 

    }

    const _submitStep2 = data => {

        setformSending(true);
        
     
        formdata = {
            ...formdata,
            ...data,
            size:'4 Pack',
            campaign_type:'Regular free 4 Pack',
            in_zip_range:'Yes'
        };

        const HTMLFormData = new FormData();

        for( var key in formdata ) {
            HTMLFormData.append(key, formdata[key]);
        }

        //send data to google sheet
        fetch(config.google_sheet_url, {
            method: 'POST',
            body: HTMLFormData
        })
        .then(res=>{
             navigate('/congratulations');
        })
        .catch(err=> {
            setformSending(false);
            console.log(err)
            setsubmitError(err);
        });

    }
    return (
        <>
            <Layout>
                <SEO title={"Singup For Free Pack"} />
                <div className="l-singup">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-6 l-singup_left">
                            <div className="l-singupForm">
                                <div className="l-singupForm_Title">You're {2-stepCount} steps away from getting your free 4 Pack of Boomerang Water!</div>
                                <div className="l-singupForm_steps">
                                    <StepNavigation 
                                        labels={['Sign Up','Choose best time to Deliver']} 
                                        stepCount={stepCount}
                                    />
                                </div>

                                    
                                <ToggleView show={stepCount===0}>
  


                                    <form onSubmit={handleSubmit(_submitStep1)} className="l-singupForm_form l-singupForm_setp1" noValidate="noValidate">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="name">Name *</label>
                                                    <input id="name" name="name" type="text" ref={register({required: true, minLength:3})} placeholder="Name"/>
                                                    {errors.name && <span className="g-input_error">⚠ Enter first and last names</span>}

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="email">Email *</label>
                                                    <input  placeholder="Email" id="email" name="email" type="email" ref={register({ required: true,pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                                                    {errors.email && <span className="g-input_error">⚠ Valid email address is required</span>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="phone">Phone *</label>
                                                    <input  placeholder="Phone" id="phone" name="phone" type="tel" ref={register({ required: true,pattern: /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g })} />
                                                    {errors.phone && <span className="g-input_error">⚠ Valid phone number is required</span>}
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="address">Address</label>
                                                    <input placeholder="Address" id="address" name="address" type="text" ref={register} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="city">City</label>
                                                    <input placeholder="City" id="city" name="city" type="text" ref={register} />
                                                </div>

                                                <div className="col-6">
                                                    <label htmlFor="state">State</label>
                                                    <input placeholder="State" id="state" name="state" type="text" ref={register} />
                                                </div>
                                            </div>
                                            

    
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="zip">Zip *</label>
                                                    <input 
                                                        id="zip" 
                                                        name="zip"  
                                                        type="number"
                                                        placeholder="Zip"
                                                        ref={register({
                                                            required:true,
                                                            pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/g
                                                        })}     
                                                    />
                                                    {errors.zip && <span className="g-input_error">⚠ Valid Zip is required</span>}
                                                </div>

                                                <div className="col-6">
                                                    <label htmlFor="apartment">Apartment</label>
                                                    <input placeholder="Apartment" id="apartment" name="apartment" type="text" ref={register} />
                                                </div>
                                            </div>

                                            <div className="l-singupForm_form_bottom">

                                                <ToggleView show={formSending}>
                                                    <center>
                                                        <img src={Loading} width="50px"/>
                                                        <p>Processing</p>
                                                    </center>
                                                </ToggleView>

                                                <ToggleView show={!formSending}>
                                                    <input type="submit" className="g-btn" value="Continue"/>
                                                    <p className="l-singupForm_bottomNoCrd">No credit card information is required. </p>
                                                </ToggleView>
                                            </div> 
                                        </form>              
                                </ToggleView>



                                <ToggleView show={stepCount === 1}>
                                    <form onSubmit={handleSubmit(_submitStep2)} className="l-singupForm_form l-singupForm_setp2" noValidate="noValidate">
                                        <div className="row">
                                            <div className="col-12">
                                                <label htmlFor="timetocall">Best Time to Call</label>
                                                <select name="timetocall" id="timetocall" ref={register}>
                                                    <option value="Morning">Morning</option>
                                                    <option value="Afternoon">Afternoon</option>
                                                    <option value="Evening">Evening</option>
                                                    <option value="Night">Night</option>
                                                </select>
                                             </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                            <label htmlFor="timetodeliver">Best Time to Deliver</label>
                                               <select name="timetodeliver" id="timetodeliver" ref={register}>
                                                    <option value="Morning">Morning</option>
                                                    <option value="Afternoon">Afternoon</option>
                                                    <option value="Evening">Evening</option>
                                                    <option value="Night">Night</option>
                                                </select>
                                            
                                            </div>
                                        </div>


                                        <div className="l-singupForm_form_bottom">


                                             <ToggleView show={submitError}>
                                                <center>
                                                    <p className="g-input_error">Please try again later.</p>
                                                </center>
                                             </ToggleView>

                                             <ToggleView show={formSending}>
                                                <center>
                                                    <img src={Loading} width="50px"/>
                                                    <p>Processing</p>
                                                </center>
                                             </ToggleView>

                                              <ToggleView show={!formSending}>
                                                    <input type="submit" className="g-btn" value="Confirm"/>
                                                    <p className="l-singupForm_bottomNoCrd">No credit card information is required. </p>                                        
                                              </ToggleView>

                                         </div>  
                                    </form>

                                </ToggleView>
                            </div>


                        </div>
                        <div className="col-lg-6 g-flash-padding-both l-singup_right">
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}