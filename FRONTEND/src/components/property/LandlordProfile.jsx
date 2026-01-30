import React from 'react';

const LandlordProfile = () => {
    return (
        <div className="rounded-3xl glass-dark p-6 border border-slate-700/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Verified Host</h3>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div
                        className="h-16 w-16 rounded-full bg-cover bg-center border-2 border-teal-500"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0gOa-lmoV0ezcxjAYn4BTLar7xFOIFRg9cfUA4VXNl7qL6hewrqo42__t-s1dO8DXOdX43JbKVNtIA0S1ECtjR5bYzRoNreOrUehQEFPnjCXUUs8UKzm6s_u3eAXa9k8ePSRsGW6Xcsna4scEKZISaQbt-AbixQj4_vkvCakYJlPCmuYb9sKbWh2hnq7NrZB0theLodclqKh7fSxjxN7ROcknS9IUSyPeVkP4gGyiVwrdQ6ys0TZTlHZlyuCvu824FCqfDsxraHrO")' }}
                    ></div>
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg">
                        <span className="material-symbols-outlined text-xs font-bold">check</span>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white">Leila Nguyen</h4>
                    <div className="flex items-center gap-1 text-sm text-teal-400">
                        <span className="material-symbols-outlined text-xs filled">star</span>
                        <span className="font-bold">4.98</span>
                        <span className="text-slate-400 font-normal ml-1">(124 reviews)</span>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Trust Score</span>
                    <span className="font-bold text-teal-400">High</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-700/50 overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-teal-500 to-emerald-400"></div>
                </div>
            </div>

            <button
                onClick={() => window.location.href = '/chat'}
                className="mt-6 w-full rounded-xl border border-slate-600/50 py-3 text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
            >
                Contact Host
            </button>
        </div>
    );
};

export default LandlordProfile;
