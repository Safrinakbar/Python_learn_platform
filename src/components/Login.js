import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'; 
import "./Login.css";

export let mail = "";

export default function Login() {
    const { setUser, login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    async function handleLogIn() {
        // Validation for email
        if (!email) {
            toast.error("Email is required.");
            return;
        } else if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Validation for password
        if (!password) {
            toast.error("Password is required.");
            return;
        }

        setLoading(true); // Start loading

        try {
            const result = await login(email, password);
            setUser(result.user.uid);
            mail = email;

            // Success - Show SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                text: 'Welcome back!',
            });

            navigate("/home"); // Redirect to the home page after successful login
        } catch (error) {
            toast.error("Login failed. Please check your email and password.");
            console.error(error);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    return (
        <div className="login-container">
            <h1 id="hh">Login</h1>

            <label>Enter your email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
            />

            <label>Enter your password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
            />

            <button onClick={handleLogIn} disabled={loading}>
                {loading ? "Logging..." : "Login"}
            </button>
            <button disabled={loading} onClick={() => navigate("/signup")}>
                New user? Sign Up
            </button>

            {/* Toast Container for errors */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                closeButton={false}
            />
        </div>
    );
}
