import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Globe from './Globe.jsx';

function RotatingGlobe({ isTouchDevice }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    // No mobile/touch, giramos suavemente a Terra via animação de frame
    // já que o OrbitControls fica desativado para liberar 100% do scroll touch
    if (isTouchDevice && groupRef.current) {
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.innerWidth < 1024 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      setIsTouchDevice(hasTouch);
    };

    checkTouch();
    setMounted(true);
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen bg-black z-0 ${
        isTouchDevice ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={isTouchDevice ? { pointerEvents: 'none' } : undefined}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        eventSource={!isTouchDevice && mounted ? document.body : undefined}
        eventPrefix="client"
        style={isTouchDevice ? { pointerEvents: 'none' } : undefined}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 3, 5]} intensity={2.0} />
        
        {!isTouchDevice && (
          <OrbitControls 
            makeDefault
            enableZoom={false} 
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.8}
            rotateSpeed={1.2}
          />
        )}
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <RotatingGlobe isTouchDevice={isTouchDevice} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;