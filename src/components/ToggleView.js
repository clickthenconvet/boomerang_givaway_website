import React from 'react';

export default (props) => {
    return (
        <>
            {props.show && props.children}
        </>
    );
}