export default function Projects() {
  const projects = [
    {
      title: 'OCR-Based Data Pipeline for Oil well data',
      technologies: 'PyTesseract, Snowflake, Vite',
      date: 'Spring 2026',
      icon: 'fa-file-pdf',
      description: [
        'Built an end-to-end ETL pipeline to extract structured data from scanned PDF documents using OCR.',
        'Automated batch ingestion of unstructured files and transformed extracted text into structured tables.',
        'Enriched datasets by integrating external web data through automated scraping and API-based queries.',
      ],
    },
    {
      title: 'Kalman Filter Pair Trading Strategy',
      technologies: 'Python, JAX, PySpark, Kafka',
      date: 'Jun 2025 - Present',
      icon: 'fa-chart-line',
      description: [
        'Implemented 4-layer Kalman Filter in JAX (JIT) for real-time beta estimation and spread generation.',
        'Built Level 2 tick data pipeline (Databento + Kafka) and applied OPTICS clustering on 500+ equities.',
        'Developed adaptive beta system with AR(1)-based regime detection for robust hedge ratios.',
      ],
    },
    {
      title: 'Hybrid Recommendation System',
      technologies: 'Python, Spark, XGBoost',
      date: 'Fall 2025',
      icon: 'fa-star',
      description: [
        'Leveraged Spark (RDD/DataFrame APIs) for distributed ETL processing on Yelp datasets.',
        'Optimized weighted blending using cross-validation, achieving RMSE of 0.9764 on validation set.',
        'Processed millions of records and optimized data transformations to improve pipeline efficiency.',
      ],
    },
    {
      title: 'CUDA Acceleration Study: Convolution & Matrix Multiplication',
      technologies: 'C, CUDA, Python',
      date: 'Spring 2026',
      icon: 'fa-bolt',
      description: [
        'Implemented CPU, naive/optimized GPU, and cuBLAS to study CUDA overhead and scaling behavior.',
        'Showed shared-memory tiling and library optimizations outperform custom kernels on large workloads.',
        'Exposed CUDA kernels to Python via shared libraries for rapid experimentation and analysis.',
      ],
    },
  ]

  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-rocket section-icon"></i> Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-icon">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <div className="project-content">
                <h3 className="mb-0">{project.title}</h3>
                <div className="subheading mb-3">{project.technologies}</div>
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="project-date">
                <i className="fas fa-calendar-alt"></i> {project.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
