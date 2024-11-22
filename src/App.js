import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/home';
import VariablesHome from './components/VariablesHome';
import ConditionalHome from './components/ConditionalHome';
import VariablesText from './components/VariablesText';
import ConditionalText from './components/ConditionalText';
import AuthProvider from './components/context/AuthContext';
import VariablesVideo from './components/VariablesVideo';
import VariablesQuiz from './components/VariablesQuize';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/variables-home" element={<VariablesHome />} />
                    <Route path="/variables/text" element={<VariablesText />} />
                    <Route path="/variables/video" element={<VariablesVideo />} />
                    <Route path="/conditional-home" element={<ConditionalHome />} />
                    <Route path="/conditional/text" element={<ConditionalText />} />
                    <Route path="/variables/test" element={<VariablesQuiz />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
