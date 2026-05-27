export default function Interests() {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">
          <i className="fas fa-heart section-icon"></i> Interests
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            borderLeft: '4px solid #667eea',
            animation: 'slideInUp 0.6s ease-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <i class="fa-sharp fa-solid fa-badminton" style={{ color: '#667eea', fontSize: '1.8rem' }}></i>
              <h3 style={{ margin: 0, color: '#333' }}>Badminton</h3>
            </div>
            <p style={{ color: '#666', lineHeight: '1.7' }}>
              I'm an enthusiast of various sports. One of my great passions in life is playing badminton. There's something
              exhilarating about the fast-paced nature of the game and the thrill of each rally that keeps me hooked.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            borderLeft: '4px solid #764ba2',
            animation: 'slideInUp 0.6s ease-out 0.1s both'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(118, 75, 162, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <i className="fas fa-snowflake" style={{ color: '#764ba2', fontSize: '1.8rem' }}></i>
              <h3 style={{ margin: 0, color: '#333' }}>Skiing</h3>
            </div>
            <p style={{ color: '#666', lineHeight: '1.7', margin: 0 }}>
              In addition to badminton, I am a novice skier. In winter, you may find me slipping down the hill in Hokkaido. :)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
