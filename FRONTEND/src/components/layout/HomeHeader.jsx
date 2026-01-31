import React from 'react';

const HomeHeader = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 w-full px-4 lg:px-40 py-5">
            <div className="bg-background-dark/80 backdrop-blur-md border border-white/5 rounded-xl px-6 py-3 flex items-center justify-between shadow-lg shadow-primary/5">
                <div className="flex items-center gap-4 text-white">
                    <div className="text-primary size-8 flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">other_houses</span>
                    </div>
                    <h2 className="text-white text-xl font-extrabold leading-tight tracking-tight">Staytrust</h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-center gap-8">
                    <a className="text-slate-300 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="#">Listings</a>
                    <a className="text-slate-300 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="/my-rental">My Rental</a>
                    <a className="text-slate-300 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="/reputation">Reputation Center</a>
                    <a className="text-slate-300 text-sm font-semibold leading-normal hover:text-primary transition-colors" href="#">Contact</a>
                </div>
                <div className="hidden lg:flex gap-3">
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-transparent hover:bg-white/5 text-white text-sm font-bold leading-normal transition-colors border border-transparent hover:border-white/10">
                        Sign In
                    </button>
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-[#25bda9] text-[#010f0a] text-sm font-bold leading-normal shadow-lg shadow-primary/20 transition-all">
                        Sign Up
                    </button>
                </div>
                <button className="lg:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
};

export default HomeHeader;
