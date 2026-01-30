import React, { useState } from 'react';

const TrendingProperties = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const properties = [
        {
            title: "Sunrise Ocean Condo",
            rating: "4.9",
            location: "My Khe Beach, Da Nang",
            price: "$450",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            title: "Riverside Loft",
            rating: "4.8",
            location: "Han River, Da Nang",
            price: "$550",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        },
        {
            title: "Skyline Penthouse",
            rating: "5.0",
            location: "Dragon Bridge View",
            price: "$950",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            title: "Cozy Beach Apt",
            rating: "4.75",
            location: "An Thuong Area",
            price: "$380",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        },
        {
            title: "Modern Green Villa",
            rating: "4.95",
            location: "Hoa Xuan, Da Nang",
            price: "$1200",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            title: "City Center Studio",
            rating: "4.6",
            location: "Hai Chau, Da Nang",
            price: "$300",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        }
    ];

    const totalPages = Math.ceil(properties.length / itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentProperties = properties.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section className="relative w-full py-24 bg-[#0b2530] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-40 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left max-w-2xl">
                        <span className="text-teal-400 font-bold tracking-wider uppercase text-xs lg:text-sm mb-3 block opacity-80">Hot Right Now</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Properties</span></h2>
                        <p className="text-slate-400 text-lg">Most viewed and highly rated stays this week.</p>
                    </div>

                    {/* Custom Pagination Control */}
                    <div className="flex items-center gap-3 bg-slate-800/30 p-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
                        <button
                            onClick={handlePrev}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>

                        <div className="w-32 h-1.5 bg-slate-700/50 rounded-full relative overflow-hidden">
                            <div
                                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${100 / totalPages}%`, left: `${(currentPage / totalPages) * 100}%` }}
                            ></div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProperties.map((prop, idx) => (
                        <div key={idx} className="w-full animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="relative h-[420px] rounded-2xl overflow-hidden group border border-slate-700/30 bg-[#101922]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${prop.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Verified</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 group-hover:bg-slate-900/60">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-bold text-lg leading-tight line-clamp-1">{prop.title}</h3>
                                        <div className="flex items-center gap-1 text-yellow-400 bg-black/20 px-1.5 py-0.5 rounded text-xs font-bold">
                                            <span className="material-symbols-outlined text-[14px] filled">star</span>
                                            {prop.rating}
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-xs mb-3 flex items-center gap-1 truncate">
                                        <span className="material-symbols-outlined text-[14px] text-teal-400">location_on</span>
                                        {prop.location}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                        <span className="text-emerald-400 font-bold text-lg">{prop.price}<span className="text-xs font-normal text-slate-400">/mo</span></span>
                                        <span className="material-symbols-outlined text-white hover:text-red-500 transition-colors cursor-pointer text-xl">favorite_border</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingProperties;
