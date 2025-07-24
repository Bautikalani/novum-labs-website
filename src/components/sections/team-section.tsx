const teamMembers = [
  {
    id: 1,
    name: "Bautista Kalani Giesenow",
    role: "Chief Executive Officer", 
    linkedin: "[placeholder-url]"
  },
  {
    id: 2,
    name: "Alessandro Donato Pascali",
    role: "Chief Growth Officer",
    linkedin: "[placeholder-url]"
  },
  {
    id: 3,
    name: "Sebastian Kloster", 
    role: "Chief Technology Officer",
    linkedin: "[placeholder-url]"
  },
  {
    id: 4,
    name: "Tomas Gerbi",
    role: "Lead Engineer",
    linkedin: "[placeholder-url]"
  }
];

export function TeamSection() {
  return (
    <section aria-label="Our Team" className="team-section">
      <h2>Meet the Team</h2>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-member">
            <div className="member-photo">
              <img 
                src={`https://via.placeholder.com/400x400.png?text=Team+Member+${member.id}`}
                alt={`Photo of ${member.name}`}
                width="400"
                height="400"
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <a href={member.linkedin} className="linkedin-link">
                LinkedIn Profile
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}