import React, { useState } from 'react';

const ChatPage = () => {
    // Mock state for active chat to demonstrate interactivity (optional enhancement)
    const [activeChat, setActiveChat] = useState("Marcus");

    return (
        <div className="relative bg-background-dark text-white min-h-screen flex flex-col overflow-hidden font-display transition-colors duration-500">
            {/* Dynamic Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle at 15% 50%, rgba(19, 127, 236, 0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.08), transparent 25%)"
                }}
            ></div>

            {/* Custom Styles */}
            <style>{`
                .glass-panel {
                    backdrop-filter: blur(16px);
                    background: rgba(26, 30, 46, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                }
                .glass-sidebar {
                    backdrop-filter: blur(20px);
                    background: rgba(16, 25, 34, 0.7);
                    border-right: 1px solid rgba(255, 255, 255, 0.05);
                }
                .message-bubble-user {
                    background: linear-gradient(135deg, #137fec 0%, #2563eb 100%);
                    box-shadow: 0 4px 15px rgba(19, 127, 236, 0.2);
                }
                .message-bubble-other {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>

            <header className="flex items-center justify-between border-b border-white/5 px-6 lg:px-8 py-4 glass-sidebar z-50">
                <div className="flex items-center gap-4">
                    <a href="/" className="size-8 text-primary hover:scale-105 transition-transform">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Staytrust</h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(19,127,236,0.1)]">
                        <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Identity Verified</span>
                    </div>
                    <div className="h-6 w-px bg-white/10 hidden md:block"></div>
                    <div className="flex items-center gap-4">
                        <button className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="size-10 rounded-full border border-white/10 p-0.5 cursor-pointer hover:border-primary/50 transition-colors">
                            <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWXvTVfr9xlZyLbn-40U-vUK2EI4MCUxHiUmhTFyad_CZjL0OAnCTqjZqyCXfOXNbt6oJ01VQUue8MidX-OcBX24xgKN7i0CyDeQWNz2fVWHY6R59MYIgOzh7VS8S5Ytq0NVmybuqSeb6JUJjhfvaA7WRQNqXLyDtS1P-Tap20RcrOrnm5_vFhYC7VnJ9i1XKgs5IWgK1XcctGQN-RwE3S-Ee5lgJTT0Cgn60SSVGKIqGy6QGEfubAZY8GeQU6bft3Tfx0HTaznK9" alt="Profile" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden relative z-10">
                {/* Sidebar */}
                <aside className="w-80 glass-sidebar flex flex-col shrink-0">
                    <div className="p-6 pb-2">
                        <h1 className="text-lg font-bold mb-1 text-white">Messages</h1>
                        <div className="flex items-center justify-between">
                            <p className="text-white/40 text-xs font-medium">Verified Landlords Only</p>
                            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-md">3 Active</span>
                        </div>
                        <div className="mt-4 relative">
                            <input type="text" placeholder="Search conversations..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors pl-9" />
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-white/30 text-sm">search</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-1 mt-2 pb-4">
                        {/* Active Chat Item */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 cursor-pointer relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
                            <div className="relative">
                                <img className="size-12 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIYgOSeECcuR-jpiGLnq5LN9BrabCpBwDpggKAMcp8vbXhDAjGpQK1IjSurEoRrfJaGgJdsdqwJHlqXV2McybG495SwWs8IF-FAMcuj5l9pFrN8aIu2J5Ujd_xMH5-hgb1bKf_2U0maoGAy4dKNOAf5D0ZSTLSUVdEeo8jdKcsPmuW1rUSx8ma3EWcOFw28OU0OPTjnL0FGH2eUslcBuZd-xuq8HjjnqcMIGT6C3ssov18Qz80clEJRd_QkXg-Tj6tgYNhQ_yvGw1f" alt="Marcus" />
                                <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#151c27]"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h3 className="font-bold text-sm text-white">Marcus</h3>
                                    <span className="text-[10px] text-white/40 font-medium">2m</span>
                                </div>
                                <p className="text-xs text-white/80 truncate font-medium">Yes, that sounds great. Is the...</p>
                            </div>
                        </div>

                        {/* Inactive Chat Item */}
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group border border-transparent hover:border-white/5">
                            <div className="relative">
                                <img className="size-12 rounded-full border border-white/10 object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZy7OkVj-y_sXFYzXYm3Guj1hwei_Ofn24cdLPTfmKqA8uY9eBdiokO-37E68pKp_AL29sjOG8Lpt5BjILCXGcZ-rXBc8cYK3npVnZfnbwNAkbBb8WaN7_uhxctGPMxTI2pQkbLTAlkkjCLijwOZJGlnYhWhl4NWaB5YQhR97BTI_PPPHL0a_RFllhLvclj8V7r-FGgNlzxKudez5wVvcz6LjotVwvjBS7_6_EWInEwhRPUva3X2_rggz7mk-ys7nXFoXErSOLRXR4" alt="Sarah" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h3 className="font-bold text-sm text-white/70 group-hover:text-white transition-colors">Sarah</h3>
                                    <span className="text-[10px] text-white/30">1h</span>
                                </div>
                                <p className="text-xs text-white/40 truncate group-hover:text-white/60 transition-colors">Studio Loft • Viewing?</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group border border-transparent hover:border-white/5">
                            <div className="relative">
                                <img className="size-12 rounded-full border border-white/10 object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJR7sAQ0H17AqNva7gdD3vsjkvwEIBgQT9NMhr3EQheP-9vJh7AtWdHpXTZlNekB_7wQaB72FKoC4jN98-C97xls0qZLRZCj16ZQUqWfpImm-kOksWCtDQ6XeRe0CtWM_nfTnA8WM-Tr468PU_ymkUy89ad1aO0kSQ5DAmEziGnobjzvGZ3FCjlfCMJdHm3NH9wUV38lqzuTNoaNkJE2BD1RB-eyUU8SR3-A4G_p3f9_2ouQXqcBzv_R_G0unqzCNH-7Fz8Wl-ZRii" alt="Elena" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h3 className="font-bold text-sm text-white/70 group-hover:text-white transition-colors">Elena</h3>
                                    <span className="text-[10px] text-white/30">Yesterday</span>
                                </div>
                                <p className="text-xs text-white/40 truncate group-hover:text-white/60 transition-colors">Garden Suite • Inquiry</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <section className="flex-1 flex flex-col relative w-full">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)" }}></div>

                    {/* Chat Header */}
                    <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between glass-panel z-10 sticky top-0">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h2 className="font-bold text-lg text-white">Marcus</h2>
                                    <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-white/40">
                                    <span className="material-symbols-outlined text-[14px]">apartment</span>
                                    <span>London Flat (#7829)</span>
                                    <span className="mx-1 h-3 w-px bg-white/10"></span>
                                    <span className="text-green-400">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 transition-all text-sm font-bold shadow-sm">
                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                                Book Viewing
                            </button>
                            <div className="h-9 w-px bg-white/10 mx-2"></div>
                            <div className="flex bg-white/5 rounded-lg p-1 border border-white/5">
                                <button className="p-2 rounded-md hover:bg-white/10 transition-colors text-white/60 hover:text-white"><span className="material-symbols-outlined text-sm">phone</span></button>
                                <button className="p-2 rounded-md hover:bg-white/10 transition-colors text-white/60 hover:text-white"><span className="material-symbols-outlined text-sm">videocam</span></button>
                                <button className="p-2 rounded-md hover:bg-white/10 transition-colors text-white/60 hover:text-white"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar relative z-0">
                        <div className="mx-auto max-w-2xl">
                            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4 text-center md:text-left border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full shrink-0 mx-auto md:mx-0 border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-2xl">security</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-base font-bold text-white mb-1">Identity Verified Conversation</p>
                                    <p className="text-sm text-white/60 leading-relaxed">Both parties have completed KYC verification. For your safety, never transfer money outside of the Staytrust platform.</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto w-full space-y-8">
                            {/* Message Group: Marcus */}
                            <div className="flex items-end gap-3 group">
                                <img className="size-8 rounded-full shrink-0 mb-1 border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPEgeUe0w11mdaeQqmSmdN2W_KbRkcj0lj8h47M6VG2LlDL8usyuIbQcuNTVfQWj2dfdN2BOb9FC2haflDGszSBvxeZnuau8GBeqPl0Xu_XW7jamzzgyoWAMy4S07H2C3JrsyS3OK9ZjYRFsfW4Rfxl0P5scRLHy-9lPxovFPNWnmUbKQgq8z-KoDuHZb-PIr0YXlnldT5d3W-kHcKGpC7l6_HC34ZWcPWLs_jBVCZhwlo3ExiZgwBgZeVNnM8X5pSDOPLIx1F8P1W" alt="Marcus" />
                                <div className="space-y-1 max-w-[70%]">
                                    <div className="flex items-baseline gap-2 ml-1">
                                        <span className="font-bold text-xs text-white/80">Marcus</span>
                                        <span className="text-[10px] text-white/30">2:30 PM</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="message-bubble-other px-5 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed text-white/90 shadow-sm">
                                            Hi! The London Flat is definitely available from next month. It was recently renovated with modern appliances.
                                        </div>
                                        <div className="message-bubble-other px-5 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed text-white/90 shadow-sm">
                                            Would you like to schedule a viewing? I have some slots open next Tuesday.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message Group: User */}
                            <div className="flex items-end gap-3 justify-end group">
                                <div className="space-y-1 max-w-[70%]">
                                    <div className="flex items-baseline gap-2 justify-end mr-1">
                                        <span className="text-[10px] text-white/30">2:35 PM</span>
                                        <span className="font-bold text-xs text-white/80">Me</span>
                                    </div>
                                    <div className="message-bubble-user px-5 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed font-medium text-white">
                                        Yes, that sounds great. Is the apartment furnished? I'm looking for a place I can move into immediately without buying furniture.
                                    </div>
                                    <div className="flex justify-end gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] text-white/30">Seen</span>
                                        <span className="material-symbols-outlined text-[10px] text-primary">done_all</span>
                                    </div>
                                </div>
                                <img className="size-8 rounded-full shrink-0 mb-1 border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWobLDUH413AraxbEKUZVXM0gKICZ2vchi90Jy5suStqex8tCB_Pvv0514e3E8QDpdF2gzGV3_SrYl0CKBS1vt2JfAUwTJiC4xcmGW6llI4RAZvFtMYn1y9mSrJwmB8JOwOqN57PeiQJNBY1MPLRnjHLDiQCsuiQM2os_dch3yLzo6MR5iGKR9XAIWIiibyeW26Wj5xy96d5wdYIqI-XLhU_txb_eQ9D1JxAHXunwEnYIpcp6LxWQ4VrS8H_PnI2bz88uS0K6YG65s" alt="Me" />
                            </div>

                            {/* AI Tip Bubble */}
                            <div className="flex justify-center my-6">
                                <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-xs text-white/70 shadow-lg backdrop-blur-sm animate-fade-in-up">
                                    <div className="size-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                        <span className="material-symbols-outlined text-[10px] text-white">smart_toy</span>
                                    </div>
                                    <span className="font-medium bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">AI Tip: Ask about the utility bill cap for furnished rentals.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 glass-panel border-t border-white/5 relative z-20">
                        <div className="max-w-4xl mx-auto w-full">
                            {/* AI Suggestions */}
                            <div className="mb-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-sm text-primary animate-pulse">automotion</span>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Smart Suggestions</span>
                                </div>
                                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar mask-linear-fade">
                                    <button className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all text-left min-w-[180px] group whitespace-nowrap">
                                        <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                                            Utilities Included?
                                        </span>
                                    </button>
                                    <button className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left min-w-[180px] group whitespace-nowrap">
                                        <span className="text-xs font-bold text-white/60 group-hover:text-white flex items-center gap-1.5 transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">wifi</span>
                                            Average Internet Speed?
                                        </span>
                                    </button>
                                    <button className="flex flex-col items-start gap-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left min-w-[180px] group whitespace-nowrap">
                                        <span className="text-xs font-bold text-white/60 group-hover:text-white flex items-center gap-1.5 transition-colors">
                                            <span className="material-symbols-outlined text-[14px]">pets</span>
                                            Pet Policy Details
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative bg-[#1a2632] rounded-xl border border-white/10 p-2 flex items-center gap-3 shadow-2xl">
                                    <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                                        <span className="material-symbols-outlined">add_circle</span>
                                    </button>
                                    <input className="bg-transparent border-none focus:ring-0 flex-1 text-sm text-white placeholder-white/30 h-10" placeholder="Type a message to Marcus..." type="text" />
                                    <div className="flex items-center gap-1 pr-1 border-r border-white/10 mr-1">
                                        <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Attach Document">
                                            <span className="material-symbols-outlined text-sm">attach_file</span>
                                        </button>
                                        <button className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Voice Note">
                                            <span className="material-symbols-outlined text-sm">mic</span>
                                        </button>
                                    </div>
                                    <button className="bg-primary hover:bg-blue-600 text-white p-3 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                </div>
                            </div>
                            <div className="text-center mt-3 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[10px] text-white/30">lock</span>
                                <p className="text-[10px] text-white/30">End-to-end encrypted. AI assistance active.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ChatPage;
