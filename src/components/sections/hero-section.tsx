export function HeroSection() {
  return (
    <section aria-label="Hero" className="hero-section">
      <div className="hero-content">
        <h1>Build AI solutions that transform your business</h1>
        <p className="hero-subtitle">
          Novum Labs partners with forward-thinking companies to implement 
          custom AI solutions that drive real results
        </p>
        
        <div className="hero-actions">
          <a href="#demos" className="primary-cta">See Live Demos</a>
          <a href="#book-call" className="secondary-cta">Book Discovery Call</a>
        </div>
      </div>
      
      {/* Journey line starts here */}
      <div className="journey-line-start" aria-hidden="true"></div>
    </section>
  )
}