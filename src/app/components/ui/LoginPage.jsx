import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-card">
      <h2 className="login-title">Log in to ChatGPT</h2>

      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="btn filled">Log In</button>
        <button type="button" className="btn outlined">Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;
