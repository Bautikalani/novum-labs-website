export function Header() {
  return (
    <header role="banner" className="site-header">
      <div className="header-container">
        <div className="logo">
          <h1>Novum Labs</h1>
        </div>
        <nav role="navigation" aria-label="Main navigation">
          <a href="#book-call" className="cta-button">
            Book Call
          </a>
        </nav>
      </div>
    </header>
  )
}