import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative min-h-screen w-full flex items-center pt-32 lg:pt-20 pb-20 overflow-hidden bg-background-dark">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                data-alt="Stylized 3D map perspective of Da Nang city at night with glowing lights and teal data lines connecting locations"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgxQy4FgCs-ViNORaQTrRKng2HArXp-yT6A85QODzAuKWN5-3QQWrnDNXYngHiTHxP6xBzXz1gMpQpVe65oz4NEzWj_vVYvrVbFlCGJyNYhrQPtODUzTeFGp_Gq4I_CADP1rY1HjQc46AGTt1DCBbyy7O6uo4W0xxXnkvbglLikDGazyb9DVcVeyLzZ1wrAXb66OIGsSHa1Wv82psBa3OwkuUeWx9PQUSMy_J3IQShLnI7Vne9BBsHUsAGBb6JSYimsim1xQJMZuYa')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#101922]/95 via-[#101922]/80 to-[#101922]/40"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-t from-teal-500/20 to-transparent mix-blend-screen"></div>
            </div>

            <div className="layout-container container mx-auto px-4 lg:px-40 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">
                <div className="flex flex-col gap-8 flex-1 max-w-[640px]">
                    <div className="flex flex-col gap-4 text-left">
                        <div className="inline-flex items-center gap-2 self-start rounded-full bg-teal-500/10 border border-teal-500/30 pl-2 pr-4 py-1 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                            <span className="text-teal-200 text-xs font-bold tracking-wide uppercase">#1 Rental Platform in Da Nang</span>
                        </div>
                        <h1 className="text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] drop-shadow-sm">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Trusted Home</span> in Da Nang
                        </h1>
                        <p className="text-slate-200 text-lg font-medium leading-relaxed max-w-[540px]">
                            Verified rentals, transparent pricing, and seamless booking for your next stay. Experience the comfort of home with the trust of technology.
                        </p>
                    </div>

                    <div className="glass-search-container p-3 rounded-2xl mt-8 relative z-30 max-w-2xl">
                        <form className="flex flex-col lg:flex-row lg:items-center relative gap-4">
                            <div className="flex-1 relative group search-input-group input-glow-focus px-4 py-2 transition-all duration-300 rounded-xl bg-white/5 border border-white/10">
                                <label className="block text-[10px] font-bold text-emerald-300 mb-1 ml-9 uppercase tracking-widest opacity-90">Location</label>
                                <div className="flex items-center pb-1">
                                    <div className="absolute left-3 text-slate-400 icon-glow transition-all duration-300">
                                        <span className="material-symbols-outlined text-[24px]">location_on</span>
                                    </div>
                                    <input
                                        className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-400/70 text-lg font-medium pl-9 py-0 h-7 focus:outline-none"
                                        placeholder="Search by area, street name..."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <button
                                    className="w-full lg:w-auto h-full min-h-[64px] px-10 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-[#0b2530] rounded-xl font-bold shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-emerald-300/30"
                                    type="button"
                                    onClick={() => window.location.href = '/search'}
                                >
                                    <span className="material-symbols-outlined text-[24px]">search</span>
                                    <span className="text-base font-extrabold tracking-wide">Find Home</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-6 text-slate-300 text-sm font-medium mt-2">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-emerald-400 filled text-[20px]">verified_user</span>
                            <span>100% Verified Listings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-emerald-400 filled text-[20px]">support_agent</span>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 relative h-[600px] w-full items-center justify-center perspective-[1000px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>

                    {/* Floating Card 1 */}
                    <div className="absolute bottom-20 right-10 w-[320px] bg-card-dark rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-3 floating-card-1 z-10 border border-white/10">
                        <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3">
                            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-yellow-500 text-[16px] filled">star</span>
                                <span className="text-xs font-bold text-white">4.9</span>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full hover:bg-red-500 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-[16px]">favorite</span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                data-alt="Modern minimalist bedroom interior with natural light and wooden furniture"
                                style={{
                                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV')"
                                }}
                            ></div>
                        </div>
                        <div className="px-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-white font-bold text-base leading-tight">Modern Loft, Son Tra</h3>
                                <div className="flex items-center text-primary" title="Verified Owner">
                                    <span className="material-symbols-outlined text-[18px] filled">verified</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-xs mb-3 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">location_on</span>
                                0.5km to My Khe Beach
                            </p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                <span className="text-primary font-bold text-lg">7.5M <span className="text-xs font-normal text-slate-500">VND/mo</span></span>
                                <button onClick={() => window.location.href = '/property/1'} className="text-xs font-bold text-slate-300 hover:text-primary transition-colors">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute top-20 left-10 w-[340px] bg-card-dark rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-3 floating-card-2 z-20 border border-white/10 transform rotate-2">
                        <div className="absolute -top-3 -right-3 bg-teal-500 text-[#010f0a] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                            Popular
                        </div>
                        <div className="relative h-44 w-full rounded-lg overflow-hidden mb-3">
                            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-yellow-500 text-[16px] filled">star</span>
                                <span className="text-xs font-bold text-white">5.0</span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                data-alt="Sunny apartment living room with balcony view and contemporary decor"
                                style={{
                                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG')"
                                }}
                            ></div>
                        </div>
                        <div className="px-2">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-white font-bold text-lg leading-tight">Sunny Studio, Dragon Bridge</h3>
                                <div className="flex items-center text-primary" title="Verified Owner">
                                    <span className="material-symbols-outlined text-[20px] filled">verified</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm mb-3 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">location_on</span>
                                City Center, Da Nang
                            </p>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-0.5 bg-surface-dark border border-white/5 text-slate-300 text-[10px] font-bold uppercase rounded">WiFi</span>
                                <span className="px-2 py-0.5 bg-surface-dark border border-white/5 text-slate-300 text-[10px] font-bold uppercase rounded">AC</span>
                                <span className="px-2 py-0.5 bg-surface-dark border border-white/5 text-slate-300 text-[10px] font-bold uppercase rounded">Kitchen</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                <span className="text-primary font-bold text-xl">4.5M <span className="text-xs font-normal text-slate-500">VND/mo</span></span>
                                <button onClick={() => window.location.href = '/property/1'} className="h-8 px-4 bg-primary text-[#010f0a] rounded-lg text-xs font-bold hover:bg-[#25bda9] transition-colors">Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[40%] right-[10%] p-2 bg-card-dark border border-white/10 rounded-lg shadow-lg animate-bounce z-0 opacity-80">
                        <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                    </div>
                    <div className="absolute bottom-[20%] left-[20%] p-2 bg-card-dark border border-white/10 rounded-lg shadow-lg animate-bounce delay-700 z-0 opacity-80">
                        <span className="material-symbols-outlined text-teal-500 text-2xl">location_on</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
