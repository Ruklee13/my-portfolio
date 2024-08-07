'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const AsciiArt = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera, controls: TrackballControls, scene: THREE.Scene, renderer: THREE.WebGLRenderer, effect: AsciiEffect;
    let sphere: THREE.Mesh, plane: THREE.Mesh;
    const start = Date.now();

    function init() {
      const container = containerRef.current;
      if (!container) return;

      camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
      camera.position.y = 150;
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0, 0, 0);

      const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);

      sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
      scene.add(sphere);

      plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
      plane.position.y = -200;
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(80, 80);

      effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
      effect.setSize(80, 80);
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'black';

      container.appendChild(effect.domElement);

      controls = new TrackballControls(camera, effect.domElement);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      const size = Math.min(window.innerWidth, window.innerHeight, 80);
      camera.aspect = 1;
      camera.updateProjectionMatrix();

      renderer.setSize(size, size);
      effect.setSize(size, size);
    }

    function animate() {
      const timer = Date.now() - start;

      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;

      controls.update();
      effect.render(scene, camera);

      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current?.removeChild(effect.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '80px', height: '80px', margin: '0 auto' }} />;
};

export default AsciiArt;
