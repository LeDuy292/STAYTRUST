import React from 'react';

const MapSection = () => {
    return (
        <section className="absolute inset-0 bg-[#0d1a19]">
            {/* Map Placeholder Background */}
            <div
                className="w-full h-full bg-cover bg-center opacity-50"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgxQy4FgCs-ViNORaQTrRKng2HArXp-yT6A85QODzAuKWN5-3QQWrnDNXYngHiTHxP6xBzXz1gMpQpVe65oz4NEzWj_vVYvrVbFlCGJyNYhrQPtODUzTeFGp_Gq4I_CADP1rY1HjQc46AGTt1DCBbyy7O6uo4W0xxXnkvbglLikDGazyb9DVcVeyLzZ1wrAXb66OIGsSHa1Wv82psBa3OwkuUeWx9PQUSMy_J3IQShLnI7Vne9BBsHUsAGBb6JSYimsim1xQJMZuYa")' }} // Dark stylized map
            ></div>

            {/* Pulsing Map Pins (Simulation) */}
            <div className="absolute top-[30%] left-[40%] group cursor-pointer z-10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute animate-ping h-8 w-8 rounded-full bg-[#13ecda] opacity-40"></div>
                    <div className="relative h-6 w-6 bg-[#13ecda] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(19,236,218,0.6)]">
                        <span className="text-[10px] font-bold text-[#102220]">$650</span>
                    </div>
                </div>
            </div>

            <div className="absolute top-[55%] left-[60%] group cursor-pointer z-10">
                <div className="relative flex items-center justify-center">
                    <div className="absolute animate-ping h-8 w-8 rounded-full bg-[#13ecda] opacity-20"></div>
                    <div className="relative h-6 w-6 bg-[#13ecda] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(19,236,218,0.6)]">
                        <span className="text-[10px] font-bold text-[#102220]">$820</span>
                    </div>
                </div>
            </div>

            {/* Quick Filter Chips Overlay */}
            <div className="absolute top-6 left-6 right-6 z-30 flex gap-2 overflow-x-auto no-scrollbar">
                {[
                    { icon: 'waves', label: 'Beachfront' },
                    { icon: 'workspace_premium', label: 'High-tech' },
                    { icon: 'home_work', label: 'Long-term' },
                    { icon: 'percent', label: 'Monthly Discount' }
                ].map((chip, idx) => (
                    <button key={idx} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#102220]/80 backdrop-blur px-4 border border-[#13ecda]/20 hover:border-[#13ecda]/50 transition-colors">
                        <span className="material-symbols-outlined text-[#13ecda] text-sm">{chip.icon}</span>
                        <p className="text-white text-xs font-medium">{chip.label}</p>
                    </button>
                ))}
            </div>

            {/* Floating Map Controls */}
            <div className="absolute right-6 bottom-32 z-30 flex flex-col gap-2">
                <button className="w-10 h-10 bg-[#102220]/80 backdrop-blur rounded-xl border border-[#13ecda]/20 flex items-center justify-center hover:bg-[#13ecda]/20 text-white transition-colors">
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button className="w-10 h-10 bg-[#102220]/80 backdrop-blur rounded-xl border border-[#13ecda]/20 flex items-center justify-center hover:bg-[#13ecda]/20 text-white transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <button className="w-10 h-10 bg-[#102220]/80 backdrop-blur rounded-xl border border-[#13ecda]/20 flex items-center justify-center hover:bg-[#13ecda]/20 text-white transition-colors mt-2">
                    <span className="material-symbols-outlined">my_location</span>
                </button>
            </div>

            {/* Search as I move map (Center Bottom) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#102220]/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 border border-[#13ecda]/20 shadow-2xl z-30">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[#13ecda] animate-pulse"></div>
                    <span className="text-white text-xs font-medium">Search as I move the map</span>
                </div>
            </div>

            {/* Map Layers Toggle */}
            <div className="absolute bottom-6 right-6 z-30">
                <button className="bg-[#102220] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-2xl text-xs font-bold border border-[#293837] hover:border-[#13ecda]/50 transition-all">
                    <span className="material-symbols-outlined text-sm">layers</span>
                    <span>Dark Satellite</span>
                </button>
            </div>
        </section>
    );
};

export default MapSection;
