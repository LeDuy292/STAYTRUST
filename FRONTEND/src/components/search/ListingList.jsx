import React from 'react';
import ListingCard from './ListingCard';

const listings = [
    {
        id: 1,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2Ir2d5H1HPWsTAWpvbKRUzc5dEDA1pANjz931KAMb7V8cP81SN6ejHJhGTlud4Zy2ndH8otQ5llyfZtre6klq9SMESZasbYnDS9HSRpW54jxmIeoIcmspySeNotlnLdkpb1tPC8j5ZOzzD8INu3ljxg2pxM6Dt5ttQBLP4lMGlZpiC99lpUydwelO4AsqRffTFgem0cLWqr0iaGDN4dWpRvok3HBUAyEtXLdxC0x10slJbxXGLU8qt2_qD9Hqf5xa7CoBjk8aRQJn',
        imageAlt: 'Modern studio apartment with ocean view in Sơn Trà',
        verified: true,
        location: 'Sơn Trà District',
        title: 'Ocean View Sky Loft',
        beds: 'Studio',
        sqft: '45m²',
        match: '98',
        price: '$650',
        priceVND: '16.2M VND'
    },
    {
        id: 2,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPGhCHbE6k-2R3Pynv6ajykbRn_baO3zp-21j436AF7w8WlcyLbGVj9s-gbJYZ-S8LC6LydEMfsSEFs8jB6zav_alF7svb46znKZ4rnsfjvNmheQ-Sv3K4Kun7wCw8uVO9c9kGIUM1Tn-9elQr0eC1PQc0Z_ZwFqxBs3fMcnKCQJC-opP_60p7BrsIArgX05sOqqWYDWAONhum-7suXyzS-zcWd8VJ3MOGn8-42ePDA2rLyqw2T1LLwBLIdMSAFO_O3mVbqsnF0fNm',
        imageAlt: 'High-tech 2 bedroom apartment in Ngũ Hành Sơn',
        verified: true,
        location: 'Ngũ Hành Sơn',
        title: 'Marble Mountain Suites',
        beds: '2 Beds',
        sqft: '90m²',
        match: '92',
        price: '$1,100',
        priceVND: '27.5M VND'
    },
    {
        id: 3,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb3NoUcOp71X0rIobWmurnqlcOijws5z03Th2rA2we1CPjMO6WpDNKvZ8gAWfEAvEuNIyJQ-vOVlpXudlyf7O-NVFr_Phrv6Y9SNJGwjgOPw_8lG_kafoT2Ggs6kXlxE5qfIcRHeyPc3A6gp2l2mAIoGbPEQ8dMxRXafNK5QJojx_c0kaC7RpAccB6nRGcrbLImWmbXZaV9cgdu6ZyRPMLN33FZBY-XG8WnupDmeGSDrJHOaF5sHSWmyBAhOQ5utiXS9pI0uz_y4eR',
        imageAlt: 'Boutique studio with garden balcony',
        verified: false,
        location: 'Hải Châu District',
        title: 'Green Terrace Studio',
        beds: 'Studio',
        sqft: '35m²',
        match: '85',
        price: '$480',
        priceVND: '12.0M VND'
    }
];

const ListingList = () => {
    return (
        <div className="absolute inset-y-0 right-0 w-full md:w-[420px] z-20 pointer-events-none p-6 flex flex-col">
            <div className="h-full overflow-y-auto no-scrollbar pointer-events-auto space-y-4 pr-2 pb-20">
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default ListingList;
