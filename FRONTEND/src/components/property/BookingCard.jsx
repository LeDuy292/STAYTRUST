import React from 'react';

const BookingCard = () => {
    return (
        <div className="sticky top-28 glass-dark backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-slate-700/50">
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-400">Monthly Rent</p>
                    <h2 className="text-4xl font-bold text-white">$450 <span className="text-lg font-normal text-slate-400">/mo</span></h2>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-teal-500/10 px-2 py-1 text-xs font-bold text-teal-400 border border-teal-500/20">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    PRICE LOCK
                </div>
            </div>

            <div className="space-y-4 pb-6 border-b border-slate-700/50">
                <div className="flex justify-between text-sm text-slate-300">
                    <span className="text-slate-400">Security Deposit</span>
                    <span className="font-bold text-white">$450</span>
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                    <span className="text-slate-400">Utility Fee (Est.)</span>
                    <span className="font-bold text-white">$30/mo</span>
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                    <span className="text-slate-400">Staytrust Fee</span>
                    <span className="font-bold text-teal-400">Included</span>
                </div>
            </div>

            <div className="py-6 space-y-4">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Move-in Date</label>
                    <div className="flex items-center justify-between rounded-xl bg-slate-800/50 p-3 border border-slate-700/50 text-white cursor-pointer hover:border-teal-500/30 transition-colors hover:bg-slate-800">
                        <span className="text-sm">October 15, 2023</span>
                        <span className="material-symbols-outlined text-teal-400">calendar_month</span>
                    </div>
                </div>
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 py-4 text-center text-base font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-[1.02] transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                Instant Book Now
            </button>
            <p className="mt-4 text-center text-[10px] text-slate-500 font-medium">Free cancellation within 48 hours</p>
        </div>
    );
};

export default BookingCard;
