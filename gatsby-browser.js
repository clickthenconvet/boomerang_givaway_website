import React from "react"
import './src/styles/main.scss';

import GlobalCTXProvider from "./src/context/globalCTX";

export const wrapRootElement = ({ element }) => {

    return (
        <>
            <GlobalCTXProvider>{element}</GlobalCTXProvider>
        </>
    )
}