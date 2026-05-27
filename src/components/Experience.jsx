export default function Experience() {
  const experiences = [
    {
      title: 'Volunteer Researcher',
      company: 'Information Science Institute',
      location: '',
      startDate: 'Mar 2026',
      endDate: 'present',
      icon: 'fa-flask',
      description: [
        'Worked on graph neural network (GNN) regression and classification tasks by translating knowledge graph data prediction problems into GNN-based learning frameworks using KGEDSL.',
        'Developed Knowledge Graph Retrieval-Augmented Generation (KGRAG) pipelines that retrieve relevant knowledge subgraphs and leverage LLMs for prediction generation and performance comparison.',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'National Academy of Taiwan',
      location: 'Remote',
      startDate: 'Nov 2024',
      endDate: 'Jun 2025',
      icon: 'fa-brain',
      description: [
        'Conducted Retrieval-Augmented Generation (RAG) experiments to analyze the impact of context reordering, fine-tuning strategies, and golden-to-irrelevant context ratios on small-domain dataset.',
        'Evaluated long-form answer quality using multiple LLM evaluation metrics, including BERTScore, GPTScore, and G-Eval, to assess semantic similarity, factual consistency, and response coherence.',
        'Collaborated with Innolux Corporation to investigate the applicability of Graph RAG for enterprise knowledge retrieval and multi-hop reasoning tasks, improving information traceability.',
      ],
    },
    {
      title: 'Assistant Researcher Intern',
      company: 'Taiwan Institute of Economic Research',
      location: 'Taipei, Taiwan',
      startDate: 'Nov 2022',
      endDate: 'Jun 2023',
      icon: 'fa-chart-bar',
      description: [
        'Analyzed industrial and policy reports on telecommunication-related topics, including 5G infrastructure development, digital transformation, broadband policy, and emerging communication technologies.',
        'Generated research summaries and regulatory analyses for the National Communications Commission (NCC) to support policy evaluation, telecommunications market assessment, and industry monitoring.',
        'Performed create, read, update, delete (CRUD) operations on internal databases and maintained data integrity through official API to support reliable data synchronization and accurate record management.',
      ],
    },
  ]

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-briefcase section-icon"></i> Experience
        </h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item" style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both` }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <i className={`fas ${exp.icon}`} style={{ color: '#667eea', fontSize: '1.3rem' }}></i>
                <h3 className="mb-0">{exp.title}</h3>
              </div>
              <div className="subheading mb-3">
                <i className="fas fa-building" style={{ marginRight: '0.5rem' }}></i> {exp.company}
              </div>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="text-primary">
              <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                <i className="fas fa-calendar-alt"></i> {exp.startDate} - {exp.endDate}
              </div>
              {exp.location && <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}><i className="fas fa-map-marker-alt"></i> {exp.location}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
