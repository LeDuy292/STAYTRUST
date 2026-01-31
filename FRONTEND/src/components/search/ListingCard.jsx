import React from 'react';

const ListingCard = ({ listing }) => {
    return (
        <div className="bg-[#193331]/70 backdrop-blur-md border border-[#13ecda]/10 rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(19,236,218,0.2)] transition-all duration-300">
            {/* Image Section */}
            <div className="relative h-48">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${listing.imageUrl}')` }}
                    role="img"
                    aria-label={listing.imageAlt}
                ></div>

                {listing.verified && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#13ecda]/20 backdrop-blur border border-[#13ecda]/40 rounded-lg flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#13ecda] fill-[1]">verified</span>
                        <span className="text-[10px] font-bold text-[#13ecda] uppercase tracking-wider">AI Verified</span>
                    </div>
                )}

                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#102220]/40 backdrop-blur flex items-center justify-center hover:bg-[#13ecda]/20 transition-colors">
                    <span className="material-symbols-outlined text-lg text-white">favorite</span>
                </button>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-base leading-tight text-white">{listing.title}</h3>
                        <p className="text-xs text-[#92c9c5] flex items-center gap-1 mt-0.5">
                            <span className="material-symbols-outlined text-xs">location_on</span> {listing.location}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-[#13ecda] font-bold text-lg leading-none">{listing.price}<span className="text-[10px] text-white/60 font-normal">/mo</span></p>
                        <p className="text-[10px] text-[#92c9c5]">~{listing.priceVND}</p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex gap-4 mb-4 py-2 border-y border-[#13ecda]/20">
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#13ecda]">bed</span>
                        <span className="text-[11px] text-[#92c9c5]">{listing.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#13ecda]">square_foot</span>
                        <span className="text-[11px] text-[#92c9c5]">{listing.sqft}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#13ecda] border rounded-full p-0.5">bolt</span>
                        <span className="text-[11px] text-[#92c9c5]">{listing.match}% Match</span>
                    </div>
                </div>

                <button
                    onClick={() => window.location.href = `/property/${listing.id}`}
                    className="w-full py-2.5 bg-[#13ecda] text-[#102220] font-bold rounded-lg text-sm transition-colors hover:bg-[#10d4c4]"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ListingCard;
