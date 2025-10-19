import React, { useState } from 'react';
import { X } from 'lucide-react';

const AuthModal = ({ setIsAuthModalOpen }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [authForm, setAuthForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? 'Signing up...' : 'Logging in...', authForm);
    setIsAuthModalOpen(false);
  };

  const handleInputChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#e0ded2] rounded-lg max-w-md w-full p-8 relative animate-slideUp">
        <button 
          onClick={() => setIsAuthModalOpen(false)} 
          className="absolute top-4 right-4 text-[#200E01] hover:text-[#8B0000] transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#200E01] mb-2">
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-[#5B0202]">Join the Noctura family</p>
        </div>

        <div className="space-y-4">
          {isSignup && (
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={authForm.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors" 
            />
          )}
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={authForm.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors" 
          />
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={authForm.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors" 
          />
          {isSignup && (
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={authForm.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors" 
            />
          )}
          
          <button 
            onClick={handleAuthSubmit}
            className="w-full bg-[#8B0000] text-[#e0ded2] py-3 rounded-lg font-semibold hover:bg-[#5B0202] transition-all transform hover:scale-105"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#200E01]">
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            <button 
              onClick={() => setIsSignup(!isSignup)} 
              className="text-[#8B0000] font-semibold hover:underline"
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;