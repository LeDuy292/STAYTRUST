import React from 'react';

const HomeFooter = () => {
    return (
        <footer className="bg-[#0b2530] text-slate-300 border-t border-slate-800">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 lg:px-40 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-white">
                            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                <span className="material-symbols-outlined text-2xl">other_houses</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight">Staytrust</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Discover the perfect place to stay with confidence. We verify every listing to ensure your peace of mind.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <img
                                        src={`https://cdn.simpleicons.org/${social === 'facebook' ? 'facebook' : social === 'twitter' ? 'x' : social === 'linkedin' ? 'linkedin' : 'instagram'}/white`}
                                        alt={social}
                                        className="w-4 h-4 opacity-70 hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Discovery</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>New Listings</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Featured Properties</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Search by Map</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Districts Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Press & News</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to get the latest listings and news.</p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 px-4 pl-11 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500"
                                />
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">mail</span>
                            </div>
                            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 bg-[#081b23]">
                <div className="container mx-auto px-4 lg:px-40 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-xs">© 2024 Staytrust Inc. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="text-slate-500 hover:text-emerald-400 text-xs font-medium transition-colors">Privacy</a>
                            <a href="#" className="text-slate-500 hover:text-emerald-400 text-xs font-medium transition-colors">Terms</a>
                            <a href="#" className="text-slate-500 hover:text-emerald-400 text-xs font-medium transition-colors">Sitemap</a>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors text-lg">language</span>
                            <span className="text-slate-400 group-hover:text-white text-xs font-bold transition-colors">English (US)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;
