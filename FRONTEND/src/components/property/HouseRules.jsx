import React from 'react';

const HouseRules = () => {
    const rules = [
        { icon: 'smoke_free', label: 'No smoking inside the apartment' },
        { icon: 'pets', label: 'Small pets allowed (deposit required)' },
        { icon: 'schedule', label: 'Check-in: After 2:00 PM' },
        { icon: 'groups', label: 'Maximum 4 guests per stay' },
    ];

    return (
        <section className="space-y-4">
            <h3 className="text-xl font-bold px-2 text-white">House Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-2xl bg-slate-800/30 p-4 border border-slate-700/50 hover:border-teal-500/30 transition-colors hover:bg-slate-800/50">
                        <span className="material-symbols-outlined text-slate-400">{rule.icon}</span>
                        <p className="text-sm text-slate-300">{rule.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HouseRules;
