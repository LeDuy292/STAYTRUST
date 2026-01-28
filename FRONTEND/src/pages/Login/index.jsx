import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Checkbox from '../../components/common/Checkbox';
import SocialLogin from '../../components/auth/SocialLogin';
import AccountTypeSelector from '../../components/auth/AccountTypeSelector';

import authApi from '../../api/authApi';

const LoginPage = () => {
  const [authMode, setAuthMode] = useState('signup'); // 'login' | 'signup'
  const [userType, setUserType] = useState('tenant');
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = name || id;

    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error for this field when user types
    if (fieldErrors[fieldName]) {
      setFieldErrors(prev => ({ ...prev, [fieldName]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');
    setFieldErrors({});
    setSuccess('');
    setLoading(true);

    try {
      if (authMode === 'login') {
        // Backend LoginDTO uses Username and Password
        const { username, password } = formData;
        const res = await authApi.login({ username, password });
        console.log('Login success:', res);

        if (res.token) {
          localStorage.setItem('token', res.token);
          setSuccess('Login Successful! Redirecting...');
          // Optional: Add redirect logic here
        }
      } else {
        // Backend RegisterDTO uses FullName, Username, Password, Email, Phone, Role
        const { fullname, username, email, phone, password, agreeToTerms } = formData;

        if (!agreeToTerms) {
          setGeneralError('You must agree to the Terms of Service to register.');
          setLoading(false);
          return;
        }

        await authApi.register({
          fullName: fullname,
          username,
          email,
          phone: phone, // Directly use phone input without country code
          password,
          role: userType === 'tenant' ? 'Tenant' : 'Landlord' // Ensure PascalCase role
        });
        // Redirect to Login instead of Verify Email (User Request)
        setSuccess('Registration Successful! Redirecting to Login...');
        setTimeout(() => {
          setAuthMode('login');
          setSuccess('');
        }, 1500);
      }
    } catch (err) {
      console.error('Auth error:', err);
      const status = err.response?.status;
      const data = err.response?.data;

      // Handle Field Validation Errors (400)
      if (status === 400 && data?.errors) {
        const newFieldErrors = {};
        // backend returns like { "Username": ["is required"], "Email": ["invalid"] }
        // we map to lowercase keys for our form state
        Object.keys(data.errors).forEach(key => {
          const fieldName = key.toLowerCase(); // 'Username' -> 'username'
          newFieldErrors[fieldName] = data.errors[key][0]; // Take first error message
        });
        setFieldErrors(newFieldErrors);
      }
      // Handle General Errors
      else {
        let displayMessage = 'Authentication failed.';
        if (status === 401) displayMessage = 'Invalid credentials. Check username/password.';
        else if (status === 404) displayMessage = 'API Endpoint not found (404).';
        else if (err.message === 'Network Error') displayMessage = 'Network Error. Check connection.';
        else if (data?.message) displayMessage = data.message;
        else if (data?.title) displayMessage = data.title;

        setGeneralError(displayMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display auth-gradient text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-20 pt-8">
        <div className="max-w-[600px] text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Find your next home with AI-powered precision
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Secure, location-based rentals for the modern era.</p>
        </div>

        <div className="w-full max-w-[500px] glass-effect rounded-xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            {['login', 'signup'].map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setAuthMode(mode);
                  setGeneralError('');
                  setFieldErrors({});
                  setSuccess('');
                }}
                className={`flex-1 py-4 text-sm font-bold border-b-2 capitalize transition-colors ${authMode === mode
                  ? 'border-primary text-white bg-primary/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
              >
                {mode === 'signup' ? 'Sign Up' : 'Login'}
              </button>
            ))}
          </div>

          <div className="p-8">
            {generalError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm font-medium text-center">
                <span className="material-symbols-outlined align-bottom text-lg mr-1">error</span>
                {generalError}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm font-medium text-center">
                <span className="material-symbols-outlined align-bottom text-lg mr-1">check_circle</span>
                {success}
              </div>
            )}

            {/* Account Selector (Signup Only) */}
            {authMode === 'signup' && (
              <>
                <h3 className="text-lg font-bold mb-4">I am a...</h3>
                <AccountTypeSelector selectedType={userType} onSelect={setUserType} />
              </>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Username Field - Required for both Login and Signup */}
              <Input
                id="username"
                name="username"
                label="Username"
                placeholder="johndoe123"
                value={formData.username}
                onChange={handleChange}
                error={fieldErrors.username}
                required
              />

              {authMode === 'signup' && (
                <>
                  <Input
                    id="fullname"
                    name="fullname"
                    label="Full Name"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    error={fieldErrors.fullname}
                    required
                  />

                  <Input
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={fieldErrors.email}
                    required
                  />

                  <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    error={fieldErrors.phone}
                    required
                  />
                </>
              )}

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Password</label>
                  {authMode === 'login' && (
                    <a href="/forgot-password" className="text-[10px] font-bold text-teal-accent hover:underline">Forgot Password?</a>
                  )}
                </div>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all text-white placeholder-slate-500
                    ${fieldErrors.password ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-700 focus:ring-primary'}`}
                  type="password"
                  placeholder="••••••••"
                  required
                />
                {fieldErrors.password && (
                  <p className="text-xs text-red-500 font-medium mt-1">{fieldErrors.password}</p>
                )}
              </div>

              {authMode === 'signup' && (
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }));
                    if (e.target.checked) setGeneralError('');
                  }}
                  label={
                    <>
                      I agree to the <a href="#" className="text-teal-accent hover:underline font-semibold">Terms of Service</a> and <a href="#" className="text-teal-accent hover:underline font-semibold">Privacy Policy</a>
                    </>
                  }
                />
              )}

              <Button type="submit" icon="arrow_forward" className="mt-4" disabled={loading}>
                {loading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : 'Create Account')}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700"></div></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card-dark px-3 text-slate-500 font-medium tracking-widest">Or continue with</span>
              </div>
            </div>

            <SocialLogin />

            {/* Bottom Disclaimer */}
            {authMode === 'signup' && (
              <div className="bg-slate-900/80 -mx-8 -mb-8 mt-8 p-6 text-center border-t border-gray-800">
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-[380px] mx-auto">
                  By clicking "Create Account", you agree to our{' '}
                  <a href="#" className="text-teal-accent hover:text-teal-400 underline decoration-teal-accent/30 font-medium">Terms of Service</a>,{' '}
                  <a href="#" className="text-teal-accent hover:text-teal-400 underline decoration-teal-accent/30 font-medium">Privacy Policy</a>,{' '}
                  and <a href="#" className="text-teal-accent hover:text-teal-400 underline decoration-teal-accent/30 font-medium">Cookie Policy</a>.{' '}
                  Your data is handled according to our secure AI Foundation standards.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Support Bubble */}
        <div className="mt-8 flex items-center gap-2 text-slate-500 text-sm">
          <span className="material-symbols-outlined text-lg text-teal-accent">verified</span>
          <span>Enterprise-grade security verified by AI Trust Core</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;