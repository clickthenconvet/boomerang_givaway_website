import React from 'react';
import Image from '../components/Image';

export default ({imgSrc,title,desc}) => {
    return (
        <>
            <div className="m-signupFeature">
                <div className="m-signupFeature_left">
                    <Image
                        src={imgSrc}
                        className="m-signupFeature_img"
                        alt="title"
                        />
                </div>
                <div className="m-signupFeature_right">
                    <div className="m-signupFeature_title">{title}</div>
                    <div className="m-signupFeature_desc">{desc}</div>
                </div>
            </div>             
        </>
    );
}