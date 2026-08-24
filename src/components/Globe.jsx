// src/components/Globe.jsx
import React, { useEffect, useRef, useMemo } from 'react';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';

export default function Globe() {
  const globeRef = useRef();

  const globe = useMemo(() => {
    const instance = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')

    const globeMaterial = instance.globeMaterial();
    globeMaterial.color = new THREE.Color(0x0a192f);
    globeMaterial.emissive = new THREE.Color(0x020c1b);
    globeMaterial.emissiveIntensity = 0.4;
    globeMaterial.shininess = 0.7;

    return instance;
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.add(globe);
    }
    return () => {
      if (globeRef.current) {
        globeRef.current.remove(globe);
      }
    };
  }, [globe]);

  return (
    <group 
      ref={globeRef} 
      scale={[0.02, 0.02, 0.02]} 
      raycast={() => null}
    />
  );
}