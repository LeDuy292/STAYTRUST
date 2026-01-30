import React from 'react';

const RoomModelsGrid = () => {
    const models = [
        { label: 'Floor Plan', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRmSdGaTCS7t5uSaKXLaInI5LOaPIFLKMb5_cKXKjL0tJ2Y6qPlMlklBxZin2SXW4ofce9wIypbU3nQdi2EP7NbqDPwb0YGpkGosJu6q3KORAkYWOGFJEae6vTeoezoGKf874tRk3A_U62FCO_rwDUvM8UQuL_Rwq9WpF7S-GKBUFlAZOAHkWywCAS1-HUJHuqZPF-rHlZUAcbeRs3HA4PGP9_Ib-NnKl8Xjidl7GaZ4AXj2rNOa-EoY13FPrrGLPZ3mtl1xDuUE1H' },
        { label: 'Master Bed', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKKgX0FaQTxwyfDourmRQcEEoMxYoIx-aWGxY98fbrPYXqFwr4qwuYT1YNp1G-P2mNC0xc7kpySr6IhLPBRNC5errGzs-AHm31Xd0rLXWN-1-KENWfDN1Rb3epdUNPkwyL8HTPLSkStST9Wndb-jnmyUaLAI2rnl3lhgRQynRSk6Jb_vWIPgyInAgF3HW755UdAgmrEFxDG8U6KGz3EQ5LwBNxEptkVtHX8hAgVLgyibvE5DLNZCl7T-L887cuFhWsftDKJcp0gJzJ' },
        { label: 'Kitchen', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChLtUMPRN4G2S47Nq-RcoV_KnRmpKkkphkNpwAxk7gCk1GEOisMpoUaT9YIemL7X9tLSgulFbQwNlLrSigOr9TNohoxO8mJI7GXgn9a27x44nqyFbL3ZiGhREz3hB1ZDm82_dVZzc-hA0e-bMLVJCaYAzhN9YPwH3WAjpTf2lFGOVK-0TwSQBCcVMea-c1ujoZyfYszpR4ybnpIFMR1QLzb3PAmUdL6nvwR7c5iw_AaQ1G-Siu9nkAWQjzzPTukF4YWyTAJiHOZol4' },
        { label: 'Living Room', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYIfynKfn_2R83QWG1UBoRubuVVfXI-1OPXl6VJZ2479EscRqR1qCs3tvk-ghtYYGrSwruP8dC8-qKg5V7nKrBjiDvxQ5VliAZl75f9VOBPLx4iVoySBAA0XxkU7zEEdP_Ck5WQX9ZTMjUBnDot9dpq-gf3HQ6xo98x5qqlhqJR7gnHnWmGSvjJcRwOvvnZZXfr_esD8vH6WdC60wSPINiisdDgwumejqke9w4zskj8HC8wsML7Glh1AWLZJE9G1a2vhXf3hysNHf9' },
    ];

    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-white">Explore Room Models</h3>
                <button className="text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors">View All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {models.map((item, index) => (
                    <div key={index} className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50 transition-all shadow-lg">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url("${item.img}")` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101922] to-transparent opacity-80"></div>
                        <p className="absolute bottom-3 left-3 text-sm font-bold text-white group-hover:text-teal-400 transition-colors">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomModelsGrid;
