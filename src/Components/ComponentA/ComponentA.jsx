import React from 'react';
import "./ComponentA.css"

const ComponentA = () => {
    const submit=()=>{
        alert("Say Hello");
    }

    return (
        <>
        <h1 className='heading'>Hi</h1>
        <button onClick={submit} className='submit'>Hi</button>
        
        </>
    );
};

export default ComponentA;