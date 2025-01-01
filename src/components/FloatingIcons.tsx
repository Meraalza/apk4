import React, { useEffect, useState, useCallback } from 'react';
import { Download, MessageSquare, Share2, Star, Zap, BarChart, Heart, Globe, Bell, Sparkles, Shield, Smartphone } from 'lucide-react';
import { useRandomPositions } from '../hooks/useRandomPositions';

const BACKGROUND_ICONS = [
  { Icon: MessageSquare, color: 'text-pink-400/20', size: 'w-16 h-16', animation: 'animate-float-slow' },
  { Icon: Share2, color: 'text-purple-400/20', size: 'w-12 h-12', animation: 'animate-float-medium' },
  { Icon: Star, color: 'text-yellow-400/20', size: 'w-14 h-14', animation: 'animate-float-fast' },
  { Icon: Zap, color: 'text-blue-400/20', size: 'w-10 h-10', animation: 'animate-float-slow' },
  { Icon: BarChart, color: 'text-green-400/20', size: 'w-16 h-16', animation: 'animate-float-medium' },
  { Icon: Heart, color: 'text-red-400/20', size: 'w-12 h-12', animation: 'animate-float-fast' },
  { Icon: Globe, color: 'text-cyan-400/20', size: 'w-14 h-14', animation: 'animate-float-slow' },
  { Icon: Bell, color: 'text-orange-400/20', size: 'w-10 h-10', animation: 'animate-float-medium' },
  { Icon: Sparkles, color: 'text-indigo-400/20', size: 'w-16 h-16', animation: 'animate-float-fast' },
  { Icon: Shield, color: 'text-teal-400/20', size: 'w-12 h-12', animation: 'animate-float-slow' },
  { Icon: Smartphone, color: 'text-violet-400/20', size: 'w-14 h-14', animation: 'animate-float-medium' }
] as const;

export function FloatingIcons() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [appIconPosition, setAppIconPosition] = useState({ x: 0, y: 0 });
  const iconPositions = useRandomPositions(BACKGROUND_ICONS.length);

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [handleMove]);

  useEffect(() => {
    let animationFrame: number;

    const animateIcon = () => {
      setAppIconPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x - 20) * 0.1,
        y: prev.y + (mousePosition.y - prev.y - 20) * 0.1
      }));
      animationFrame = requestAnimationFrame(animateIcon);
    };

    animationFrame = requestAnimationFrame(animateIcon);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {BACKGROUND_ICONS.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.animation}`}
            style={{
              left: `${iconPositions[index]?.x ?? 0}%`,
              top: `${iconPositions[index]?.y ?? 0}%`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${Math.random() * 360}deg)`,
            }}
          >
            <icon.Icon className={`${icon.size} ${icon.color}`} />
          </div>
        ))}
      </div>

      <div
        className="absolute transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${appIconPosition.x}px, ${appIconPosition.y}px)`,
        }}
      >
        <Download className="w-10 h-10 text-indigo-600/40" />
      </div>
    </div>
  );
}