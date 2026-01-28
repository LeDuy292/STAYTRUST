import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/verify-email');
        }, 1500);
    };

    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-display auth-gradient text-white">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-[500px] glass-effect rounded-xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-3 tracking-tight">Forgot Password?</h1>
                        <p className="text-slate-400">Enter your email address and we'll send you a link to reset your password.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Button type="submit" icon="send" disabled={loading} className="w-full">
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/auth" className="text-sm text-slate-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Login
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ForgotPassword;
