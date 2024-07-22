'use client'

import React, { useState, useEffect, useRef } from 'react';

const FPS = 10;

const getRandomGrid = (width: number, height: number) => {
  return Array.from({ length: height }, () => 
    Array.from({ length: width }, () => Math.random() > 0.5)
  );
};

const getNextGeneration = (grid: boolean[][]) => {
  const height = grid.length;
  const width = grid[0].length;
  const nextGrid = grid.map(row => row.slice());
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const neighbors = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];
      let liveNeighbors = 0;
      
      for (const [dy, dx] of neighbors) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
          liveNeighbors += grid[ny][nx] ? 1 : 0;
        }
      }
      
      if (grid[y][x]) {
        nextGrid[y][x] = liveNeighbors === 2 || liveNeighbors === 3;
      } else {
        nextGrid[y][x] = liveNeighbors === 3;
      }
    }
  }
  
  return nextGrid;
};

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSize = () => {
      const newWidth = Math.floor(window.innerWidth / 20);
      const newHeight = Math.floor(window.innerHeight / 20);
      setWidth(newWidth);
      setHeight(newHeight);
      setGrid(getRandomGrid(newWidth, newHeight));
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setGrid(prevGrid => getNextGeneration(prevGrid));
    }, 1000 / FPS);

    return () => {
      window.removeEventListener('resize', updateSize);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`,
        width: '100vw',
        height: '100vh',
        gap: '0px', // Remove any grid gap
        backgroundColor: '#ccc',
        overflow: 'hidden' // Prevent scrolling
      }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${y}-${x}`}
            style={{
              backgroundColor: cell ? 'black' : 'white',
              width: '100%',
              height: '100%',
              border: 'none' // Ensure there's no border
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameOfLife;
