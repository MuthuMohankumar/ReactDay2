import React from 'react';
import ComponentA from '../ComponentA/ComponentA';

const ComponentB = () => {
    return (
        <>
        <h1 style={{color:"red"}}>Hello</h1>

        <ComponentA />

        </>
    );
};

export default ComponentB;