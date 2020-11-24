import React from 'react';

export default ({title,subtitle}) => {
    return (
        <>
            <div className="m-cta">
                <a href="" className="g-btn">{title}</a>
                {subtitle && <div className="m-cta_subtitle">{subtitle}</div>}
            </div>

        </>
    );
}