import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { IconBaseProps } from 'react-icons';
import './Auth.css';

// Define icon types
const MailIcon = FiMail as React.ComponentType<IconBaseProps>;
const LockIcon = FiLock as React.ComponentType<IconBaseProps>;
const UserIcon = FiUser as React.ComponentType<IconBaseProps>;
const PhoneIcon = FiPhone as React.ComponentType<IconBaseProps>;
const GoogleIcon = FcGoogle as React.ComponentType<IconBaseProps>;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: 'prefer-not-to-say',
  });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual signup logic here
      console.log('Signup attempt:', formData);
      navigate('/'); // Redirect to home page after successful signup
    } catch (err) {
      setError('Failed to create account');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // TODO: Implement Google sign-in logic here
      console.log('Google sign-in attempt');
      navigate('/'); // Redirect to home page after successful signup
    } catch (err) {
      setError('Failed to sign up with Google');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Please fill in your details</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <UserIcon className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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
            <PhoneIcon className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
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

          <div className="form-group">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="gender-select"
            >
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button onClick={handleGoogleSignIn} className="google-button">
          <GoogleIcon size={20} />
          Sign up with Google
        </button>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; 