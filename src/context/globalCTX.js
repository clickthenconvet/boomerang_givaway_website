import React, { useState } from 'react';
export const globalCTX = React.createContext({});

export default  props => {
  const [pagetype$, setPageType$] = useState(localStorage.getItem('pagetype') || sessionStorage.pagetype);
  const _setPageType$ = (type)=>{
    
    localStorage.setItem('pagetype',type);
    sessionStorage.pagetype = type;
    setPageType$(type);
  }
  
  
  return (
    <globalCTX.Provider value={{pagetype$, setPageType$:_setPageType$}}>
      {props.children}
    </globalCTX.Provider>
  )
};