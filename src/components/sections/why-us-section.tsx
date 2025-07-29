// src/components/sections/why-us-section.tsx
export function WhyUsSection() {
    return (
      <section id="why-us" className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Novum Labs
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We deliver AI solutions that work in the real world, not just in theory
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder cards - will be built out in phases */}
            <article className="card">
              <div className="w-12 h-12 bg-surface-3 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast Implementation</h3>
              <p className="text-text-secondary">
                From concept to deployment in weeks, not months.
              </p>
            </article>
            
            <article className="card">
              <div className="w-12 h-12 bg-surface-3 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Actually Smart Solutions</h3>
              <p className="text-text-secondary">
                Custom AI models trained on your data, not generic solutions.
              </p>
            </article>
            
            <article className="card">
              <div className="w-12 h-12 bg-surface-3 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Built to Scale</h3>
              <p className="text-text-secondary">
                Enterprise-ready from day one. Handles millions of operations.
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }