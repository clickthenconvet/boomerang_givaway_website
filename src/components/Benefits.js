import React from 'react';
import checkmark from '../images/mdi_check_circle_outline.svg';

export default ({benefits}) => {
    return (
        <ul className="m-benfits">
            {
                benefits.map(point=>
                    <li className="m-benfit">
                        <div className="m-benfit_left"><img src={checkmark} alt=""/></div>
                        <div className="m-benfit_right">{point}</div>
                    </li>
                )
            }
        </ul>
    );
}