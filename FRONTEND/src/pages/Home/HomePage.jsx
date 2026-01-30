import React, { useEffect } from 'react';
import HomeHeader from '../../components/layout/HomeHeader';
import HomeFooter from '../../components/layout/HomeFooter';
import HeroSection from '../../components/home/HeroSection';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import ParallaxSection from '../../components/home/ParallaxSection';
import TrendingProperties from '../../components/home/TrendingProperties';
import FeaturedListings from '../../components/home/FeaturedListings';

const HomePage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-display bg-background-dark text-white overflow-x-hidden antialiased">
            <HomeHeader />
            <main>
                <HeroSection />
                <WhyChooseUs />
                <ParallaxSection />
                <TrendingProperties />
                <FeaturedListings />
            </main>
            <HomeFooter />
        </div>
    );
};

export default HomePage;
