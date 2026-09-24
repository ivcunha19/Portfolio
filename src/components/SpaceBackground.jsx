import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Globe from './Globe.jsx';

function CustomOrbitControls() {
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      // Desativa rotação e pan por gestos touch para não capturar a rolagem do mobile
      controls.touches.ONE = null;
      controls.touches.TWO = null;
    }

    // O OrbitControls conecta ao document.body e aplica style.touchAction = 'none'.
    // Sobrescrevemos para 'pan-y' para garantir que gestos verticais de toque sejam tratados
    // nativamente pelo navegador como scroll de página.
    document.body.style.touchAction = 'pan-y';
    document.documentElement.style.touchAction = 'pan-y';

    return () => {
      document.body.style.touchAction = '';
      document.documentElement.style.touchAction = '';
    };
  }, []);

  return (
    <OrbitControls 
      ref={controlsRef}
      makeDefault
      enableZoom={false} 
      enablePan={false}
      enableRotate={true}
      autoRotate={true}
      autoRotateSpeed={0.8}
      rotateSpeed={1.2}
      touches={{ ONE: null, TWO: null }}
    />
  );
}

const SpaceBackground = () => {
  const [targetContainer, setTargetContainer] = useState(() => 
    typeof document !== 'undefined' ? document.body : null
  );

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
        
        <CustomOrbitControls />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Globe />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;