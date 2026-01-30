import React, { useEffect } from 'react';
import HomeHeader from '../../components/layout/HomeHeader';
import HomeFooter from '../../components/layout/HomeFooter';
import VirtualTourViewer from '../../components/property/VirtualTourViewer';
import RoomModelsGrid from '../../components/property/RoomModelsGrid';
import AmenitiesGrid from '../../components/property/AmenitiesGrid';
import HouseRules from '../../components/property/HouseRules';
import BookingCard from '../../components/property/BookingCard';
import LandlordProfile from '../../components/property/LandlordProfile';
import LocationPreview from '../../components/property/LocationPreview';

const PropertyDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-background-dark font-display text-white overflow-x-hidden flex flex-col">
            {/* Background from Home Page */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgxQy4FgCs-ViNORaQTrRKng2HArXp-yT6A85QODzAuKWN5-3QQWrnDNXYngHiTHxP6xBzXz1gMpQpVe65oz4NEzWj_vVYvrVbFlCGJyNYhrQPtODUzTeFGp_Gq4I_CADP1rY1HjQc46AGTt1DCBbyy7O6uo4W0xxXnkvbglLikDGazyb9DVcVeyLzZ1wrAXb66OIGsSHa1Wv82psBa3OwkuUeWx9PQUSMy_J3IQShLnI7Vne9BBsHUsAGBb6JSYimsim1xQJMZuYa')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/40"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-t from-teal-500/20 to-transparent mix-blend-screen"></div>
            </div>

            {/* Header */}
            <div className="relative z-50">
                <HomeHeader />
            </div>

            <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-20 py-24 lg:py-28">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 pb-6 text-sm">
                    <a className="text-teal-400/70 hover:text-teal-400 transition-colors" href="#">Da Nang</a>
                    <span className="text-white/30 material-symbols-outlined text-sm">chevron_right</span>
                    <a className="text-teal-400/70 hover:text-teal-400 transition-colors" href="#">Son Tra</a>
                    <span className="text-white/30 material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-white font-medium">Azure Ocean Suite</span>
                </nav>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Main Content Left (2/3) */}
                    <div className="lg:col-span-2 space-y-8">
                        <VirtualTourViewer />
                        <RoomModelsGrid />
                        <AmenitiesGrid />
                        <HouseRules />
                    </div>

                    {/* Sidebar Right (1/3) */}
                    <div className="space-y-8">
                        <BookingCard />
                        <LandlordProfile />
                        <LocationPreview />
                    </div>
                </div>
            </main>

            <HomeFooter />
        </div>
    );
};

export default PropertyDetailPage;
