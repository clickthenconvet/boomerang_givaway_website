import React from 'react';

export default ({labels,stepCount}) => {
    return (
        <>
            <ul className="m-stepNavigation">
                {labels.map((label,index)=>
                    <li key={index} className={(stepCount == index) && 'active'}>
                        <span className="m-stepNavigation_bullet">{index+1}</span>
                        <span className="m-stepNavigation_label">{label}</span>
                    </li>
                )}
            </ul>
        </>
    );
}