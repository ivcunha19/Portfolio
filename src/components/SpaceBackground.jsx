import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Globe from './Globe.jsx';

// Componente que gira suavemente a Terra via frame (usado no mobile onde OrbitControls é desativado)
function RotatingGlobe({ isMobile }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (isMobile && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Globe />
    </group>
  );
}

const SpaceBackground = () => {
  // Detecta se é dispositivo mobile (smartphone/tablet) via userAgent ou pointer touch exclusivo
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    const ua = navigator.userAgent || '';
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileUA = mobileRegex.test(ua);
    const isCoarseTouchOnly = window.matchMedia && 
      window.matchMedia('(pointer: coarse)').matches && 
      !window.matchMedia('(pointer: fine)').matches;
    return Boolean(isMobileUA || isCoarseTouchOnly);
  });

  useEffect(() => {
    const updateDeviceType = () => {
      const ua = navigator.userAgent || '';
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileUA = mobileRegex.test(ua);
      const isCoarseTouchOnly = window.matchMedia && 
        window.matchMedia('(pointer: coarse)').matches && 
        !window.matchMedia('(pointer: fine)').matches;
      setIsMobile(Boolean(isMobileUA || isCoarseTouchOnly));
    };

    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen bg-black z-0 ${
        isMobile ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={isMobile ? { pointerEvents: 'none' } : undefined}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        eventSource={!isMobile && typeof document !== 'undefined' ? document.body : undefined}
        eventPrefix="client"
        style={isMobile ? { pointerEvents: 'none' } : undefined}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 3, 5]} intensity={2.0} />
        
        {!isMobile && (
          <OrbitControls 
            makeDefault
            enableZoom={false} 
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.8}
            rotateSpeed={1.2}
          />
        )}
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <RotatingGlobe isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;