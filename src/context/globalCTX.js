import React, { useState } from 'react';
export const globalCTX = React.createContext({});

export default  props => {
  const [pagetype$, setPageType$] = useState(window.localStorage.getItem('pagetype') || window.sessionStorage.pagetype || 'b2c');
  const _setPageType$ = (type)=>{
    window.localStorage.setItem('pagetype',type);
    window.sessionStorage.pagetype = type;
    setPageType$(type);
  }
  
  
  return (
    <globalCTX.Provider value={{pagetype$, setPageType$:_setPageType$}}>
      {props.children}
    </globalCTX.Provider>
  )
};