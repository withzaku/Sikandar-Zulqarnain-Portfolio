"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1000 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = Math.random() * 100;
            const factor = Math.random() * 100 + 20;
            const speed = Math.random() * 0.01 + 0.005;
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            const z = Math.random() * 100 - 50;
            temp.push({ time, factor, speed, x, y, z });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        particles.forEach((particle, i) => {
            let { time, factor, speed, x, y, z } = particle;
            time = particle.time += speed / 2;
            const a = Math.cos(time) + Math.sin(time * 1) * 10;
            const b = Math.sin(time) + Math.cos(time * 2) * 10;
            const c = Math.cos(time) + Math.sin(time * 3) * 10;

            dummy.position.set(
                x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
                y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10,
                z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
            );
            dummy.scale.setScalar(Math.max(0.2, Math.sin(time) * 0.5));
            dummy.updateMatrix();

            if (mesh.current) {
                mesh.current.setMatrixAt(i, dummy.matrix);
            }
        });
        if (mesh.current) {
            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]} dispose={null}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#4f46e5" transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
}

export default function BackgroundParticles() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 30], fov: 75 }} gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}>
                <Particles count={700} />
            </Canvas>
        </div>
    );
}
