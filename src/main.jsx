import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = [
  { name: 'Python', icon: 'Py', level: 'Core skill' },
  { name: 'C Programming', icon: 'C', level: 'Core skill' },
  { name: 'Advanced C', icon: 'C+', level: 'Core skill' },
  { name: 'Data Structures & Algorithms', icon: 'DS', level: 'Core skill' },
  { name: 'Communication', icon: '↗', level: 'People skill' },
  { name: 'Teamwork', icon: '◎', level: 'People skill' },
]

const projects = [
  {
    number: '01',
    title: '2D Graphics Editor',
    type: 'SYSTEMS / GRAPHICS',
    technology: 'C Programming',
    description: 'Developed a 2D Graphics Editor using C programming with basic graphics operations.',
    visual: 'editor-visual',
  },
  {
    number: '02',
    title: 'Bluetooth Controlled Car',
    type: 'HARDWARE / IOT',
    technology: 'Arduino, IoT',
    description: 'Developed a Bluetooth-controlled car using Arduino and IoT components, controlled through a mobile application.',
    visual: 'car-visual',
  },
  {
    number: '03',
    title: 'ManganQuest',
    type: 'AI & DATA SCIENCE',
    icon: BrainCircuit,
    description: 'An AI-powered platform for manganese exploration and production analysis.'
},
]

const certifications = [
  { title: 'IBM SkillsBuild Certification', issuer: 'IBM SkillsBuild', mark: 'IBM' },
  { title: 'Wadhwani Foundation Certification', issuer: 'Wadhwani Foundation', mark: 'W' },
  { title: 'Instagram Design System Certification', issuer: 'Instagram Design System', mark: 'IG' },
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const submitForm = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setFormStatus('Thanks for reaching out. Your message is ready to send.')
    form.reset()
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="N. Deeksha home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">N. Deeksha</span>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-content reveal">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>Building a future<br />with <em>intelligence.</em></h1>
            <p className="hero-intro">Hi, I&apos;m N. Deeksha</p>
            <p className="hero-copy">Passionate about Programming, AI &amp; Data Science</p>
            <div className="hero-education"><span>B.Tech – Artificial Intelligence &amp; Data Science</span><span>Reva University, Bangalore</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my projects <ArrowIcon /></a>
              <a className="button button-quiet" href="#contact">Contact me <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core"><span>AI</span><small>01</small></div>
            <span className="orbit-label label-one">logic</span><span className="orbit-label label-two">create</span><span className="orbit-label label-three">learn</span>
          </div>
          <div className="hero-footer"><span>01 / 06</span><span>Scroll to explore <b>↓</b></span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-label reveal"><span>01</span><span>About me</span></div>
          <div className="intro-layout">
            <h2 className="display-heading reveal">Curious by nature.<br /><span>Driven by impact.</span></h2>
            <div className="intro-text reveal">
              <p>I am N. Deeksha, a B.Tech student specializing in Artificial Intelligence & Data Science. I am interested in programming, technology, and developing creative solutions to real-world problems. I am passionate about learning new technologies and improving my technical skills.</p>
              <div className="education-line"><span className="line-icon">✦</span><div><strong>B.Tech – Artificial Intelligence & Data Science</strong><span>Reva University, Bangalore</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-label reveal"><span>02</span><span>Capabilities</span></div>
          <div className="section-heading-row reveal"><h2 className="display-heading">A toolkit built<br /><span>to keep growing.</span></h2><p>Technical foundations paired with the human skills that make good work possible.</p></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-card reveal" style={{ '--delay': `${index * 70}ms` }} key={skill.name}><span className="skill-icon">{skill.icon}</span><div><h3>{skill.name}</h3><span>{skill.level}</span></div><ArrowIcon /></div>)}</div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-label reveal"><span>03</span><span>Selected work</span></div>
          <div className="section-heading-row reveal"><h2 className="display-heading">Ideas into<br /><span>real things.</span></h2><p>Projects where code meets curiosity, hardware, and a desire to understand how things work.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card reveal" style={{ '--delay': `${index * 120}ms` }} key={project.title}><div className={`project-visual ${project.visual}`}><span className="project-number">{project.number}</span>{project.visual === 'editor-visual' ? <><div className="window-bar"><i /><i /><i /></div><div className="canvas-lines"><b /><b /><b /><b /></div><div className="cursor-shape">+</div></> : <><div className="car-body"><i /><i /></div><div className="signal signal-a">⌁</div><div className="signal signal-b">⌁</div></>}</div><div className="project-body"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-meta"><span>{project.technology}</span><ArrowIcon /></div></div></article>)}</div>
        </section>

        <section className="certifications section-pad" id="certifications">
          <div className="section-label reveal"><span>04</span><span>Learning milestones</span></div>
          <div className="section-heading-row reveal"><h2 className="display-heading">Always in<br /><span>discovery mode.</span></h2><p>Every certification is a marker of momentum and a new perspective to carry forward.</p></div>
          <div className="cert-grid">{certifications.map((cert, index) => <div className="cert-card reveal" style={{ '--delay': `${index * 90}ms` }} key={cert.title}><span className="cert-mark">{cert.mark}</span><div><span className="cert-label">CERTIFICATION / 0{index + 1}</span><h3>{cert.title}</h3><p>{cert.issuer}</p></div><span className="cert-arrow">↗</span></div>)}</div>
        </section>

        <section className="career section-pad" id="career">
          <div className="career-card reveal"><div><span className="section-label light"><span>05</span><span>Direction</span></span><h2>Where I&apos;m<br /><em>headed.</em></h2></div><div className="career-copy"><span className="quote-mark">“</span><p>My goal is to build a successful career in Artificial Intelligence and Data Science, learn new technologies, and develop innovative solutions for real-world problems.</p><span className="signature">N. Deeksha <i>— ambition in motion</i></span></div></div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-label reveal"><span>06</span><span>Contact</span></div>
          <div className="contact-layout"><div className="contact-heading reveal"><h2 className="display-heading">Let&apos;s make<br /><span>something matter.</span></h2><p>Have a project, an idea, or simply want to say hello? My inbox is always open.</p><div className="contact-details"><a href="mailto:deekshareddy719@gmail.com"><span>Email</span>deekshareddy719@gmail.com <ArrowIcon /></a><a href="tel:7019546781"><span>Phone</span>7019546781 <ArrowIcon /></a></div></div><form className="contact-form reveal" onSubmit={submitForm}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label><button className="button button-primary" type="submit">Send message <ArrowIcon /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">N. Deeksha</span></a><div><span>B.Tech – Artificial Intelligence & Data Science</span><span>Reva University, Bangalore</span></div><span>© 2026 N. Deeksha. All Rights Reserved.</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
