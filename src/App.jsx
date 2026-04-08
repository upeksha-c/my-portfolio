import { useState } from 'react';
import './App.css';
import ai_feedback_tool from './assets/images/Ai-feedback-tool.jpeg';
import budget_tracker from './assets/images/new_budget_tracker.png';
import job_application_tracker from './assets/images/job_application_tracker.png';
import cinescope from './assets/images/cinescope.png';
import quizzify from './assets/images/quizzify.png';
import profile_image from './assets/images/profile_image.png';
import burntracker from './assets/images/burntrack.png';
import taskflow_ai_analytics from './assets/images/taskflow_ai_analytics.png';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute('data-bs-theme', newMode ? 'dark' : 'light');
  };

  const projects = [
    {
      title: "AI-Powered Feedback Tool",
      desc: "Full-stack learning platform with AI-generated feedback, timed exams, and teacher dashboard using React, Node.js, Supabase & multiple AI APIs.",
      img: ai_feedback_tool,
      github: "https://aifeedbacktool.netlify.app/",
      live: "https://aifeedbacktool.netlify.app/"
    },
    {
      title: "New Budget Tracker",
      desc: "Android mobile app for budget management with charts, alerts and Firebase. Built with Kotlin & Jetpack Compose.",
      img: budget_tracker,
      github: "https://github.com/GrpMobileApp/NewBudgetTracker",
      live: "#"
    },
    {
      title: "Job Application Tracker",
      desc: "Full-stack web app to track job applications with AI insights using Cohere. React + Node.js + Supabase.",
      img: job_application_tracker,
      github: "https://github.com/upeksha-c/Job-Application-Tracker",
      live: "https://job-application-tracker-frontend-uu9w.onrender.com/"
    },
    {
      title: "BurnTrack",
      desc: "A mobile fitness application delivering personalized workout routines. Built with Kotlin and Jetpack Compose using MVVM architecture and Material 3 design, fetching real-time exercise data from external APIs.",
      img: burntracker,
      github: "https://github.com/upeksha-c/BurnTrack.git",
      live: "#"
    },
    {
      title: "CineScope – Movie Web App",
      desc: "Movie browsing platform with TMDB integration, live showtimes, reviews and groups. React, Node.js & PostgreSQL.",
      img: cinescope,
      github: "https://github.com/DIN-Project-Team-4/cinescope-frontend.git",
      live: "#"
    },
    {
      title: "Task Flow AI Analytics",
      desc: "An intelligent full-stack task management system featuring AI-driven productivity insights via Cohere. Built with React and Express, it integrates Supabase for secure data storage and real-time analytics dashboards.",
      img: taskflow_ai_analytics,
      github: "https://github.com/Deepening-Of-Proffesional-Skill/Task_Flow_AI_Analytics",
      live: "https://task-flow-ai-analytics-1.onrender.com/"
    },
    {
      title: "Quizzify - Quiz Platform",
      desc: "Interactive quiz application with backend API and MySQL. Team project using React, Node.js & Express.",
      img: quizzify,
      github: "https://github.com/Gloryozo/Quizzify",
      live: "#"
    }
  ];

  const downloadCV = () => {
    // Trigger the Email/Notification
    console.log("Download started...");
    console.log("Service ID:", import.meta.env.VITE_MY_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_MY_TEMPLATE_ID);
    const templateParams = {
      message: "Someone just downloaded your CV from your portfolio!",
      time: new Date().toLocaleString()
    };

    emailjs.send(import.meta.env.VITE_MY_SERVICE_ID, import.meta.env.VITE_MY_TEMPLATE_ID, templateParams, import.meta.env.VITE_MY_PUBLIC_KEY)
      .then(() => console.log('Notification sent!'))
      .catch((err) => console.error('Failed to send notification', err));

    // Perform the actual download
    const link = document.createElement('a');
    link.href = '/Upeksha_Gulegodage_CV.pdf';
    link.download = 'Upeksha_Gulegodage_CV.pdf';
    link.click();
  };

  //contact form submission handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handles actual email sending using emailjs
  const sendEmail = (e) => {
  e.preventDefault(); 

  emailjs.send(
      import.meta.env.VITE_MY_SERVICE_ID,
      import.meta.env.VITE_CONTACT_FORM_TEMPLATE_ID, 
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_MY_PUBLIC_KEY
  )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    })
    .catch((err) => console.error("Send failed:", err));
  };



  return (
    <div className={`min-vh-100 ${darkMode ? 'dark-theme' : 'light-theme'}`}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: '#57A6A1' }}>Upeksha Gulegodage</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
              <li className="nav-item ms-3">
                <button onClick={toggleDarkMode} className="btn btn-outline-secondary">
                  {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* description */}
      <section className="hero-section py-5 text-center text-white">
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-2">Hi, I'm Upeksha Chiranthi</h1>
          <p className="lead fs-2 mb-3">Junior Full-Stack Developer | Mobile App Developer</p>

          <p className="col-lg-8 mx-auto fs-5 opacity-90 mb-5">
            Building reliable web and mobile applications with a strong focus on clean code, while developing skills in software testing and broader software development practices.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/upeksha-godage/" target="_blank" className="social-btn linkedin-btn">
              <i className="bi bi-linkedin me-2"></i> LinkedIn
            </a>
            <a href="https://github.com/upeksha-c" target="_blank" className="social-btn github-btn">
              <i className="bi bi-github me-2"></i> GitHub
            </a>
            <a className="social-btn cv-btn" onClick={downloadCV}>
              <i className="bi bi-file-earmark-text me-2"></i> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-semibold">About Me</h2>
          <div className="row g-5 align-items-center">
            <div className="col-md-5 text-center">
              <div className="profile-image-container rounded-circle overflow-hidden mx-auto shadow" >
                <img src={profile_image} alt="Upeksha" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className="col-md-7">
              <p className="lead fs-4">
                I am an engineering student with hands-on experience in full-stack and mobile application development. I enjoy building practical, user-focused applications and continuously improving my skills through real-world projects.
              </p>
              <p className="lead fs-4">
                Through my studies and projects, I have gained experience in developing web and mobile applications, working with modern technologies, and understanding software development practices. I am motivated to learn, grow, and contribute to real-world software development environments.
              </p>
              <p className="pt-3">
                Currently studying Bachelor of Engineering at Oulu University of Applied Sciences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-semibold">Skills & Technologies</h2>

          <div className="row justify-content-center">
            <div className="col-lg-9">

              {/* Programming Languages */}
              <div className="skill-category-card text-center mb-5">
                <div className="category-header justify-content-center mb-4">
                  <i className="bi bi-code-slash"></i>
                  <h4>Programming Languages & Testing Frameworks</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['JavaScript', 'TypeScript', 'Kotlin', 'C programming', 'C++', 'Python', 'Java', 'Jest', 'Vitest'].map((s, i) => (
                    <div key={i} className="skill-chip">{s}</div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="skill-category-card text-center mb-5">
                <div className="category-header justify-content-center mb-4">
                  <i className="bi bi-window-sidebar"></i>
                  <h4>Frontend Development</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['React.js', 'Bootstrap', 'CSS', 'HTML'].map((s, i) => (
                    <div key={i} className="skill-chip">{s}</div>
                  ))}
                </div>
              </div>

              {/* Backend & Tools */}
              <div className="skill-category-card text-center mb-5">
                <div className="category-header justify-content-center mb-4">
                  <i className="bi bi-server"></i>
                  <h4>Backend & Tools</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['Node.js', 'Express', 'REST API', 'Supabase', 'Firebase', 'Git & GitHub', 'Agile'].map((s, i) => (
                    <div key={i} className="skill-chip">{s}</div>
                  ))}
                </div>
              </div>

              {/* AI & Others */}
              <div className="skill-category-card text-center mb-5">
                <div className="category-header justify-content-center mb-4">
                  <i className="bi bi-cpu"></i>
                  <h4>AI & Others</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['OpenAI API', 'Cohere AI', 'GitHub Copilot'].map((s, i) => (
                    <div key={i} className="skill-chip">{s}</div>
                  ))}
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="skill-category-card text-center">
                <div className="category-header justify-content-center mb-4">
                  <i className="bi bi-globe"></i>
                  <h4>Languages Spoken</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['Sinhala (Mother Tongue)', 'English', 'Finnish'].map((s, i) => (
                    <div key={i} className="skill-chip language-chip">{s}</div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-semibold">My Projects</h2>

          <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[0, 2, 4].map((startIdx) => (
                <div key={startIdx} className={`carousel-item ${startIdx === 0 ? 'active' : ''}`}>
                  <div className="row g-4">
                    {projects.slice(startIdx, startIdx + 3).map((project, i) => (
                      <div className="col-md-6 col-lg-4" key={i}>
                        {/* ADDED: d-flex flex-column to the card */}
                        <div className="project-card h-100 shadow rounded-4 overflow-hidden d-flex flex-column">
                          <img 
                            src={project.img} 
                            className="card-img-top" 
                            alt={project.title}
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          {/* ADDED: flex-grow-1 to the content area */}
                          <div className="p-4 project-content d-flex flex-column flex-grow-1">
                            <h4 className="fw-bold mb-3">{project.title}</h4>
                            <p className="flex-grow-1 mb-4">{project.desc}</p>
                            
                            {/* Button Container */}
                            <div className="mt-auto d-flex flex-wrap gap-2 pt-3">
                              <a 
                                href={project.github} 
                                target="_blank" 
                                className="project-chip github-chip" 
                                rel="noopener noreferrer" 
                              >
                                <i className="bi bi-github me-1"></i> GitHub
                              </a>
                              {project.live !== "#" && (
                                <a 
                                  href={project.live} 
                                  target="_blank" 
                                  rel='noopener noreferrer'
                                  className="btn btn-sm btn-outline-info shadow-sm"
                                >
                                  <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-5" style={{ background: 'linear-gradient(135deg, #240750, #344C64)' }}>
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-semibold text-white">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <form  onSubmit={sendEmail} className="p-5 rounded-4 shadow" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="email" className="form-control form-control-lg" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control form-control-lg" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}  />
                </div>
                <div className="mb-4">
                  <textarea className="form-control form-control-lg" rows="6" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn w-100 py-3 fw-semibold fs-5" 
                        style={{ backgroundColor: '#57A6A1', color: 'white', border: 'none' }}>
                  Send Message
                </button>
              </form>

              <div className="text-center mt-5 text-white">
                <p className="mb-1">📞 (+358) 413194140</p>
                <p className="mb-1">✉️ upekshachiranthi@gmail.com</p>
                <p>📍 Oulu, Finland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center">
        <p className="mb-0">&copy; 2026 Upeksha Chiranthi Gulegodage • Built with React + Bootstrap</p>
      </footer>
    </div>
  );
}

export default App;