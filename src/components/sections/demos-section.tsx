interface DemoData {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  position: 'left' | 'right';
}

const demos: DemoData[] = [
  {
    id: 1,
    title: "Invoice to Excel Converter",
    description: "Transform invoices into structured data",
    instructions: ["Upload invoice PDF", "AI extracts data", "Download Excel file"],
    position: 'left'
  },
  {
    id: 2, 
    title: "Voice Navigation Assistant",
    description: "Navigate interfaces with voice commands",
    instructions: ["Speak your request", "AI processes command", "Action executed"],
    position: 'right'
  },
  {
    id: 3,
    title: "TBD AI Tool",
    description: "More AI solutions coming soon",
    instructions: ["Feature in development", "Stay tuned", "Contact us for updates"],
    position: 'left'
  }
];

export function DemosSection() {
  return (
    <section aria-label="Live Demos" className="demos-section" id="demos">
      <h2>See Our AI Solutions in Action</h2>
      
      {demos.map((demo) => (
        <article key={demo.id} className={`demo-item demo-${demo.position}`}>
          <div className="demo-preview">
            <div className="demo-placeholder">
              <p>Coming Soon</p>
              <span className="demo-status">Demo {demo.id}</span>
            </div>
          </div>
          
          <div className="demo-explanation">
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            
            <div className="demo-instructions">
              <h4>How to use this demo:</h4>
              <ul>
                {demo.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}