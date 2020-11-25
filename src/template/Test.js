import React from 'react';
import Image from '../components/Image';

export default ({content,images}) => {
    return (
        <>
            <h1>{content.cta.title}</h1>
            <p>{content.cta.subtitle}</p>
            <Image src={images.hero_img}/>
        </>
    );
}