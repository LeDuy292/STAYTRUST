import React from 'react';

const SearchHeader = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#293837] bg-transparent backdrop-blur-md px-6 py-3 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-primary">
                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                    <h2 className="text-white text-xl font-black leading-tight tracking-[-0.015em]">STAYTRUST</h2>
                </div>
                {/* Main Search Input */}
                <label className="flex flex-col min-w-[400px] h-10">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm">
                        <div className="text-[#9db8b6] flex border-none items-center justify-center pl-4 border-r-0">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#9db8b6] px-4 pl-2 text-sm font-normal"
                            placeholder="San Francisco, CA • Oct 12 - Oct 19 • 2 guests"
                            defaultValue=""
                        />
                    </div>
                </label>
            </div>
            <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-slate-600 dark:text-[#9db8b6] hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Explore</a>
                    <a className="text-slate-600 dark:text-[#9db8b6] hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Verify Property</a>
                    <a className="text-slate-600 dark:text-[#9db8b6] hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Support</a>
                </nav>
                <div className="flex items-center gap-3 border-l border-[#293837] pl-6">
                    <span className="material-symbols-outlined text-[#9db8b6]">notifications</span>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-primary/50"
                        data-alt="User profile avatar"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-aFILxetnQObC1VLQxbDokha_Nj1yEXazO1CWW1KTR9O0MC8BTt4_jBJiFfDcy8kPWGq_d38zd8ShzagBWz6Yl3tnpLHPjtBKT3Ps_VFEyjJFDeP38NmX3f9PIhqrzyADV3cRdeEgLxglKNmh2pnxBHUwGFZr4fpPvDD8Pgl1v12gJXVTxawGsgx9XWVUPpfzQ0BDR6b65mSbzPMlEVOx-lmlHgeZF2Xz_C3KqcQuiwTVacRGKNPlkeZ5FSzWMCqSXbJo0LHIQj1")' }}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default SearchHeader;
