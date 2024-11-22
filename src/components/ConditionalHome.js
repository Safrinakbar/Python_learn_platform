import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConditionalHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Conditional Statements Stage</h1>
            <button onClick={() => navigate('/conditional/text')}>Text Reading</button>
            <button onClick={() => navigate('/conditional/video')}>Video Tutorial</button>
            <button onClick={() => navigate('/conditional/test')}>Take Test</button>
        </div>
    );
};

export default ConditionalHome;
