import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="relative w-full py-24 bg-gradient-to-b from-[#101922] via-[#0d222e] to-[#0b2530] overflow-hidden -mt-1">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQwIDBMIHQiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-40 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-emerald-400 font-bold tracking-wider uppercase text-xs lg:text-sm mb-3 block opacity-80">Core Values</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Staytrust?</span></h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Experience the most modern, safe, and transparent rental process in Da Nang.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="glass-dark p-8 rounded-2xl group hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-emerald-500/40 relative overflow-hidden backdrop-blur-xl">
                        <div className="h-20 w-20 mb-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-teal-900/20 border border-emerald-500/20 flex items-center justify-center animate-bob shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-teal-500 text-5xl drop-shadow-sm">fact_check</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Transparent Data</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">AI-verified information for every listing, ensuring accuracy and trust.</p>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-dark p-8 rounded-2xl group hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-emerald-500/40 relative overflow-hidden backdrop-blur-xl">
                        <div className="h-20 w-20 mb-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-teal-900/20 border border-emerald-500/20 flex items-center justify-center animate-bob-delay shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-teal-500 text-5xl drop-shadow-sm">draw</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Digital Contracts</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">Secure and fast digital leasing process with smart contracts.</p>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-dark p-8 rounded-2xl group hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-emerald-500/40 relative overflow-hidden backdrop-blur-xl">
                        <div className="h-20 w-20 mb-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-teal-900/20 border border-emerald-500/20 flex items-center justify-center animate-bob shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-teal-500 text-5xl drop-shadow-sm">support_agent</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">24/7 Support</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">Dedicated support team available round-the-clock for tenants and hosts.</p>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
