import React from 'react';

// Exact icons matching the 5 columns in "What We Capture" from the reference image

export function WeddingsIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Two intertwined rings / infinity knot */}
      <circle cx="12" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.5 11.5C17.5 13.5 17.5 18.5 15.5 20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EngagementsIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Faceted Solitaire Diamond on a wedding ring */}
      <path
        d="M16 6L20.5 10.5L16 16L11.5 10.5L16 6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <line x1="11.5" y1="10.5" x2="20.5" y2="10.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M11 15C8.5 18 8.5 22 11 25C13.5 28 18.5 28 21 25C23.5 22 23.5 18 21 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CelebrationsIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Starburst firework / celebration sparkle rays */}
      <line x1="16" y1="6" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="20" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="9" x2="13.5" y2="13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="18.5" y1="18.5" x2="23" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="23" y1="9" x2="18.5" y2="13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="13.5" y1="18.5" x2="9" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BabiesFamilyIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Baby face / mother cradling embrace */}
      <circle cx="16" cy="13" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 24C10 20.5 12.5 19 16 19C19.5 19 22 20.5 22 24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Gentle halo curve / protective heart arch */}
      <path
        d="M6 16C6 10.5 10.5 6 16 6C21.5 6 26 10.5 26 16C26 21 21.5 26 16 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="1 3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PortraitsIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Silhouette portrait in circular vignette */}
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10.5 21C11.5 18 13.5 17 16 17C18.5 17 20.5 18 21.5 21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
