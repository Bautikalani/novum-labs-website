const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understand your unique challenges and opportunities"
  },
  {
    id: 2, 
    title: "Strategy",
    description: "Design AI solutions tailored to your business"
  },
  {
    id: 3,
    title: "Development", 
    description: "Build and test with industry best practices"
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launch, monitor, and continuously improve"
  }
];

export function ProcessSection() {
  return (
    <section aria-label="Our Process" className="process-section">
      <h2>How We Transform Your Business</h2>
      
      <div className="process-flow">
        {processSteps.map((step, index) => (
          <div key={step.id} className="process-step">
            <div className="step-number" aria-hidden="true">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            
            {index < processSteps.length - 1 && (
              <div className="step-connector" aria-hidden="true"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}