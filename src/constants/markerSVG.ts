export const getCinemaMarkerSVG = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="23" fill="#1e293b" stroke="#14b8a6" stroke-width="2"/>
    <g transform="translate(9, 10)">
      <line x1="15" y1="20" x2="10" y2="28" stroke="#14b8a6" stroke-width="1" opacity="0.7"/>
      <line x1="15" y1="20" x2="20" y2="28" stroke="#14b8a6" stroke-width="1" opacity="0.7"/>
      <rect x="10" y="10" width="10" height="10" fill="#3d2817" stroke="#14b8a6" stroke-width="1"/>
      <rect x="10.5" y="10.5" width="9" height="9" fill="none" stroke="#14b8a6" stroke-width="0.3" opacity="0.5"/>
      <path d="M9 12 L6 13 L6 17 L9 18 Z" fill="#1a1614" stroke="#14b8a6" stroke-width="0.8"/>
      <path d="M9 13 L7 13.5 M9 15 L7 15 M9 17 L7 16.5" stroke="#14b8a6" stroke-width="0.3" opacity="0.6"/>
      <rect x="2" y="11" width="4" height="8" fill="#2d2420" stroke="#14b8a6" stroke-width="1"/>
      <circle cx="4" cy="15" r="3" fill="#0f0e0d" stroke="#14b8a6" stroke-width="1.2"/>
      <circle cx="4" cy="15" r="2" fill="#1a1614" stroke="#14b8a6" stroke-width="0.8"/>
      <circle cx="4" cy="15" r="1" fill="#2d2420" stroke="#14b8a6" stroke-width="0.5"/>
      <circle cx="4.5" cy="14.5" r="0.8" fill="#14b8a6" opacity="0.4"/>
      <path d="M12 10 L12 6 L18 6 L18 10" fill="#1a1614" stroke="#14b8a6" stroke-width="0.8"/>
      <rect x="13" y="7" width="4" height="2" fill="#0f0e0d"/>
      <line x1="11" y1="12" x2="19" y2="12" stroke="#14b8a6" stroke-width="0.2" opacity="0.4"/>
      <line x1="11" y1="15" x2="19" y2="15" stroke="#14b8a6" stroke-width="0.2" opacity="0.4"/>
      <line x1="11" y1="18" x2="19" y2="18" stroke="#14b8a6" stroke-width="0.2" opacity="0.4"/>
    </g>
  </svg>
`;

export const getCinemaMarkerHoverSVG = (cinemaId: number | string) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
    <defs>
      <filter id="glow-camera-${cinemaId}">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="28" cy="28" r="26" fill="#14b8a6" stroke="#0d9488" stroke-width="2.5" filter="url(#glow-camera-${cinemaId})"/>
    <g transform="translate(11, 12)">
      <line x1="17" y1="22" x2="12" y2="32" stroke="#0f766e" stroke-width="1.2" opacity="0.8"/>
      <line x1="17" y1="22" x2="22" y2="32" stroke="#0f766e" stroke-width="1.2" opacity="0.8"/>
      <rect x="11" y="12" width="12" height="12" fill="#1a1614" stroke="#0f766e" stroke-width="1.2"/>
      <rect x="11.5" y="12.5" width="11" height="11" fill="none" stroke="#0f766e" stroke-width="0.4" opacity="0.6"/>
      <path d="M10 14 L6 15 L6 21 L10 22 Z" fill="#0f0e0d" stroke="#0f766e" stroke-width="1"/>
      <path d="M10 15 L7.5 15.5 M10 18 L7.5 18 M10 21 L7.5 20.5" stroke="#0f766e" stroke-width="0.4" opacity="0.7"/>
      <rect x="2" y="13" width="4" height="10" fill="#1a1614" stroke="#0f766e" stroke-width="1.2"/>
      <circle cx="4" cy="18" r="4" fill="#0a0908" stroke="#0f766e" stroke-width="1.5"/>
      <circle cx="4" cy="18" r="2.5" fill="#0f0e0d" stroke="#0f766e" stroke-width="1"/>
      <circle cx="4" cy="18" r="1.2" fill="#1a1614" stroke="#0f766e" stroke-width="0.6"/>
      <circle cx="4.8" cy="17.2" r="1" fill="#0f766e" opacity="0.6"/>
      <path d="M14 12 L14 7 L20 7 L20 12" fill="#0f0e0d" stroke="#0f766e" stroke-width="1"/>
      <rect x="15" y="8" width="4" height="3" fill="#0a0908"/>
      <line x1="12" y1="14" x2="22" y2="14" stroke="#0f766e" stroke-width="0.3" opacity="0.5"/>
      <line x1="12" y1="18" x2="22" y2="18" stroke="#0f766e" stroke-width="0.3" opacity="0.5"/>
      <line x1="12" y1="22" x2="22" y2="22" stroke="#0f766e" stroke-width="0.3" opacity="0.5"/>
    </g>
  </svg>
`;

export const getUserLocationMarkerSVG = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <defs>
      <filter id="glow-user">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="20" cy="20" r="18" fill="#14b8a6" opacity="0.2" filter="url(#glow-user)">
      <animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="20" cy="20" r="14" fill="#14b8a6" opacity="0.3">
      <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="20" cy="20" r="8" fill="#14b8a6" stroke="#ffffff" stroke-width="3"/>
    <circle cx="20" cy="20" r="4" fill="#ffffff" opacity="0.8"/>
  </svg>
`;
