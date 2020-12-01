import React,{useContext} from "react";
import { useStaticQuery,graphql,Link } from 'gatsby';
import Image from "../components/Image";

import {globalCTX} from '../context/globalCTX';

export default () => {

  const {pagetype$} = useContext(globalCTX);
  const URL = (pagetype$ === 'b2b') ? '/business' : '/';



  return(
    <header className="l-header">

      <Link to={URL}>
        <Image 
          src="logo_white.png" 
          className="l-header_logo"
          alt=""
        />
      </Link>
        
    </header>
  );
  
}

