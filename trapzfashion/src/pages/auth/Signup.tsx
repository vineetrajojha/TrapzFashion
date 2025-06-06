import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { IconBaseProps } from 'react-icons';
import './Auth.css';
import authImage from '../../assets/Tshirts/Other Designs/Dream/main image.png'; // Assuming you have an image here

// Define icon types
const MailIcon = FiMail as any;
const LockIcon = FiLock as any;
const UserIcon = FiUser as any;
// Removed PhoneIcon = FiPhone as any;
const GoogleIcon = FcGoogle as any;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'male',
    password: '',
  });
   const [countryCode] = useState('+91'); // Autoselected to +91
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

    // TODO: Add client-side password validation here (Capital, small, special symbol, number)
    // TODO: Add client-side phone number validation here (exactly 10 digits)

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
    <div className="auth-page-container">
      <div className="auth-form-section">
        <div className="auth-box">
          <h2>No Account? No worries!</h2>
          <p className="auth-subtitle">Be the part of the Trap Fashion Family</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <UserIcon className="input-icon" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

             <div className="form-group">
              <UserIcon className="input-icon" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
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

             <div className="form-group phone-input-group">
              {/* Removed PhoneIcon className="input-icon" */}
               <div className="country-code-container">
                 {/* Placeholder for Indian Flag icon */}
                 <span className="flag-placeholder">🇮🇳</span> {/* Using emoji as placeholder */}
                 <span className="country-code">{countryCode}</span>
               </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="phone-input"
                maxLength={10} // Restrict to 10 digits
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
              {/* TODO: Add client-side password validation feedback here */}
            </div>

            <div className="form-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="gender-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
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
            Continue with Google
          </button>

          <p className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="auth-image-section">
         <img src={authImage} alt="Authentication" className="auth-side-image" />
      </div>
    </div>
  );
};

export default Signup; 