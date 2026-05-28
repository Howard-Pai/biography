import profileImage from '../assets/img/profile.jpeg'

export default function Sidebar({ activeSection }) {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'interests', label: 'Interests' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav id="sideNav">
      <div className="navbar-brand">
        <span className="d-lg-none brand-name">Chih-Yun Pai</span>
        <img src={profileImage} alt="Chih-Yun Pai" className="img-profile" />
      </div>
      <ul className="navbar-nav">
        {sections.map((section) => (
          <li key={section.id} className="nav-item">
            <a
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              href={`#${section.id}`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
