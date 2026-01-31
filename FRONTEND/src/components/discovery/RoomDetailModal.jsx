import React from 'react';

const RoomDetailModal = ({ listing, onClose }) => {
    if (!listing) return null;

    return (
        <div className="absolute inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative animate-scaleIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Left: Image Gallery (Mock) */}
                <div className="w-full md:w-1/2 bg-slate-200 h-64 md:h-auto relative group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop"
                        alt={listing.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-black/50 text-white px-2 py-1 rounded-md text-xs font-bold backdrop-blur-sm">
                            <span className="material-symbols-outlined text-[10px] align-middle mr-1">photo_library</span>
                            5 Photos
                        </span>
                    </div>
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
                            Verified Stay
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                            <span className="material-symbols-outlined text-base filled text-yellow-500">star</span>
                            <span className="font-bold text-slate-800">{listing.rating}</span>
                            <span>(128 reviews)</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{listing.title}</h2>
                    <p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">location_on</span>
                        {listing.location}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <span className="bg-blue-100 text-blue-600 p-2 rounded-full material-symbols-outlined text-sm">wifi</span>
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-bold text-sm">Free Wifi</span>
                                <span className="text-slate-400 text-xs">High speed</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <span className="bg-orange-100 text-orange-600 p-2 rounded-full material-symbols-outlined text-sm">ac_unit</span>
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-bold text-sm">AC</span>
                                <span className="text-slate-400 text-xs">Installed</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <span className="bg-emerald-100 text-emerald-600 p-2 rounded-full material-symbols-outlined text-sm">local_parking</span>
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-bold text-sm">Parking</span>
                                <span className="text-slate-400 text-xs">Motorbike</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <span className="bg-purple-100 text-purple-600 p-2 rounded-full material-symbols-outlined text-sm">security</span>
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-bold text-sm">Security</span>
                                <span className="text-slate-400 text-xs">24/7</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t pt-6 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs font-bold uppercase">Price per month</span>
                            <span className="text-2xl font-extrabold text-blue-600">{listing.price}</span>
                        </div>
                        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 text-sm">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailModal;
