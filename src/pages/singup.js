import React from 'react';
import { useForm } from "react-hook-form";
import Image from "../components/Image";
import SEO from "../components/Seo";
import Layout from "../components/Layout";


export default () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Layout>
                <SEO title={"Singup For Free Pack"} />
                <div className="l-singup">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-6 l-singup_left">
                            <div className="l-singupForm">
                                <div className="l-singupForm_Title">You're 2 steps away from getting your free 4 Pack of Boomerang Water!</div>
                                <div className="l-singupForm_Steps">

                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="l-singupForm_form">
                                    
                                    <div className="row">
                                        <div className="col-12">
                                            <label htmlFor="name">Name</label>
                                            <input id="name" name="name" type="text" ref={register({ required: true })} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" name="email" type="email" ref={register({ required: true })} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <label htmlFor="phone">Phone</label>
                                            <input id="phone" name="phone" type="phone" ref={register({ required: true })} />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-12">
                                            <label htmlFor="address">Address</label>
                                            <input id="address" name="address" type="text" ref={register} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="city">City</label>
                                            <input id="city" name="city" type="text" ref={register} />
                                        </div>

                                         <div className="col-6">
                                            <label htmlFor="state">State</label>
                                            <input id="state" name="state" type="text" ref={register} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="zip">Zip</label>
                                            <input id="zip" name="zip"  type="text" ref={register} />
                                        </div>

                                         <div className="col-6">
                                            <label htmlFor="apartment">Apartment</label>
                                            <input id="apartment" name="apartment" type="text" ref={register} />
                                        </div>
                                    </div>


                                    <div className="l-singupForm_form_bottom">
                                        <input type="submit" className="g-btn" value="Continue"/>
                                        <p className="l-singupForm_bottomNoCrd">No credit card information is required. </p>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                </form>
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