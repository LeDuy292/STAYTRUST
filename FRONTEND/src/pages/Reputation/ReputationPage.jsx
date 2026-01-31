import React from 'react';

const ReputationPage = () => {
    return (
        <div className="bg-background-dark text-white font-display overflow-x-hidden min-h-screen selection:bg-primary/30">
            <style>{`
                /* Custom Range Slider Styling */
                input[type=range] {
                    -webkit-appearance: none; 
                    background: transparent; 
                }
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    background: #2dd4bf; /* Teal-400 */
                    cursor: pointer;
                    margin-top: -6px; 
                    box-shadow: 0 0 10px rgba(45, 212, 191, 0.5);
                    border: 2px solid #0f1c19;
                }
                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: #1a2c28;
                    border-radius: 2px;
                }
                input[type=range]:focus {
                    outline: none;
                }
                
                /* Custom Scrollbar */
                ::-webkit-scrollbar {
                    width: 6px;
                }
                ::-webkit-scrollbar-track {
                    background: #010f0a; 
                }
                ::-webkit-scrollbar-thumb {
                    background: #041612; 
                    border-radius: 3px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #2dd4bf; 
                }
            `}</style>

            {/* Header - Transparent/Minimal */}
            <header className="sticky top-0 z-50 w-full bg-background-dark/90 backdrop-blur-md border-b border-white/5">
                <div className="flex h-16 items-center justify-between px-6 lg:px-10">
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2dd4bf]/10 text-[#2dd4bf]">
                                <span className="material-symbols-outlined text-[24px]">shield_lock</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-white">Staytrust</h2>
                        </div>

                        {/* Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/">Dashboard</a>
                            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">My Stays</a>
                            <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/chat">Messages</a>
                            <div className="relative">
                                <a className="text-sm font-bold text-white" href="/reputation">Reputation</a>
                                <div className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#2dd4bf]"></div>
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="relative hidden lg:block group">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] group-focus-within:text-[#2dd4bf] transition-colors">search</span>
                            <input
                                className="h-9 w-64 rounded-full border-none bg-surface-dark pl-10 pr-4 text-xs font-medium text-white placeholder-slate-600 focus:ring-1 focus:ring-[#2dd4bf]/50 transition-all"
                                placeholder="Search properties or hosts..."
                                type="text"
                            />
                        </div>
                        <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-surface-dark bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbvaCvczTC040le7aZ4bN3vpTqZPGfQk329oPYqvZJPxKHZy0PWfHmMzEra9XoHGZAeIkaOayE_s-PiroYrKylOeRsmaCj341NX0x2l2cAYtBrI0ujEIhS0nNF2NMqwlHz6SJjDqbEraWTLkoj2o2-bfUSjUVqto-wKfZkQ3I1_5wPCqDdrsfpFwQXpDnw1gugIsR7xtkmETHpGC517kJBj4GcQryOgGsHwAzeOZQ3rJCGgo45TRyfoysYLC8Xuwvw8AhraKGsngCW")' }}></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">

                {/* Page Title & Actions */}
                <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Reputation Hub</h1>
                        <p className="mt-1 text-base text-[#2dd4bf]">Manage your trust profile and community contributions</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-2 rounded-lg bg-card-dark hover:bg-surface-dark border border-white/5 px-4 py-2 text-xs font-bold text-slate-300 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            Export Report
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-6 lg:col-span-4">

                        {/* Tenant Score Card */}
                        <div className="rounded-[20px] bg-card-dark p-6 border border-white/5 shadow-xl shadow-black/20">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-white">Tenant Score</h3>
                                <span className="material-symbols-outlined text-[#2dd4bf] text-[20px]">verified</span>
                            </div>

                            <div className="relative flex flex-col items-center justify-center py-4">
                                {/* SVG Gauge */}
                                <div className="relative h-48 w-48">
                                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" stroke="#131d1b" strokeWidth="8" fill="transparent" />
                                        <circle cx="50" cy="50" r="40" stroke="#2dd4bf" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="5" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold text-white tracking-tighter">98</span>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">out of 100</span>
                                    </div>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-[#2dd4bf] text-sm font-bold flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        Top 2% of Renters
                                    </p>
                                    <p className="text-xs text-slate-600 mt-1">Updated 2 hours ago</p>
                                </div>
                            </div>
                        </div>

                        {/* Badges Card */}
                        <div className="rounded-[20px] bg-card-dark p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-sm font-bold text-white">Earned Badges</h3>
                                <a className="text-[10px] font-bold text-[#2dd4bf] hover:underline uppercase" href="#">View All</a>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 rounded-xl bg-surface-dark p-3 border border-white/5">
                                    <span className="material-symbols-outlined text-[#2dd4bf] text-[20px]">check_circle</span>
                                    <span className="text-xs font-bold text-white">Verified ID</span>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl bg-surface-dark p-3 border border-white/5">
                                    <span className="material-symbols-outlined text-[#fbbf24] text-[20px]">star</span>
                                    <span className="text-xs font-bold text-white">Super Renter</span>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl bg-surface-dark p-3 border border-white/5">
                                    <span className="material-symbols-outlined text-[#4ADE80] text-[20px]">payments</span>
                                    <span className="text-xs font-bold text-white">Prompt Payer</span>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl bg-surface-dark p-3 border border-white/5">
                                    <span className="material-symbols-outlined text-[#60a5fa] text-[20px]">shield</span>
                                    <span className="text-xs font-bold text-white">Clean Record</span>
                                </div>
                                <div className="col-span-2 flex items-center gap-3 rounded-xl border border-dashed border-white/10 p-3 opacity-50">
                                    <span className="material-symbols-outlined text-slate-500 text-[20px]">lock</span>
                                    <span className="text-xs font-bold text-slate-500">More Coming Soon</span>
                                </div>
                            </div>
                        </div>

                        {/* Alert Card */}
                        <div className="rounded-[20px] bg-[#1a0f0f] border border-red-900/30 p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#3f1616] text-red-500">
                                    <span className="material-symbols-outlined text-[20px]">gpp_maybe</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Report Discrepancy</h3>
                                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">Found a listing that doesn't match reality? Flag it safely to protect the community.</p>
                                    <button className="mt-3 flex items-center gap-1 rounded bg-[#3f1616]/50 px-3 py-1.5 text-[10px] font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-wide">
                                        File Report <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-6 lg:col-span-8">

                        {/* Rating Form */}
                        <div className="rounded-[24px] bg-card-dark p-8 border border-white/5 relative overflow-hidden">
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2dd4bf]/5 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Rate Your Stay</h2>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs text-slate-500">Reviewing:</span>
                                        <span className="text-xs font-bold text-[#2dd4bf]">Modern Loft in Downtown</span>
                                        <span className="text-xs text-slate-600">•</span>
                                        <span className="text-xs text-slate-500">Oct 12 - Oct 15</span>
                                    </div>
                                </div>
                                <div className="h-12 w-16 rounded-lg bg-cover bg-center ring-2 ring-[#0f1514]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb_wA5-pC8-kdCVMWHjbCDxYioGitMsJVpa0s4fqnbGf7jmXPUWRDkeVG9-35riw9Xi48cqi32zlHmNx8CvNHOPw58etacQqqzUKQjmhpzNS2ru4A1O6IiNv5h1ir5uT-jwtr3hbNx6FaAmXDfJlIqr0ORl6khARwpnhnFabFWYqJgqUqd7cXkswvM3DbzodK3oqo7XA7RWK6LQ0M_6PfHGMl_H9q80LSJ4HXfp0G71geelLgbK9anjK9qXeIV4-bSuKulPMaE78I2")' }}></div>
                            </div>

                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {/* Slider Group */}
                                    {[
                                        { label: "Listing Accuracy", value: "9.0", left: "Poor", right: "Excellent" },
                                        { label: "Communication", value: "8.5", left: "Slow", right: "Responsive" },
                                        { label: "Location Safety", value: "10.0", left: "Unsafe", right: "Secure" },
                                        { label: "Amenities", value: "7.0", left: "Missing", right: "As Listed" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <label className="text-xs font-bold text-slate-300">{item.label}</label>
                                                <span className="text-sm font-black text-[#2dd4bf]">{item.value}</span>
                                            </div>
                                            <div className="relative h-4 flex items-center">
                                                <input className="w-full relative z-10" type="range" min="0" max="10" defaultValue={item.value} step="0.5" />
                                            </div>
                                            <div className="flex justify-between text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                                                <span>{item.left}</span>
                                                <span>{item.right}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-dashed border-white/10">
                                    <div className="flex flex-col sm:flex-row gap-6 justify-between items-center rounded-xl bg-surface-dark p-5 border border-white/5">
                                        <div>
                                            <h4 className="text-sm font-bold text-white">Rate the Host</h4>
                                            <p className="text-xs text-slate-500 mt-1">How was your interaction with Sarah?</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map(s => <span key={s} className="material-symbols-outlined text-[#fbbf24] text-[24px] fill-1 cursor-pointer hover:scale-110 transition-transform">star</span>)}
                                            <span className="material-symbols-outlined text-slate-700 text-[24px] cursor-pointer hover:text-[#fbbf24] transition-colors">star</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-300">Detailed Feedback <span className="text-slate-600 font-normal">(Private to Staytrust)</span></label>
                                    <textarea
                                        className="w-full rounded-xl bg-surface-dark border-none text-sm text-white placeholder-slate-700 focus:ring-1 focus:ring-[#2dd4bf]/50 min-h-[100px] p-4 resize-none"
                                        placeholder="Share details about cleanliness, noise levels, or discrepancies..."
                                    ></textarea>
                                </div>

                                <div className="flex items-center justify-end gap-6 pt-2">
                                    <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-wide" type="button">Cancel</button>
                                    <button className="bg-[#2dd4bf] hover:bg-[#25bda9] text-[#020505] font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2" type="button">
                                        Submit Verified Review
                                        <span className="material-symbols-outlined text-[18px]">send</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Recent Reviews (Compact) */}
                        <div className="rounded-[20px] bg-card-dark p-6 border border-white/5">
                            <h3 className="text-sm font-bold text-white mb-5">Your Verified Reviews</h3>
                            <div className="space-y-3">
                                {[
                                    { title: "Sunny Mission District Flat", loc: "San Francisco, CA • Stayed Sep 2023", rating: "4.8", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Hb_Q_i3jo4hcVXfZ7H7Ux-39RVrSGXXbqZYTFMRYNr8I5CwLIv1j9f7CfbgQt4Tyst2LWSL27ioLRHIPZDJ5XX2UCax56q-xmn56AMAepL7T9_OmGmh2LA0qkIRDYcAbHgE-2ffhUl13fdbgZMpWSYICGhFFpkHkaxSkY6hyao11i3NXEiT6YUp4v3gI4mGIIn1cEZO14J1WMTAKmQsYvpFNYc4GwedC5ArWTas1_U-KrDzZBcVbWBRbf5pznpDoJmL9v9-5XDaW" },
                                    { title: "Historic Brownstone Studio", loc: "New York, NY • Stayed Aug 2023", rating: "5.0", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfiphRhORekMnhuVyIENhtOHLVnfr04i3x1x3lNi-aANusw0mZw9nnMvLI-UPXCfvFIOOjLqlRN_Z8tZzYDM_ZVTf4Wz7Yrxhe4_1BV9bTiV8ou6ezfWKfKRR_3DPEFHNGUrCV9A5uTMA4B0R2L9SlSgP0F5jEu3IywiGjcySnEFSg4-lNDOsCDbBiAwg8FlR6B1vPLwIHTXqKIUMchJxAemCdKYSkxnk-NEpYhHIqajmAkpnUy4tG9uTkKXOKxAiOODxDXJf3T6C4" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-3 rounded-xl bg-surface-dark border border-white/5 hover:border-[#2dd4bf]/20 transition-all group cursor-pointer">
                                        <div className="h-16 w-24 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}></div>
                                        <div className="flex-1 flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-white text-sm group-hover:text-[#2dd4bf] transition-colors">{item.title}</h4>
                                                <p className="text-[11px] text-slate-500 mt-1">{item.loc}</p>
                                                <div className="mt-1 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-[12px] text-[#2dd4bf]">check_circle</span>
                                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Verified Stay</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 bg-card-dark px-2 py-1 rounded-md">
                                                <span className="text-xs font-bold text-white">{item.rating}</span>
                                                <span className="material-symbols-outlined text-[12px] text-[#2dd4bf]">star</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 text-xs font-bold text-[#2dd4bf] hover:text-white transition-colors uppercase tracking-wide">Show All History</button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReputationPage;
