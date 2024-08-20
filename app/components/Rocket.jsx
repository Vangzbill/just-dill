"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

export default function Rocket({ scale = 0.1 , colors = { component1: 'grey', component2: 'blue', component3: 'red' } }) {
    const rocketRef = useRef();
    const [error, setError] = useState(null);

    useEffect(() => {
        const loader = new OBJLoader();
        loader.load(
            './images/toy_roket.obj',
            (obj) => {
                obj.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        console.log(child.name);
                        if (['Window_Cylinder.007'].some(name => child.name.includes(name))) {
                            child.material = new THREE.MeshStandardMaterial({ color: colors.component1 });
                        } else if (['Window.001_Cylinder.008'].some(name => child.name.includes(name))) {
                            child.material = new THREE.MeshStandardMaterial({ color: colors.component2 });
                        } else if (['Tip_Cylinder.003', 'Wings_Cube.003'].some(name => child.name.includes(name))) {
                            child.material = new THREE.MeshStandardMaterial({ color: colors.component3 });
                        } else {
                            child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                        }
                    }                    
                });

                rocketRef.current.add(obj);
                rocketRef.current.position.y = 0.1;
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('An error happened', error);
                setError('Failed to load model');
            }
        );
    }, [colors]);

    useFrame(({ clock }) => {
        if (rocketRef.current && !error) {
            const t = clock.getElapsedTime();
    
            const amplitude = 0.2; 
            const frequency = 0.5;
            const ofsetX = 1;
    
            const posX = Math.sin(t * frequency * 2) * amplitude + 1;
            const posY = Math.sin(t * frequency * 0.4) * amplitude + 0.1; 
            const posZ = Math.cos(t * frequency * 1.3) * amplitude;
    
            rocketRef.current.position.set(posX, posY, posZ);
    
            rocketRef.current.rotation.x = Math.sin(t * frequency) * 0.2; 
            rocketRef.current.rotation.y = t;  
            rocketRef.current.rotation.z = Math.cos(t * frequency) * 0.2;  
        }
    });    
        
    return <group ref={rocketRef} scale={scale}/>;
}

