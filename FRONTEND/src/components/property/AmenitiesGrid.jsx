import React from 'react';

const AmenitiesGrid = () => {
    const amenities = [
        { icon: 'wifi', label: 'Gigabit Fiber' },
        { icon: 'pool', label: 'Infinity Pool' },
        { icon: 'home_iot_device', label: 'Smart Access' },
        { icon: 'fitness_center', label: 'Private Gym' },
    ];

    return (
        <section className="rounded-3xl glass-dark p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-white">AI-Verified Amenities</h3>
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-bold text-teal-400 border border-teal-500/20 uppercase">Trust Score: 98%</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {amenities.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-800/30 text-center transition-colors hover:bg-slate-700/50 border border-white/5 group">
                        <span className="material-symbols-outlined text-teal-400 text-3xl group-hover:scale-110 transition-transform group-hover:text-teal-300">{item.icon}</span>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AmenitiesGrid;
