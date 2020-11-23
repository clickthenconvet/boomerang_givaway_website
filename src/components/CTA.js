import React from 'react';

export default ({title,subtitle}) => {
    return (
        <>
            <div className="m-cta">
                <input type="button" value={title} className="m-cta_btn"/>
                {subtitle && <div className="m-cta_subtitle">{subtitle}</div>}
            </div>

        </>
    );
}