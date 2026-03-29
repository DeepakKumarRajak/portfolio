import React, { useState } from 'react';

const CONTACT_EMAIL = 'deepakkrraj4@gmail.com';
const WHATSAPP_NUMBER = '8825371586';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email sending or redirect to a form service
    alert(`Thank you ${formData.name}! In a real React app, you'd use a service like EmailJS or a backend API to send this.`);
    // Optionally open mail client
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="portfolio-app">
      {/* Header / Nav */}
      <header className="glass">
        <div className="container nav-container">
          <a href="#" className="logo heading" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
            <span className="gradient-text">DKR</span>
          </a>
          <nav className="desktop-nav">
            <a href="#about" style={{ marginRight: '1.5rem' }}>About</a>
            <a href="#services" style={{ marginRight: '1.5rem' }}>Services</a>
            <a href="#projects" style={{ marginRight: '1.5rem' }}>Projects</a>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        background: "url('/hero_bg.png') center/cover no-repeat",
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4), var(--bg-main))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-aos="fade-up" style={{ maxWidth: '800px' }}>
            <span className="badge">Available for Projects</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              I help businesses grow online using <span className="gradient-text">Web Dev</span>, <span className="gradient-text">Marketing</span>, & <span className="gradient-text">AI</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Hi, I'm <strong style={{ color: 'white' }}>Deepak Kumar Rajak</strong>. A Full Stack Developer & Digital Marketing Strategist based in Ranchi, Jharkhand.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">View My Work <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: 'rgba(148, 163, 184, 0.02)' }}>
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right">
              <div className="about-img-container">
                <img src="/avatar.png" alt="Deepak Kumar Rajak" />
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="badge">About Me</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A results-driven <span className="gradient-text">Creative Professional</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                With 2+ years of experience, I specialize in building high-performance web applications using modern technologies and crafting data-driven digital marketing campaigns. My approach combines technical excellence with AI-powered automation to deliver measurable growth for my clients.
              </p>
              <div className="stats-grid" style={{ marginTop: '3rem' }}>
                <div className="stat-item">
                  <h3 className="gradient-text" style={{ fontSize: '2rem' }}>10+</h3>
                  <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Websites Built</p>
                </div>
                <div className="stat-item">
                  <h3 className="gradient-text" style={{ fontSize: '2rem' }}>50+</h3>
                  <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Leads Generated</p>
                </div>
                <div className="stat-item">
                  <h3 className="gradient-text" style={{ fontSize: '2rem' }}>5K+</h3>
                  <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Social Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <span className="badge">My Services</span>
            <h2>What I Can Do <span className="gradient-text">For You</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '1rem' }}>From building your digital infrastructure to scaling your reach with AI and data-driven marketing.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* Service 1 */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div style={{ width: '50px', height: '50px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-code" style={{ color: '#6366f1', fontSize: '1.5rem' }}></i>
              </div>
              <h3>Web Development</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#6366f1', marginRight: '0.5rem' }}></i> Business Websites</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#6366f1', marginRight: '0.5rem' }}></i> E-commerce Platforms</li>
                <li><i className="fa-solid fa-check" style={{ color: '#6366f1', marginRight: '0.5rem' }}></i> Custom Web Applications</li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div style={{ width: '50px', height: '50px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-bullhorn" style={{ color: '#06b6d4', fontSize: '1.5rem' }}></i>
              </div>
              <h3>Digital Marketing</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '0.5rem' }}></i> Advanced SEO Strategy</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '0.5rem' }}></i> Social Media Marketing</li>
                <li><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '0.5rem' }}></i> Google & Meta Ads Management</li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <div style={{ width: '50px', height: '50px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-robot" style={{ color: '#a855f7', fontSize: '1.5rem' }}></i>
              </div>
              <h3>AI Services</h3>
              <ul style={{ listStyle: 'none', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '0.5rem' }}></i> AI Content Automation</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '0.5rem' }}></i> Intelligent Chatbots</li>
                <li><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '0.5rem' }}></i> Workflow Marketing AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <span className="badge">Portfolio</span>
            <h2>Recent <span className="gradient-text">Masterpieces</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
            {/* Project 1 */}
            <div className="card" data-aos="fade-up" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/project_ecommerce.png" alt="E-commerce project" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 600, textTransform: 'uppercase' }}>MERN & PHP</p>
                <h3 style={{ marginBottom: '0.75rem' }}>E-commerce Ecosystem</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>A multi-feature e-commerce platform with real-time inventory and dashboard management.</p>
                <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>View Case Study</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="card" data-aos="fade-up" data-aos-delay="100" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/project_resume.png" alt="Resume Builder" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#06b6d4', fontWeight: 600, textTransform: 'uppercase' }}>PHP + MySQL</p>
                <h3 style={{ marginBottom: '0.75rem' }}>Smart Resume Builder</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Dynamic resume generation tool with custom templates and PDF export capabilities.</p>
                <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>Live Demo</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/project_spam.png" alt="SMS Spam Detection" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#a855f7', fontWeight: 600, textTransform: 'uppercase' }}>Python + Machine Learning</p>
                <h3 style={{ marginBottom: '0.75rem' }}>SMS Spam Detection</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>AI-powered application to classify and filter spam messages using NLP models.</p>
                <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>GitHub Repo</a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="card" data-aos="fade-up" data-aos-delay="300" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/project_face.png" alt="Face Recognition" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, textTransform: 'uppercase' }}>Python + OpenCV</p>
                <h3 style={{ marginBottom: '0.75rem' }}>Face Recognition System</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Automated attendance tracking using facial identification and real-time logs.</p>
                <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ background: 'rgba(148, 163, 184, 0.02)' }}>
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <span className="badge">Trust</span>
            <h2>What Clients <span className="gradient-text">Say</span></h2>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', scrollSnapType: 'x mandatory' }}>
            <div className="card" style={{ minWidth: '350px', scrollSnapAlign: 'start' }}>
              <i className="fa-solid fa-quote-left" style={{ fontSize: '2rem', color: '#6366f1', opacity: 0.5, marginBottom: '1rem' }}></i>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>"Deepak transformed our company's online presence. The leads generated through his marketing strategies exceeded all expectations."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/client_1.png" alt="Rajesh Kumar" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Rajesh Kumar</h4>
                  <p style={{ fontSize: '0.8rem', color: '#6366f1' }}>Founder, Tech Solutions Ranchi</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ minWidth: '350px', scrollSnapAlign: 'start' }}>
              <i className="fa-solid fa-quote-left" style={{ fontSize: '2rem', color: '#06b6d4', opacity: 0.5, marginBottom: '1rem' }}></i>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>"A brilliant developer with a keen eye for design. Our e-commerce site is faster and more intuitive than ever."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/client_2.png" alt="Anjali Singh" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Anjali Singh</h4>
                  <p style={{ fontSize: '0.8rem', color: '#06b6d4' }}>CEO, Fashion Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-head" data-aos="fade-up">
            <span className="badge">Contact</span>
            <h2>Get in <span className="gradient-text">Touch</span></h2>
            <p style={{ color: 'var(--text-secondary)' }}>Looking for a partner to grow your business? Let's talk.</p>
          </div>

          <div className="contact-grid" style={{ marginTop: '3rem' }}>
            <div data-aos="fade-right">
              <div className="card" style={{ height: '100%' }}>
                <h3>Let's build something <span className="gradient-text">extraordinary</span> together.</h3>
                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-phone" style={{ color: '#6366f1' }}></i>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Call Me</p>
                      <p style={{ fontWeight: 600 }}>+91 {WHATSAPP_NUMBER}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-envelope" style={{ color: '#06b6d4' }}></i>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email Me</p>
                      <p style={{ fontWeight: 600 }}>{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#a855f7' }}></i>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                      <p style={{ fontWeight: 600 }}>Ranchi, Jharkhand, India</p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
                  <a href="https://www.linkedin.com/in/deepak-kumar-rajak-11093b177/" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}><i className="fa-brands fa-linkedin hover:text-white"></i></a>
                  <a href="https://github.com/DeepakKumarRajak" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}><i className="fa-brands fa-github hover:text-white"></i></a>
                  <a href="https://x.com/DeepakKumarRajak" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}><i className="fa-brands fa-twitter hover:text-white"></i></a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <form onSubmit={handleSubmit} className="card">
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Deepak Kumar"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="deepak@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Describe your project</label>
                  <textarea
                    name="message"
                    className="form-input"
                    rows="5"
                    placeholder="Tell me about what you want to build..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: '0.5rem' }}></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
        <div className="container">
          <p>&copy; 2026 Deepak Kumar Rajak. All Rights Reserved.</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>Built with Passion & React.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hi Deepak, I saw your portfolio and wanted to discuss a project.`} target="_blank" rel="noreferrer" className="whatsapp-float">
        <i className="fa-brands fa-whatsapp" style={{ fontSize: '2rem', color: 'white' }}></i>
      </a>
    </div>
  );
}

export default App;
