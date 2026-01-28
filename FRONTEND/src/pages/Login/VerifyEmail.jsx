import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const VerifyEmail = () => {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-display auth-gradient text-white">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-[520px] glass-effect rounded-2xl shadow-2xl overflow-hidden text-center">
                    <div className="p-10 flex flex-col items-center">
                        <div className="relative mb-8">
                            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center relative">
                                <span className="material-symbols-outlined text-6xl text-primary/40">lock_reset</span>
                                <div className="absolute -top-1 -right-1 bg-teal-accent text-white p-2 rounded-full shadow-lg flex items-center justify-center border-4 border-card-dark">
                                    <span className="material-symbols-outlined text-2xl font-bold">mail</span>
                                </div>
                            </div>
                            <div className="absolute -left-4 top-0 w-3 h-3 bg-teal-accent/40 rounded-full blur-sm"></div>
                            <div className="absolute right-0 bottom-4 w-4 h-4 bg-primary/40 rounded-full blur-sm"></div>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 tracking-tight">Check your email</h1>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 px-4">
                            We have sent a password reset link to your email. Please check your inbox and click the link to reset your password.
                        </p>
                        <div className="w-full space-y-4">
                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-3">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.075 3 1.5 3H2l10 7.143L22 3h.5c.425 0 .8.162 1.069.432.268.268.431.643.431 1.068z"></path>
                                </svg>
                                Open Gmail
                            </button>
                            <div className="pt-2">
                                <p className="text-sm text-slate-500 mb-2">Didn't receive the email?</p>
                                <button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center justify-center gap-1 mx-auto transition-colors group">
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180 duration-500">refresh</span>
                                    Resend link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default VerifyEmail;
