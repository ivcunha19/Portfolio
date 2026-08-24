import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Globe from './Globe.jsx';

const SpaceBackground = () => {
  const [targetContainer, setTargetContainer] = useState(null);

  useEffect(() => {
    setTargetContainer(document.body);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black z-0 pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        eventSource={targetContainer || undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 3, 5]} intensity={2.0} />
        <OrbitControls 
          makeDefault
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8}
          rotateSpeed={1.2}
        />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Globe />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;