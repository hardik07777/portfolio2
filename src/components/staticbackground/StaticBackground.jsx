import React from 'react';
import './StaticBackground.css';

export default function StaticBackground() {
  return (
    <div className="bg-canvas">
      <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        
        {/* FADE MASK TARGETING ONLY THE CENTER BAND */}
        <defs>
          <linearGradient id="centerBand" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" />
            <stop offset="22%" stopColor="black" />
            <stop offset="25%" stopColor="white" />
            <stop offset="75%" stopColor="white" />
            <stop offset="78%" stopColor="black" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          
          <mask id="bandMask">
            <rect x="0" y="0" width="1200" height="800" fill="url(#centerBand)" />
          </mask>
        </defs>

        {/* ORGANIC RED GLOW (Reduced by 50% for a subtle ambient mood) */}
        {/* Large atmospheric wide glow */}
        <circle cx="600" cy="400" r="380" fill="rgba(185, 10, 20, 0.13)" filter="blur(110px)" />
        {/* Medium wide horizontal bleeding element */}
        <ellipse cx="600" cy="400" rx="520" ry="320" fill="rgba(150, 0, 10, 0.08)" filter="blur(80px)" />
        {/* Dense central illumination point right behind your picture cutout */}
        <circle cx="600" cy="400" r="200" fill="rgba(230, 20, 30, 0.04)" filter="blur(60px)" />

        {/* SWEEPING ARCS (Lines untouched - exactly the same white mix) */}
        <g mask="url(#bandMask)" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="0.5">
          <ellipse cx="600" cy="400" rx="600" ry="250" transform="rotate(-15 600 400)" />
          <ellipse cx="600" cy="400" rx="700" ry="200" transform="rotate(25 600 400)" />
          <ellipse cx="600" cy="400" rx="450" ry="350" transform="rotate(-40 600 400)" />
          <ellipse cx="600" cy="400" rx="550" ry="150" transform="rotate(10 600 400)" />
          
          {/* Subtle Cross-connections */}
          <line x1="200" y1="100" x2="500" y2="300" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.4" />
          <line x1="900" y1="500" x2="1100" y2="700" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.4" />
        </g>
        
      </svg>
    </div>
  );
}