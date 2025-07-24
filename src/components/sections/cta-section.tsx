export function CTASection() {
  return (
    <section aria-label="Contact Us" className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Let's discuss how AI can solve your specific challenges</p>
        
        <a href="#book-call" id="book-call" className="primary-cta">
          Book Discovery Call
        </a>
      </div>
      
      {/* Journey line ends here */}
      <div className="journey-line-end" aria-hidden="true"></div>
    </section>
  )
}