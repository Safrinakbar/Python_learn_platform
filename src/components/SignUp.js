import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';  // Import SweetAlert2
import './SignUp.css';

export default function SignUp() {
    const { setUser, signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false); // Loading state

    const navigate = useNavigate();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    async function handleSignUp() {

        // Validate email
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is required.',
            });
            return;
        } else if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email address.',
            });
            return;
        }

        // Validate password
        if (!password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is required.',
            });
            return;
        } else if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters.',
            });
            return;
        }

        setIsSigningUp(true); // Set loading state to true

        // Attempt sign-up
        try {
            const userCredentials = await signUp(email, password);
            setUser(userCredentials.user.uid);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Sign up successful! Please log in.',
            });
            navigate('/login'); // Redirect to login page after successful sign-up
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User already exists. Please try again.',
            });
        } finally {
            setIsSigningUp(false); // Reset loading state
        }
    }

    return (
        <div className="signup-container">
            <h1 id="hh">Register User Here</h1>
            
            <label>Enter User Email</label>
            <input
                type="email"
                value={email}
                onChange={(element) => setEmail(element.target.value)}
            />

            <label>Enter User Password</label>
            <input
                type="password"
                value={password}
                onChange={(element) => setPassword(element.target.value)}
            />

            <button onClick={handleSignUp} disabled={isSigningUp}>
                {isSigningUp ? 'Signing Up...' : 'Sign Up'}
            </button>
            
            <button className="existing-user-button">
                Existing User? <Link to='/login' className="cl">Login</Link>
            </button>
        </div>
    );
}
