import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { IconBaseProps } from 'react-icons';
import './Auth.css';
import authImage from '../../assets/Tshirts/Other Designs/Dream/main image.png'; // Assuming you have an image here

// Define icon types
const MailIcon = FiMail as React.ComponentType<IconBaseProps>;
const LockIcon = FiLock as React.ComponentType<IconBaseProps>;
const GoogleIcon = FcGoogle as React.ComponentType<IconBaseProps>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual login logic here
      console.log('Login attempt:', formData);
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // TODO: Implement Google sign-in logic here
      console.log('Google sign-in attempt');
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      setError('Failed to sign in with Google');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form-section">
        <div className="auth-box">
          <h1>Hey Buddy!</h1><h2>We missed you, Welcome Back</h2>
          <p className="auth-subtitle">Please sign in to continue</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <MailIcon className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <LockIcon className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-button">
              Continue
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button onClick={handleGoogleSignIn} className="google-button">
            <GoogleIcon size={20} />
            Continue with  Google
          </button>

          <p className="auth-footer">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign Up
            </Link>
          </p>
          <p className="auth-terms">By creating an account or logging in, you agree with Trap's T&C and Privacy Policy</p>
        </div>
      </div>
      <div className="auth-image-section">
        <img src={authImage} alt="Authentication" className="auth-side-image" />
      </div>
    </div>
  );
};

export default Login; 