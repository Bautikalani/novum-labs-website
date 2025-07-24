export function JourneyLine() {
  return (
    <div className="journey-line" aria-hidden="true" role="presentation">
      <svg 
        className="journey-line-svg"
        viewBox="0 0 100 2000" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M20 50 Q20 200 80 350 Q20 500 80 650 Q20 800 50 950 L50 1200 L50 1450 L50 1700 L50 1950"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="journey-path"
        />
      </svg>
    </div>
  )
}