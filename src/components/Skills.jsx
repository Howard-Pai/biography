export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: 'Python, SQL, Java, Bash, C, R, JavaScript, HTML, CSS',
      icon: 'fa-code',
    },
    {
      name: 'Data Engineering',
      skills: 'Spark, Hadoop, Kafka, ETL pipelines, Distributed Processing',
      icon: 'fa-network-wired',
    },
    {
      name: 'Databases & Cloud',
      skills: 'Snowflake, MySQL, MongoDB, Amazon EC2, Google Cloud, Firebase',
      icon: 'fa-cloud',
    },
    {
      name: 'Machine Learning & AI',
      skills: 'PyTorch, TensorFlow, Keras, HuggingFace, RAG, Graph RAG',
      icon: 'fa-brain',
    },
    {
      name: 'Tools & Systems',
      skills: 'Git, Claude Code, CUDA, Amazon Lambda, Kafka, Linux, Docker, React',
      icon: 'fa-toolbox',
    },
  ]

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-cogs section-icon"></i> Skills
        </h2>
        <div className="skills-list">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-item" style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <i className={`fas ${category.icon}`} style={{ color: '#667eea', fontSize: '1.5rem' }}></i>
                <strong style={{ fontSize: '1.1rem' }}>{category.name}</strong>
              </div>
              <div style={{ color: '#666' }}>{category.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
