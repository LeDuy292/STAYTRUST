import React from 'react';

const RoomCard = ({ price, rating, title, specs, image, alt }) => {
    return (
        <div className="flex-none w-[320px] snap-start group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    data-alt={alt}
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary/90 text-background-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">verified</span> AI-Verified
                </div>
            </div>
            <div className="px-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{price} <span className="text-sm font-normal text-slate-500 dark:text-[#9db8b6]">/ mo</span></h3>
                    <div className="flex items-center text-primary text-sm font-bold">
                        <span className="material-symbols-outlined text-[18px]">star</span> {rating}
                    </div>
                </div>
                <p className="text-white/90 font-medium line-clamp-1">{title}</p>
                <p className="text-slate-400 dark:text-slate-300 text-sm mt-1">{specs}</p>
            </div>
        </div>
    );
};

export default RoomCard;
