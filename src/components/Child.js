import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
    return (
        <div>
            <h1>I'm the child component.</h1>
            <GrandChild></GrandChild>
        </div>
    );
};

export default Child;