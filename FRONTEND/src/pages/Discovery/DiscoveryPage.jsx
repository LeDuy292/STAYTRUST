import React, { useState, useEffect } from 'react';
import HomeHeader from '../../components/layout/HomeHeader';
import MapVisualization from '../../components/discovery/MapVisualization';
import TopListingsOverlay from '../../components/discovery/TopListingsOverlay';

import RoomDetailModal from '../../components/discovery/RoomDetailModal';

const DiscoveryPage = () => {
    const [activeListingId, setActiveListingId] = useState(null);
    const [selectedListing, setSelectedListing] = useState(null);

    // Mock Data for Top 10 Listings
    const topListings = [
        { id: 1, title: "Ocean View Luxury Suite", location: "My Khe, Son Tra", price: "$1,200", rating: 4.98 },
        { id: 2, title: "Dragon Bridge Penthouse", location: "Hai Chau Dist.", price: "$2,500", rating: 4.95 },
        { id: 3, title: "Green Zen Villa", location: "Son Tra Peninsula", price: "$3,000", rating: 4.92 },
        { id: 4, title: "Modern City Loft", location: "Hai Chau 1", price: "$850", rating: 4.90 },
        { id: 5, title: "Riverside Studio", location: "Han River Bank", price: "$600", rating: 4.88 },
        { id: 6, title: "Cozy Beachfront Apt", location: "An Thuong Area", price: "$550", rating: 4.85 },
        { id: 7, title: "Vingroup Luxury Condo", location: "Ngu Hanh Son", price: "$1,500", rating: 4.82 },
        { id: 8, title: "Traditional Garden House", location: "Cam Le Dist.", price: "$700", rating: 4.80 },
        { id: 9, title: "Tech Hub Apartment", location: "Da Nang Software Park", price: "$900", rating: 4.78 },
        { id: 10, title: "Backpacker's Premium", location: "City Center", price: "$400", rating: 4.75 },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleViewDetails = (id) => {
        const listing = topListings.find(l => l.id === id);
        setSelectedListing(listing);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0b2530]">
            <HomeHeader />

            <main className="relative w-full h-full pt-20 lg:pt-0">
                {/* Visual Map Layer */}
                <MapVisualization
                    listings={topListings}
                    activeListingId={activeListingId}
                    setActiveListingId={setActiveListingId}
                    onViewDetails={handleViewDetails}
                />

                {/* Overlay Sidebar Layer */}
                <TopListingsOverlay
                    listings={topListings}
                    activeListingId={activeListingId}
                    setActiveListingId={setActiveListingId}
                    onViewDetails={handleViewDetails}
                />

                {/* Room Detail Modal */}
                {selectedListing && (
                    <RoomDetailModal
                        listing={selectedListing}
                        onClose={() => setSelectedListing(null)}
                    />
                )}

                {/* Back Link */}
                <div className="absolute bottom-8 left-8 z-50">
                    <a href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-slate-800 group-hover:-translate-x-1 transition-all">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </div>
                        <span className="text-sm font-bold shadow-black drop-shadow-md">Back to Home</span>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default DiscoveryPage;
