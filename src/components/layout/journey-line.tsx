export function JourneyLine() {
  return (
    <div 
      className="fixed left-0 top-0 w-24 h-full pointer-events-none z-0" 
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full opacity-30"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="lch(65% 90 260)" />
            <stop offset="50%" stopColor="lch(70% 85 300)" />
            <stop offset="100%" stopColor="lch(75% 80 150)" />
          </linearGradient>
        </defs>
        
        <path
          d="M60 10 Q60 20 20 25 Q60 30 20 35 Q60 40 50 45 L50 55 L50 65 L50 75 L50 85 L50 95"
          stroke="url(#journeyGradient)"
          strokeWidth="2"
          fill="none"
          className="journey-path"
        />
      </svg>
    </div>
  )
}