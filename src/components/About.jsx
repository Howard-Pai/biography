export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0" style={{ animation: 'slideInUp 0.6s ease-out' }}>
          Chih-Yun
          <span className="text-primary"> Pai</span>
        </h1>
        <div className="subheading mb-5" style={{ animation: 'slideInUp 0.6s ease-out 0.1s both', fontSize: '1.1rem' }}>
          <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i> 213-696-2958 |
          <a href="mailto:tmps9930715@gmail.com" style={{ marginLeft: '0.5rem' }}>
            <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i> tmps9930715@gmail.com
          </a>
        </div>
        <p className="lead mb-5" style={{ animation: 'slideInUp 0.6s ease-out 0.2s both' }}>
          I'm a data scientist and machine learning engineer passionate about leveraging advanced AI techniques
          to solve complex problems. Currently just got my master degree in Applied Data Science at USC. I specialize in
          retrieval-augmented generation (RAG), graph neural networks, and building scalable data pipelines. With
          experience in both academic research and industry projects, I combine strong technical skills in Python,
          PyTorch, and cloud technologies with a deep understanding of data engineering and ML systems.
        </p>
        <div className="social-icons" style={{ animation: 'slideInUp 0.6s ease-out 0.3s both' }}>
          <a className="social-icon" href="https://www.linkedin.com/in/chihyun-pai/" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/Howard-Pai" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
