import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

    const SpaceBackground = () => {
    return (
    <div className="fixed inset-0 -z-10 w-screen h-screen bg-black pointer-events-none">
        <Canvas>
            <mesh>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}/>
                <sphereGeometry args={[2]}/>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <meshBasicMaterial wireframe/>
            </mesh>
        </Canvas>
    </div>
    )
    }

export default SpaceBackground
