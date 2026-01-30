import React from 'react';
import SearchHeader from '../../components/search/SearchHeader';
import FilterSidebar from '../../components/search/FilterSidebar';
import ListingList from '../../components/search/ListingList';
import MapSection from '../../components/search/MapSection';
import SearchFooter from '../../components/search/SearchFooter';

const SearchPage = () => {
    return (
        <div className="dark font-display antialiased overflow-hidden h-screen flex flex-col bg-[#102220] text-white">
            <SearchHeader />

            {/* Main Content Area: Split View */}
            <main className="flex flex-1 overflow-hidden relative">
                {/* Left Sidebar */}
                <FilterSidebar />

                {/* Center Map Area (ListingList is an overlay inside here or aside) */}
                {/* Based on HTML, ListingList is an absolute overlay on the right of the Map */}
                <div className="flex-1 relative flex">
                    <MapSection />
                    <ListingList />
                </div>
            </main>

            <SearchFooter />
        </div>
    );
};

export default SearchPage;
