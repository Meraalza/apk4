import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useRandomPositions(count: number): Position[] {
  const [positions, setPositions] = useState<Position[]>(() => 
    Array.from({ length: count }, () => ({
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5
    }))
  );

  return positions;
}