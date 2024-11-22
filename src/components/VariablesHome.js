import React from 'react';
import { useNavigate } from 'react-router-dom';

const VariablesHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Variables Stage</h1>
            <button onClick={() => navigate('/variables/text')} style={{ marginRight: '10px' }}>Text Reading</button>
            <button onClick={() => navigate('/variables/video')} style={{ marginRight: '10px' }}>Video Tutorial</button>
            <button onClick={() => navigate('/variables/test')} style={{ marginRight: '10px' }}>Take Test</button>
        </div>
    );
};

export default VariablesHome;
