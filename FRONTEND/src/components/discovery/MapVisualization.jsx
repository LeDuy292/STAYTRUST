import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useCursor, Html, Environment, Float, Cloud, Sky, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Detailed Low-Poly House Component
const CuteHouse = ({ isActive }) => {
    return (
        <group scale={isActive ? 1.2 : 1}>
            {/* Garden Base */}
            <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
                <meshStandardMaterial color={isActive ? "#86efac" : "#4ade80"} />
            </mesh>

            {/* House Body */}
            <mesh position={[0, 0.55, 0]} castShadow>
                <boxGeometry args={[0.7, 0.9, 0.7]} />
                <meshStandardMaterial color="#f8fafc" />
            </mesh>

            {/* Roof */}
            <mesh position={[0, 1.3, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
                <coneGeometry args={[0.8, 0.6, 4]} />
                <meshStandardMaterial color={isActive ? "#fb923c" : "#ea580c"} />
            </mesh>

            {/* Chimney */}
            <mesh position={[0.3, 1.2, 0.3]} castShadow>
                <boxGeometry args={[0.2, 0.4, 0.2]} />
                <meshStandardMaterial color="#78716c" />
            </mesh>
            {/* Smoke Puff */}
            {isActive && (
                <Cloud position={[0.3, 1.8, 0.3]} args={[0.3, 0.3]} speed={0.2} opacity={0.5} color="white" />
            )}

            {/* Door */}
            <mesh position={[0, 0.4, 0.36]}>
                <boxGeometry args={[0.25, 0.5, 0.05]} />
                <meshStandardMaterial color="#92400e" />
            </mesh>
            <mesh position={[0.1, 0.35, 0.39]}>
                <sphereGeometry args={[0.02]} />
                <meshStandardMaterial color="#fcd34d" />
            </mesh>

            {/* Circular Window */}
            <mesh position={[0, 1.1, 0.25]}>
                <circleGeometry args={[0.15, 32]} />
                <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={isActive ? 2 : 0.5} />
            </mesh>

            {/* Side Window */}
            <mesh position={[0.36, 0.6, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[0.3, 0.3]} />
                <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

// Map Pin Wrapper
const MapPin = ({ id, position, label, price, isActive, onClick, onHover, onOut, delay, onViewDetails }) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);

    useCursor(hovered);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle float
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1 + 0.2;
            groupRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group position={[position[0], 0, position[2]]}>
            <group
                ref={groupRef}
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerOver={(e) => { e.stopPropagation(); onHover(); setHovered(true); }}
                onPointerOut={(e) => { e.stopPropagation(); onOut(); setHovered(false); }}
            >
                <CuteHouse isActive={isActive} />

                {/* Floating Tooltip with Button */}
                <Html position={[0, 2, 0]} center zIndexRange={[100, 0]} style={{ pointerEvents: 'none' }}>
                    <div className={`transition-all duration-300 transform ${isActive || hovered ? 'scale-100 opacity-100 -translate-y-2' : 'scale-75 opacity-0 translate-y-0'} origin-bottom flex flex-col items-center gap-1`}>

                        {/* Bubble */}
                        <div className="bg-white/95 text-slate-800 px-3 py-2 rounded-xl shadow-lg border-2 border-orange-500 font-bold text-xs whitespace-nowrap flex flex-col items-center">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{label}</span>
                            <span className="text-sm font-extrabold text-blue-600">{price}</span>

                            <button
                                className="mt-2 bg-slate-900 text-white px-3 py-1 rounded-md text-[10px] uppercase font-bold hover:bg-orange-600 transition-colors pointer-events-auto shadow-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onViewDetails) onViewDetails(id);
                                }}
                            >
                                View Details
                            </button>
                        </div>

                        {/* Arrow */}
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                    </div>
                </Html>
            </group>

            {/* Shadow */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
                <circleGeometry args={[0.8, 32]} />
                <meshBasicMaterial color="#000000" opacity={0.3} transparent />
            </mesh>
        </group>
    );
};

const MapPlane = ({ textureUrl }) => {
    const texture = useLoader(THREE.TextureLoader, textureUrl);

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30, 64, 64]} />
            <meshStandardMaterial
                map={texture}
                color="#ffffff"
                roughness={0.9}
                metalness={0.0}
            />
        </mesh>
    );
};

const MapScene = ({ listings, activeListingId, setActiveListingId, onViewDetails }) => {
    // Map dimensions matching args above: w=30, h=30
    const getPosition = (xPct, yPct) => {
        const xRaw = (xPct - 50) / 100 * 30;
        const zRaw = (yPct - 50) / 100 * 30;
        return [xRaw, 0, zRaw];
    };

    const markers = [
        { x: 25, y: 35 }, { x: 30, y: 40 }, { x: 65, y: 30 }, { x: 70, y: 45 },
        { x: 75, y: 50 }, { x: 20, y: 65 }, { x: 25, y: 70 }, { x: 45, y: 80 },
        { x: 50, y: 85 }, { x: 35, y: 55 }
    ];

    return (
        <>
            <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.05}>
                {/* Texture */}
                <MapPlane textureUrl="/assets/images/danang-full-map.png" />

                {listings.map((listing, index) => {
                    const m = markers[index] || { x: 50, y: 50 };
                    const pos = getPosition(m.x, m.y);

                    return (
                        <MapPin
                            key={listing.id}
                            id={listing.id}
                            position={pos}
                            label={listing.title}
                            price={listing.price}
                            isActive={activeListingId === listing.id}
                            onClick={() => setActiveListingId(listing.id)}
                            onHover={() => setActiveListingId(listing.id)}
                            onOut={() => setActiveListingId(null)}
                            onViewDetails={onViewDetails}
                            delay={index * 0.2}
                        />
                    );
                })}
            </Float>

            {/* Atmosphere */}
            <Sky sunPosition={[10, 10, 10]} turbidity={0.5} rayleigh={0.5} inclination={0.5} distance={1000} />
            <Cloud position={[-8, 4, -10]} args={[4, 2]} opacity={0.4} color="white" />
            <Cloud position={[8, 3, -5]} args={[3, 2]} opacity={0.3} color="white" />
            <Sparkles count={30} scale={20} size={5} speed={0.4} opacity={0.5} color="#fb923c" position={[0, 2, 0]} />
        </>
    );
};

const MapVisualization = ({ listings = [], activeListingId, setActiveListingId, onViewDetails }) => {
    return (
        <div className="w-full h-full bg-[#f0f9ff]">
            <Canvas shadows dpr={[1, 2]} onPointerMissed={() => setActiveListingId(null)}>
                <PerspectiveCamera makeDefault position={[0, 15, 12]} fov={35} />
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2.5}
                    minPolarAngle={Math.PI / 8}
                    minDistance={8}
                    maxDistance={35}
                    autoRotate
                    autoRotateSpeed={0.3}
                />

                {/* Lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 20, 5]} intensity={1.5} castShadow />
                <Environment preset="city" />

                <React.Suspense fallback={null}>
                    <MapScene
                        listings={listings}
                        activeListingId={activeListingId}
                        setActiveListingId={setActiveListingId}
                        onViewDetails={onViewDetails}
                    />
                </React.Suspense>

                <fog attach="fog" args={['#f0f9ff', 15, 60]} />
            </Canvas>

            {/* Hint */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-blue-200 flex items-center gap-3 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <p className="text-slate-800 text-xs font-bold uppercase tracking-widest">Full City View</p>
                </div>
            </div>
        </div>
    );
};

export default MapVisualization;
