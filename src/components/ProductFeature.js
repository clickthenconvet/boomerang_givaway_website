import React from 'react';

export default ({bullet,title,desc}) => {
    return (
        <>
            <div className="m-productFeature">
                <div className="m-productFeature_left">
                    <div className="m-productFeature_bullet">{bullet}</div>
                </div>
                <div className="m-productFeature_right">
                    <div className="m-productFeature_title">{title}</div>
                    <div className="m-productFeature_desc">{desc}</div>
                </div>
            </div>             
        </>
    );
}