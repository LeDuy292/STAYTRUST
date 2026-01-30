import React from 'react';

const FeaturedListings = () => {
    const listings = [
        {
            id: 1,
            title: "Ocean View Suite",
            rating: "4.96",
            reviews: "128",
            location: "My Khe Beach, Son Tra",
            price: "12.5M",
            features: ["2 Beds", "2 Baths", "85m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            id: 2,
            title: "Minimalist Studio",
            rating: "4.85",
            reviews: "84",
            location: "Hai Chau District",
            price: "8.2M",
            features: ["Studio", "1 Bath", "45m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        },
        {
            id: 3,
            title: "Luxury Penthouse",
            rating: "5.0",
            reviews: "42",
            location: "Dragon Bridge View",
            price: "25.0M",
            features: ["3 Beds", "3 Baths", "120m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            id: 4,
            title: "Cozy Beach Apt",
            rating: "4.75",
            reviews: "56",
            location: "An Thuong Area",
            price: "9.5M",
            features: ["1 Bed", "1 Bath", "50m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        },
        {
            id: 5,
            title: "Modern Garden House",
            rating: "4.92",
            reviews: "201",
            location: "Cam Le District",
            price: "15.0M",
            features: ["3 Beds", "2 Baths", "150m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG"
        },
        {
            id: 6,
            title: "Riverside Smart Apt",
            rating: "4.88",
            reviews: "92",
            location: "Han River, Son Tra",
            price: "11.0M",
            features: ["2 Beds", "2 Baths", "75m²"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQXTrkid4p9QafbjNtls3gXvCxORQM6zB2fn_X9y8MZtWxcNvQrIj9Y8BYcbInMUD0Bbri5AJMb08MJMSVCrEpB3mdSd9V-M02jMClxGm85iX8Tfu1BTdK_ef0UG4k3i4quu9BVRsLik0HdAFinznxw-y6jDS7fLNXIIjIg0_Tya4qThzHYcpOD0fRtzUTjGAhLuBsaWQdz3aShCXCK839_REucwnYdDc5gORaornDb9Hwy0tdoT1P9r6AJ_LIp3I3PzHiD3puVOV"
        }
    ];

    return (
        <section className="relative w-full py-24 bg-gradient-to-b from-[#0b2530] to-[#101922] overflow-hidden -mt-1">
            <div className="container mx-auto px-4 lg:px-40 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left max-w-2xl">
                        <span className="text-teal-400 font-bold tracking-wider uppercase text-xs lg:text-sm mb-3 block opacity-80">Curated Selection</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Listings</span></h2>
                        <p className="text-slate-400 text-lg">
                            Discover premium listings in Da Nang's most sought-after neighborhoods.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="px-5 py-2 rounded-full bg-teal-500/10 border border-teal-500/50 text-teal-300 text-sm font-semibold hover:bg-teal-500/20 transition-colors">All</button>
                        <button className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-colors">Studio</button>
                        <button className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-colors">Apartment</button>
                        <button className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-colors">Penthouse</button>
                        <button className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-colors">Near Beach</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((item, idx) => (
                        <div key={idx} className="glass-dark rounded-2xl overflow-hidden glass-card-hover group border border-slate-700/30">
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/90 to-transparent opacity-60"></div>
                                <div className="absolute top-4 left-4 bg-teal-500/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-teal-400/30 shadow-lg">
                                    <span className="material-symbols-outlined text-[14px] text-white">smart_toy</span>
                                    <span className="text-xs font-bold text-white uppercase tracking-wide">Verified by AI</span>
                                </div>
                                <div className="absolute top-4 right-4 bg-slate-900/40 backdrop-blur-md p-2 rounded-full hover:bg-red-500/80 transition-colors cursor-pointer border border-white/10">
                                    <span className="material-symbols-outlined text-white text-[18px]">favorite</span>
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                                    <span className="material-symbols-outlined text-yellow-400 text-[18px] filled">star</span>
                                    <span className="font-bold text-sm">{item.rating}</span>
                                    <span className="text-slate-300 text-xs ml-1">({item.reviews} reviews)</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                                        <p className="text-slate-400 text-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px] text-teal-400">location_on</span>
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 my-4">
                                    {item.features.map((feat, fIdx) => (
                                        <span key={fIdx} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700/50">{feat}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-col">
                                        <span className="text-slate-400 text-xs font-medium uppercase">Monthly Rent</span>
                                        <span className="text-white font-bold text-lg">{item.price} <span className="text-slate-400 text-sm font-normal">VND</span></span>
                                    </div>
                                    <button
                                        onClick={() => window.location.href = `/property/${item.id || 1}`}
                                        className="px-4 py-2 bg-gradient-to-r from-primary to-blue-600 hover:to-blue-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-transparent border border-teal-500/50 hover:bg-teal-500/10 text-teal-400 text-sm font-bold rounded-lg transition-all uppercase tracking-wider">
                        View All Properties
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedListings;
