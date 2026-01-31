import React from 'react';

const LocationPreview = () => {
    return (
        <div className="overflow-hidden rounded-3xl glass-dark border border-slate-700/50">
            <div
                className="h-32 w-full bg-cover bg-center grayscale contrast-125 opacity-60"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaqM5lI3_qGZMJPg9KHNDRpm0UqJP2SYs0RBeIeZLRSo7aW73hlp4sRSxz7BDtv_QTMlQJDTahlbi1qRmL94uXoUn1I0yiwDZh2Mt1mphQOXX7i20MruPVs3DCQ7maTHTuKQJ15iJomXckQqKEHU8guY9DCUWj4fOtmHWJyLooAy3aoOFE1iKd9Nwn6vw7ZHY9MyEU6y9wywEBADK90ECSWdtbk8l_RRIkPYSa0OdaO4_ULxwC2MalP3728NoMee7w9B6LLm-9p90U")' }}
            ></div>
            <div className="p-6">
                <h4 className="font-bold text-white">Neighborhood</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Located in the vibrant Son Tra district, just 2 minutes walk from My Khe Beach. Close to seafood markets and high-end cafes.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800/50 px-3 py-1 text-[10px] border border-slate-700 text-slate-300">Beach: 200m</span>
                    <span className="rounded-full bg-slate-800/50 px-3 py-1 text-[10px] border border-slate-700 text-slate-300">Market: 500m</span>
                    <span className="rounded-full bg-slate-800/50 px-3 py-1 text-[10px] border border-slate-700 text-slate-300">Airport: 15min</span>
                </div>
            </div>
        </div>
    );
};

export default LocationPreview;
