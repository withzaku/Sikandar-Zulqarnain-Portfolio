"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DNAHelix() {
    const groupRef = useRef<THREE.Group>(null);
    const particlesCount = 150;

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Create instances for two strands and the connectors
    const strand1Ref = useRef<THREE.InstancedMesh>(null);
    const strand2Ref = useRef<THREE.InstancedMesh>(null);
    const connectorsRef = useRef<THREE.InstancedMesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.2;
            groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
        }

        for (let i = 0; i < particlesCount; i++) {
            // Helix mathematics
            const t = (i / particlesCount) * Math.PI * 10;
            const radius = 2;
            const height = (i / particlesCount) * 10 - 5;

            // Strand 1 Position
            const x1 = Math.cos(t) * radius;
            const z1 = Math.sin(t) * radius;

            dummy.position.set(x1, height, z1);
            dummy.scale.setScalar(0.15 + Math.sin(time * 2 + i * 0.1) * 0.05);
            dummy.updateMatrix();
            if (strand1Ref.current) strand1Ref.current.setMatrixAt(i, dummy.matrix);

            // Strand 2 Position
            const x2 = Math.cos(t + Math.PI) * radius;
            const z2 = Math.sin(t + Math.PI) * radius;

            dummy.position.set(x2, height, z2);
            dummy.scale.setScalar(0.15 + Math.sin(time * 2 + i * 0.1 + Math.PI) * 0.05);
            dummy.updateMatrix();
            if (strand2Ref.current) strand2Ref.current.setMatrixAt(i, dummy.matrix);

            // Connectors (only draw every nth particle to look like base pairs)
            if (i % 3 === 0 && connectorsRef.current) {
                const index = i / 3;
                dummy.position.set(0, height, 0); // Center point between the two
                dummy.rotation.set(0, -t, Math.PI / 2);
                dummy.scale.set(0.04, radius * 2, 0.04);
                dummy.updateMatrix();
                connectorsRef.current.setMatrixAt(index, dummy.matrix);
            }
        }

        if (strand1Ref.current) strand1Ref.current.instanceMatrix.needsUpdate = true;
        if (strand2Ref.current) strand2Ref.current.instanceMatrix.needsUpdate = true;
        if (connectorsRef.current) connectorsRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <group ref={groupRef}>
            {/* Strand 1 */}
            <instancedMesh ref={strand1Ref} args={[undefined, undefined, particlesCount]}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshBasicMaterial color="#10b981" wireframe={true} />
            </instancedMesh>

            {/* Strand 2 */}
            <instancedMesh ref={strand2Ref} args={[undefined, undefined, particlesCount]}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshBasicMaterial color="#e5e5e5" wireframe={true} />
            </instancedMesh>

            {/* Connectors */}
            <instancedMesh ref={connectorsRef} args={[undefined, undefined, particlesCount / 3]}>
                <cylinderGeometry args={[0.5, 0.5, 1, 4]} />
                <meshBasicMaterial color="#10b981" opacity={0.5} transparent wireframe={true} />
            </instancedMesh>
        </group>
    );
}
