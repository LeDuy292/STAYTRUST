import React from 'react';

const VirtualTourViewer = () => {
    return (
        <section className="group relative overflow-hidden rounded-3xl bg-black aspect-video shadow-2xl border border-slate-700/50">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpICKGfnG96hq-qTgStwhoWWPdvse_PIrY8IvbEbhfUTfE67PgdfSvFhH9Hi_Cw1FoVIyEtKyL9AyT7Ml5TDIU0sbF5AQrmXr2As5F3oZ34obxkCL9loXk0kIb1Te85aKPAf3K0mBwa1bA5SuaLit4VigrbbLj6_ruFgHTsWsG9u4H3TE-Rj6MruVqbaCm7GfdYYDYeCdACedbGb4gx8mi_X0TUaK2nO1hORlc3peWzM_4zg5ts5Eb6wbaP3ORNGZhChMzF6U9k0HN")' }}
            ></div>

            {/* HUD Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <div className="flex justify-between items-start">
                    <div className="rounded-full bg-slate-900/60 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Live 3D View</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white hover:bg-teal-500 hover:text-white transition-all">
                            <span className="material-symbols-outlined">fullscreen</span>
                        </button>
                        <button className="p-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white hover:bg-teal-500 hover:text-white transition-all">
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-6 pb-4">
                    <div className="flex flex-col items-center gap-2 group/ar cursor-pointer">
                        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white group-hover/ar:scale-105 group-hover/ar:bg-teal-500 group-hover/ar:text-white transition-all">
                            <span className="material-symbols-outlined text-4xl">view_in_ar</span>
                        </button>
                        <p className="text-[10px] font-bold uppercase tracking-tighter text-white group-hover/ar:text-teal-400 transition-colors">Enter AR</p>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold text-white drop-shadow-md">Azure Ocean Suite</h1>
                        <div className="flex items-center gap-2 text-teal-300">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            <span className="text-sm shadow-black drop-shadow-sm">Võ Nguyên Giáp, Son Tra, Da Nang</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-2 rounded-xl border border-white/10">
                        <button className="p-1 text-white hover:text-teal-400 transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
                        <div className="w-px h-4 bg-white/20"></div>
                        <button className="p-1 text-white hover:text-teal-400 transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
                        <div className="w-px h-4 bg-white/20"></div>
                        <button className="p-1 text-white hover:text-teal-400 transition-colors"><span className="material-symbols-outlined">360</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualTourViewer;
