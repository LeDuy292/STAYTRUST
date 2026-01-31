import React from 'react';

const ActiveRentalPage = () => {
    return (
        <div className="bg-background-dark text-white font-display overflow-x-hidden min-h-screen flex flex-col relative selection:bg-primary/30">
            <style>{`
                /* Custom scrollbar for webkit */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #010f0a; 
                }
                ::-webkit-scrollbar-thumb {
                    background: #1a2c28; 
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #2dd4bf; 
                }
                
                /* Subtle background pattern */
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #2dd4bf05 1px, transparent 1px),
                                      linear-gradient(to bottom, #2dd4bf05 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>

            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Navigation */}
            <header className="relative z-20 flex items-center justify-between whitespace-nowrap border-b border-white/5 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-12">
                <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5 text-primary">
                        <span className="material-symbols-outlined text-2xl">security</span>
                    </div>
                    <a href="/" className="text-white text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">Staytrust</a>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-6 mr-6">
                        <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/">Dashboard</a>
                        <a className="text-sm font-medium text-white border-b-2 border-primary pb-0.5" href="/my-rental">My Rental</a>
                        <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/chat">Messages</a>
                    </nav>
                    <button className="hidden md:flex items-center justify-center rounded-xl size-10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border border-background-dark"></span>
                    </button>
                    <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold leading-none text-white">Sarah Jenkins</p>
                            <p className="text-xs text-gray-400 mt-1">Premium Tenant</p>
                        </div>
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white/10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClzH3rT3LQLycqLen5XAvc48oz8_E8OANleieGN9FbEzM_ggj09S8av4DiSHJTke13z_gWnP0fAZSECDDr-PLKqJwbDzaO8upwJrFc7-Ohtahrru9Ljmj9XIHFcgUodVm2LnPuROfPMCX7aUSpYYPWVpJZ8YenqzGY2OQ4O7z5_OyQ8eweKTNiLJ9vcg7lHcumto_SLUTmSGGV4qt1oGuiJFbXdR2ZJtxKFsnWCWZeMUlz8RPJ8H_cYfAH6NJhvyNiCerQviSlDWb8")' }}></div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 px-4 py-8 lg:px-12 lg:py-10 max-w-[1440px] mx-auto w-full">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Active Rental Management</h1>
                        <p className="text-gray-400">Welcome back to your dashboard. System status: <span className="text-primary font-medium">Monitoring Active</span></p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold transition-colors flex items-center gap-2 text-slate-300">
                            <span className="material-symbols-outlined text-[18px]">history</span> History
                        </button>
                        <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold transition-colors flex items-center gap-2 text-slate-300">
                            <span className="material-symbols-outlined text-[18px]">support_agent</span> Support
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT COLUMN (Main) */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Hero Glass Card */}
                        <section className="group relative w-full overflow-hidden rounded-[32px] border border-white/5 shadow-2xl bg-[#0c1211]">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOZev1VWFpmP4j0FH4-XVAsYpBILEnFUi-uOcxZaZvnxqhHH4sVkv7_KX3o0MCXjGBHLFT0-HhMIvVmS9z19RoAkRCSIGZRaH92J-9VJ6ozeXuUef717wWur_kPajQEhOT2k8nOiDmEbq-rGvXVUss9qEDIv0IbJm1viJYojEDOMOnCSfl2sPj75-qcm_GhtV-5sGMz5wgfUYFXUuplk9JIG2HSN8YlLjtxEwfEYTGFolDNCMfrb9klpVe5qX9exMtqdF3lpp3sYxN')" }}></div>
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/20"></div>

                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex flex-col h-full justify-end min-h-[400px]">
                                {/* Top Badges */}
                                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-3">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">Active Lease</span>
                                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                        <span className="size-2 rounded-full bg-green-500"></span> Live
                                    </span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-1">Your Current Home</h2>
                                            <p className="text-lg text-gray-300 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">location_on</span>
                                                123 My Khe Beach, Unit 404, Da Nang
                                            </p>
                                        </div>
                                        {/* Landlord Widget */}
                                        <div className="inline-flex items-center gap-4 bg-[#0c1211]/80 backdrop-blur-md border border-white/5 p-2 pr-6 rounded-full w-fit mt-4">
                                            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEwV4X1A5ChXFupwPAfXxnDiZBWTSs1gF8k0bY8OmW13HA_YbpUPL1deVffO0URIGOPMq5HvG_jSC_6garaEfAZZkuhXOObeehyOw0PqcRSdDGUoGSyG1h8O6qW6CYmrIzR6A_krvMN5TzVHYJ6hfBYVNzoGWXPZvyx-4eZjPAfvqPRQf-vGgsOzlwYezo5sEq0oYiKavoYGrTK5Q_Vmms6qjCQd1uhiPtgmU9BgjdsEvCBEbtLY_V4nHFQlz_MNr6FJKwaTVmVIBa')" }}></div>
                                            <div>
                                                <p className="text-xs text-primary font-bold uppercase tracking-wide">Verified Landlord</p>
                                                <p className="text-sm font-medium text-white">Nguyen Van A</p>
                                            </div>
                                            <div className="flex gap-2 ml-2 border-l border-white/10 pl-4">
                                                <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">chat</span></button>
                                                <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-sm">call</span></button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Countdown Circle (Visual) */}
                                    <div className="bg-[#0c1211]/80 backdrop-blur-md border border-white/5 p-4 rounded-[24px] flex flex-col items-center min-w-[140px]">
                                        <div className="relative size-20 flex items-center justify-center">
                                            <svg className="transform -rotate-90 size-full" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#1f2937" strokeWidth="8"></circle>
                                                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#2dd4bf" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-2xl font-bold text-white leading-none">142</span>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Days</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-primary mt-3 font-medium">Until Renewal</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contracts & Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contract List */}
                            <div className="bg-[#0c1211] border border-white/5 rounded-[32px] p-8 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-white">Documents &amp; Rules</h3>
                                    <button className="text-primary text-sm font-medium hover:underline">View All</button>
                                </div>
                                <div className="space-y-4">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4 group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-white/5 transition-colors">
                                        <div className="size-12 rounded-full bg-[#131d1b] text-[#60a5fa] flex items-center justify-center border border-white/5">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Digital Lease Agreement</p>
                                            <p className="text-xs text-gray-400">Signed on Oct 15, 2023</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-500 text-sm">arrow_forward_ios</span>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4 group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-white/5 transition-colors">
                                        <div className="size-12 rounded-full bg-[#131d1b] text-[#c084fc] flex items-center justify-center border border-white/5">
                                            <span className="material-symbols-outlined">gavel</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">House Rules</p>
                                            <p className="text-xs text-gray-400">Updated Jan 2024</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-500 text-sm">arrow_forward_ios</span>
                                    </div>
                                </div>
                            </div>

                            {/* Auto Renew Card */}
                            <div className="bg-[#0c1211] border border-white/5 rounded-[32px] p-8 shadow-lg flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="size-12 rounded-full bg-[#131d1b] text-primary flex items-center justify-center border border-white/5">
                                            <span className="material-symbols-outlined">autorenew</span>
                                        </div>
                                        <div className="flex items-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Auto-Renew Lease</h3>
                                    <p className="text-sm text-gray-400">
                                        Automatically extend your stay for another 6 months. We'll notify you 30 days before the renewal date.
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <p className="text-xs text-gray-500">Current setting: <span className="text-primary">Enabled</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Sidebar) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-[#0c1211] border border-white/5 rounded-[32px] p-8 sticky top-6 shadow-xl">
                            <div className="flex justify-between items-end mb-6">
                                <h3 className="text-xl font-bold text-white">Payments</h3>
                                <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">Due in 5 days</span>
                            </div>

                            {/* Main Rent Card */}
                            <div className="mb-8 p-6 rounded-[24px] bg-[#0f1f1d] border border-white/5 relative overflow-hidden group">
                                <div className="absolute -right-6 -top-6 bg-[#2dd4bf]/20 w-32 h-32 rounded-full blur-3xl group-hover:bg-[#2dd4bf]/30 transition-all"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-[#0c1211]/50 rounded-xl text-[#2dd4bf] backdrop-blur-sm">
                                            <span className="material-symbols-outlined">home</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Monthly Rent</p>
                                            <p className="text-white font-bold">Feb 2024</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-white">$1,200.00</p>
                                </div>
                            </div>

                            {/* Utilities List */}
                            <div className="space-y-3 mb-8">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Utilities</p>
                                {/* Utility Item */}
                                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#fbbf24] bg-[#131d1b] p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-[18px]">bolt</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Electricity</p>
                                            <p className="text-xs text-gray-500">245 kWh</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-white">$45.20</p>
                                </div>
                                {/* Utility Item */}
                                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#60a5fa] bg-[#131d1b] p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-[18px]">water_drop</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Water</p>
                                            <p className="text-xs text-gray-500">12 m³</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-white">$12.50</p>
                                </div>
                                {/* Utility Item */}
                                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#c084fc] bg-[#131d1b] p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-[18px]">wifi</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">High-Speed Wifi</p>
                                            <p className="text-xs text-gray-500">Flat Rate</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-white">$15.00</p>
                                </div>
                            </div>

                            {/* Total & Action */}
                            <div className="pt-6 border-t border-dashed border-white/20">
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-gray-400 font-medium">Total Amount</p>
                                    <p className="text-2xl font-bold text-white">$1,272.70</p>
                                </div>
                                <button className="w-full py-4 rounded-full bg-[#2dd4bf] hover:bg-[#25bda9] text-[#010f0a] font-extrabold text-base shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all flex justify-center items-center gap-2 group transform hover:-translate-y-0.5">
                                    Pay All Invoices
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform font-bold">arrow_forward</span>
                                </button>
                                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                                    <span className="material-symbols-outlined text-xs">lock</span>
                                    Secured by Stripe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ActiveRentalPage;
