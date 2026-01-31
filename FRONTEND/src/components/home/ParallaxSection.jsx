import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParallaxSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[80vh] min-h-[700px] bg-[#0b2530] overflow-hidden border-t border-slate-800/50 parallax-wrapper flex items-center justify-center">
            <div className="parallax-bg-layer">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAt-lxBZI_nmchHwHSoeJ-6JCAaYe7iawaxHIqtRrBw9AKpzgp9jRuICfABRuzf7NScM-JXAznZoogkYWmK2repoVGChD4YpwiCvH4SYlCgERzU7k2CVpFMY99s2YId-soDifqVwfGUrihpRmOhDgt3nnOPulYxR2zBAnV7VoJv9b7CjHSIuS773ymLhpyy5D7af8OvF0h6ZWPNZmTpzESrMtAQZArS_ATdDv9r2VrMfpbAQrXXvdtXd1URpD0TXHsY8xuDDQkC9aG')",
                        transform: "scale(1.05)"
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b2530] via-transparent to-[#0b2530] opacity-80"></div>
                <div className="absolute inset-0 bg-[#0b2530]/20 mix-blend-multiply"></div>
            </div>

            {/* Floating Glass Layer 1 - Left */}
            <div className={`absolute top-[25%] left-[5%] lg:left-[12%] z-10 hidden md:block floating-glass-layer-1 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
                <div className="glass-dark px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                        <span className="material-symbols-outlined text-xl">location_city</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">District</p>
                        <p className="text-white font-bold text-sm">Son Tra Peninsula</p>
                    </div>
                </div>
            </div>

            {/* Floating Glass Layer 2 - Right */}
            <div className={`absolute bottom-[25%] right-[5%] lg:right-[12%] z-10 hidden md:block floating-glass-layer-2 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                <div className="glass-dark px-5 py-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-emerald-400 font-black text-xl leading-none">4.9</span>
                        <div className="flex text-yellow-400 text-[10px] mt-0.5">
                            <span className="material-symbols-outlined text-[10px] filled">star</span>
                            <span className="material-symbols-outlined text-[10px] filled">star</span>
                            <span className="material-symbols-outlined text-[10px] filled">star</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-slate-700"></div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Safety Index</p>
                        <p className="text-white font-bold text-sm">Excellent</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-40 relative z-20 flex flex-col items-center justify-center h-full text-center">
                <div className="mb-10 max-w-3xl">
                    <span
                        className={`inline-block py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/40 text-teal-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm ${isVisible ? 'animate-popIn' : 'opacity-0'}`}
                    >
                        Discover Da Nang
                    </span>
                    <h3
                        className={`text-4xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl tracking-tight leading-tight ${isVisible ? 'animate-popIn' : 'opacity-0'}`}
                        style={{ animationDelay: '150ms' }}
                    >
                        The Heart of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Central Vietnam</span>
                    </h3>
                    <p
                        className={`text-slate-200 text-lg lg:text-xl font-medium drop-shadow-lg max-w-2xl mx-auto leading-relaxed opacity-90 ${isVisible ? 'animate-popIn' : 'opacity-0'}`}
                        style={{ animationDelay: '300ms' }}
                    >
                        From the dragon bridge to pristine beaches, find your perfect view in a city that blends tradition with modernity.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/discovery')}
                    className={`cursor-pointer group relative overflow-hidden rounded-full px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-lg tracking-wide flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-400/50 ${isVisible ? 'animate-popIn' : 'opacity-0'}`}
                    style={{ animationDelay: '450ms' }}
                >
                    <span className="relative z-10">Discover All Districts</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300 relative z-10">arrow_forward</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        </section>
    );
};

export default ParallaxSection;
