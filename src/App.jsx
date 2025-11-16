import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const user = {
    name: "Sasidhar Kanakinti",
    title: "AI Engineer | Full-Stack Developer",
    email: "9908135565ks@gmail.com",
    linkedin: "https://www.linkedin.com/in/sasidhar-kanakinti-a88824383",
    github: "https://github.com/sasi-kanakinti",
    resume: "/Sasi_Resume_3.pdf",
    profileSrc: "/profile.jpg",
    bioLines: [
      "B.Tech in CSE from Annamacharya Institute of Technology & Sciences; aspiring AI Engineer with a Java Full Stack foundation.",
      "Skilled in Python, LangChain, Hugging Face, RAG, Generative AI, Databricks, and Azure AI Services.",
    //  / "Driven by curiosity about how technology transforms the world — I build projects that bridge engineering and intelligence.",
      "Explore my work: github.com/sasi-kanakinti. Currently seeking full-time roles in AI/ML and Generative AI development.",
    ],
    education:
      "B. Tech in CSE - Annamacharya Institute of Technology & Sciences",
    location: "Tirupati, India",
  };

  const projects = [
    {
      title: "Files-Parsing",
      desc: "Automated file parsing system using Python and Databricks to clean, process, and extract structured data efficiently.",
      tech: ["Python", "Databricks"],
      link: "https://github.com/sasi-kanakinti/Files-Parsing.git",
      demo: "https://portfolio-demo-basic.vercel.app",
    },
    {
      title: "Chat-Bot",
      desc: "Conversational AI chatbot leveraging OpenAI models for interactive responses and intelligent communication.",
      tech: ["Python", "OpenAI"],
      link: "https://github.com/sasi-kanakinti/Chat-bot.git",
      demo: "https://chat-bot-inky-omega-98.vercel.app/",
    },
     {
      title: "VidSNAP-AI",
      desc: "VidSnapAI is an automated reel generator that converts text into speech and merges it with video content using FFmpeg.",
      tech: ["Python", "FFMPEG", "Flask"],
      link: "https://github.com/sasi-kanakinti/VidSnapAI.git",
      demo: "https://vidsnapai-2vcs.onrender.com",
    },
    {
      title: "Mobile Prepaid Recharge",
      desc: "Full-stack Java application enabling secure mobile prepaid recharges using Spring Boot and Spring Security.",
      tech: ["Java", "Spring Boot", "Spring Security"],
      link: "https://github.com/sasi-kanakinti/Mobile_Prepaid_Recharge.git",
      demo: "#",
    },
  ];

  const skillBlocks = [
    { title: "Programming & Data", items: ["Python", "Java", "JavaScript", "SQL"] },
    { title: "Scripting", items: ["HTML", "CSS"] },
    { title: "Modeling & AI", items: ["Transformers", "Hugging Face", "scikit-learn", "PyTorch"] },
    { title: "MLOps & Deployment", items: ["Databricks", "Docker", "FastAPI", "MLflow"] },
    { title: "Tools & Platforms", items: ["Git", "VS Code", "Jupyter"] },
    { title: "Professional", items: ["Problem Solving", "Teamwork", "Creativity"] },
  ];

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? "" : "light";
  }, [isDark]);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <div className="header-info">
            <h1>{user.name}</h1>
            <p>{user.title}</p>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            onClick={() => setIsDark((s) => !s)}
            className="theme-toggle"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="section-content">
          <div className="hero-inner">
            <div className="hero-text">
              <h2>
                Hi — I’m <span>{user.name.split(" ")[0]}</span>
              </h2>
              {user.bioLines.map((line, i) => (
                
                <p key={i}>{line}</p>
              ))}
              <div className="buttons">
                <a href="#projects" className="primary-btn">View Projects</a>
                <a href="#contact" className="secondary-btn">Contact</a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src={user.profileSrc}
                alt={user.name}
                onError={(e) => (e.currentTarget.src = "/fallback_profile.svg")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-content">
          <h3>Projects</h3>
          <div className="project-list">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <p><strong>Tech:</strong> {p.tech.join(", ")}</p>
                <div className="project-links">
                  <a href={p.link} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="demo-link">Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-content">
          <h3>Skills</h3>
          <div className="skill-grid">
            {skillBlocks.map((sb) => (
              <div key={sb.title} className="skill-card">
                <h4>{sb.title}</h4>
                <ul>
                  {sb.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CONTACT */}
      <section className="about" id="about">
        <div className="section-content about-grid">
          <div className="card">
            <h3>About</h3>
            <p>{user.bioLines[1]}</p>
            <p>{user.bioLines[2]}</p><br />
            <h4><b>Education</b></h4>
            <p>{user.education}</p>
          </div>

          <div className="card" id="contact">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noreferrer">Profile</a></p>
            <p><strong>GitHub:</strong> <a href={user.github} target="_blank" rel="noreferrer">{user.github}</a></p>
            <p><strong>Location:</strong> {user.location}</p>
            <a className="resume-btn" href={user.resume} download>Download Resume</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-content">
          <p>© {new Date().getFullYear()} {user.name} — Built with ❤️</p>
        </div>
      </footer>
    </>
  );
}
