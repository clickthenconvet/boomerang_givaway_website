import React, { useContext} from 'react';
import Button from '../components/Button';
import { globalCTX } from '../context/globalCTX';
import useFbq from '../hooks/useFbq';


export default ({title,subtitle}) => {
    const fbq = useFbq();


    const { pagetype$ } = useContext(globalCTX);


    const triggerCta = ()=>{

        fbq("InitiateSignup", {
            type: pagetype$,
         
        });

    };

    return (
        <div className="m-cta" onClick={triggerCta}>
            <Button title={title} link="/signup"/>
            {subtitle && <div className="m-cta_subtitle">{subtitle}</div>}
        </div>
    );
}