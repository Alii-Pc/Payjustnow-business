'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Business email is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToastMessage('Log in successful! Redirecting...');
      setTimeout(() => {
        setToastMessage('');
      }, 3500);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white text-black font-sans selection:bg-[#BDF500] selection:text-black">
      
      {/* Left Column: Hero Image (hidden on small screens, shown on md+) */}
      <div className="hidden md:block md:w-1/2 lg:w-[54%] xl:w-[56%] relative bg-neutral-100 overflow-hidden min-h-screen">
        <img
          src="/images/login-hero.png"
          alt="PayJustNow Partners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full md:w-1/2 lg:w-[46%] xl:w-[44%] min-h-screen bg-white flex flex-col justify-center items-center px-[2.4rem] sm:px-[4rem] lg:px-[6rem] py-[4rem] relative">

        {/* Centered Form Container */}
        <div className="max-w-[342px] w-full flex flex-col items-center">
          
          {/* PayJustNow Rainbow Logo */}
          <Link href="/business" className="mb-[3.2rem] block" aria-label="PayJustNow">
            <img
              src="/images/payjustnow-rainbow-logo.svg"
              alt="PayJustNow"
              width={122}
              height={56}
              className="h-[5.6rem] w-auto object-contain"
            />
          </Link>

          {/* Title */}
          <h1 className="text-[2rem] sm:text-[2.2rem] font-medium text-black text-center leading-[1.3] max-w-[300px] mb-[3.2rem]">
            Log In to Your PayJustNow Merchant Portal.
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-stretch" noValidate>
            
            {/* Email Field */}
            <div className="mb-[1.8rem] w-full">
              <label
                htmlFor="business-email"
                className="block text-[1.2rem] text-neutral-600 font-medium mb-[0.6rem]"
              >
                Business email
              </label>
              <div className="relative">
                <input
                  id="business-email"
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="name@company.com"
                  className="w-full h-[4.8rem] px-[1.6rem] rounded-[6px] border border-[#CCD6DD] focus:border-black focus:ring-1 focus:ring-black text-[1.5rem] text-black placeholder:text-neutral-400 outline-none transition-colors bg-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-[1.2rem] w-full">
              <label
                htmlFor="password"
                className="block text-[1.2rem] text-neutral-600 font-medium mb-[0.6rem]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your password"
                  className="w-full h-[4.8rem] px-[1.6rem] pr-[4.8rem] rounded-[6px] border border-[#CCD6DD] focus:border-black focus:ring-1 focus:ring-black text-[1.5rem] text-black placeholder:text-neutral-400 outline-none transition-colors bg-white"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[1.2rem] top-1/2 -translate-y-1/2 p-[0.6rem] text-neutral-500 hover:text-black transition-colors"
                >
                  {showPassword ? (
                    /* Eye open */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    /* Eye closed / hide */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-[1.2rem] text-[1.3rem] text-[#BA1616] font-normal leading-[1.3]">
                {error}
              </div>
            )}

            {/* Log In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[4.8rem] rounded-[6px] bg-[#0C1029] hover:bg-black text-white font-sans text-[1.5rem] font-medium flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99] mt-[1.6rem] mb-[2rem] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-[1rem]">
                  <span className="w-[1.8rem] h-[1.8rem] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Logging in...</span>
                </div>
              ) : (
                'Log In'
              )}
            </button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset instructions will be sent to your email.');
                }}
                className="text-[#B61C49] hover:text-[#8E1236] underline text-[1.4rem] font-medium transition-colors"
              >
                Forgot your password?
              </a>
            </div>

          </form>

        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-[2.4rem] right-[2.4rem] bg-[#0C1029] text-white px-[2rem] py-[1.2rem] rounded-[8px] shadow-2xl text-[1.4rem] font-medium animate-fade-in flex items-center gap-[1rem] z-50">
            <span className="w-[0.8rem] h-[0.8rem] rounded-full bg-[#BDF500]" />
            {toastMessage}
          </div>
        )}

      </div>

    </div>
  );
}
