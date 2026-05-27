export default function Education() {
  const educations = [
    {
      school: 'University of Southern California',
      degree: 'Master of Science in Applied Data Science',
      location: 'Los Angeles, United States',
      startDate: 'Aug 2024',
      endDate: 'May 2026',
      icon: 'fa-graduation-cap',
    },
    {
      school: 'National Chengchi University',
      degree: 'Bachelor of Arts in Economics',
      minor: 'Minor in Management of Information System',
      location: 'Taipei, Taiwan',
      startDate: 'Sep 2019',
      endDate: 'Jun 2023',
      gpa: '3.96/4.00',
      icon: 'fa-book',
    },
  ]

  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-school section-icon"></i> Education
        </h2>
        {educations.map((edu, idx) => (
          <div key={idx} className="education-item" style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both` }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <i className={`fas ${edu.icon}`} style={{ color: '#764ba2', fontSize: '1.3rem' }}></i>
                <h3 className="mb-0">{edu.school}</h3>
              </div>
              <div className="subheading mb-0">{edu.degree}</div>
              {edu.minor && <div style={{ color: '#666', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{edu.minor}</div>}
              {edu.gpa && <p style={{ marginTop: '0.5rem', marginBottom: 0, color: '#764ba2', fontWeight: '600' }}>
                <i className="fas fa-star" style={{ marginRight: '0.5rem' }}></i> GPA: {edu.gpa}
              </p>}
            </div>
            <div className="text-primary">
              <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                <i className="fas fa-calendar-alt"></i> {edu.startDate} - {edu.endDate}
              </div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                <i className="fas fa-map-marker-alt"></i> {edu.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
