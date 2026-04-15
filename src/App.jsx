import { useEffect } from "react";
import "./App.css";

export default function App() {

  const experiences = [
    {
      company: "Capgemini",
      role: "Ingénieure Full Stack",
      period: "Sept 2024 - Fév 2026",
      details: [
        "Développement d’applications web en environnement Agile (Scrum)",
        "Conception et développement de fonctionnalités backend/frontend",
        "Mise en place de pipelines CI/CD avec GitLab",
        "Conteneurisation des applications avec Docker",
        "Amélioration de la qualité du code via code reviews",
      ],
      stack: ["Java", "Spring Boot", "Angular", "Docker", "Kafka", "GitLab CI/CD"],
    },
    {
      company: "Saint-Gobain",
      role: "Ingénieure Full Stack",
      period: "Mai 2024 - Sept 2024",
      details: [
        "Application de suivi en temps réel",
        "Géolocalisation des équipements",
        "Authentification sécurisée via Okta",
        "Mode offline pour continuité de service",
        "Documentation API avec Swagger",
      ],
      stack: ["Spring Boot", "React", "PostgreSQL", "Okta"],
    },
    {
      company: "ANT Global Agency",
      role: "Ingénieure Full Stack",
      period: "Jan 2022 - Juil 2023",
      details: [
        "Application de gestion de stock complète",
        "Alertes en temps réel sur seuils critiques",
        "Scan QR code / code-barres",
        "CRM pour gestion client",
        "Optimisation des performances backend",
      ],
      stack: ["Java", "Spring Boot", "Angular", "MySQL"],
    },
  ];

  const skills = {
    languages: ["Java (8–21)", "Python", "JavaScript", "Node.js"],
    backend: ["Spring Boot", "JEE", "API REST"],
    frontend: ["Angular", "React", "React Native"],
    devops: ["Docker", "GitLab CI/CD", "AWS (S3, Lambda)", "Kafka"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    tools: ["Git", "GitLab", "Jira", "Confluence", "Postman"],
    methods: ["Agile (Scrum)", "TDD / BDD"],
    systems: ["Linux", "Windows", "Cisco Unix Essentials"],
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero reveal">
        <div className="glass">
          <img src="/me.jpg" className="avatar" />

          <h1>Khaoula Benyahia</h1>
          <h2>Ingénieure Full Stack</h2>

          <p>Java • Spring Boot • Angular • DevOps • CI/CD</p>

          <div className="cta">
            <a href="#exp">Voir mes expériences</a>
            <a href="mailto:khaoulabenyahiaa@gmail.com">Me contacter</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section reveal">
        <h2>À propos</h2>

        <p>
          Ingénieure Full Stack avec 3 ans d’expérience dans le développement
          d’applications web scalables et performantes.
        </p>

        <p>
          Forte culture DevOps, CI/CD et méthodologies Agile, avec une
          expérience sur toute la chaîne de développement.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="exp" className="section reveal">
        <h2>Expériences professionnelles</h2>

        <div className="experience">

          {experiences.map((exp, i) => (
            <div className="card reveal" key={i}>

              <div className="card-header">
                <h3>{exp.role} @ {exp.company}</h3>
                <span>{exp.period}</span>
              </div>

              <ul>
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>

              <div className="tags">
                {exp.stack.map((s, k) => (
                  <span key={k}>{s}</span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* SKILLS */}
      <section className="section reveal">
        <h2>Compétences</h2>

        <div className="skills-grid">

          {Object.entries(skills).map(([category, items], i) => (
            <div className="skill-card" key={i}>
              <h3>{category}</h3>

              {items.map((s, j) => (
                <span key={j}>{s}</span>
              ))}
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <footer className="section reveal">
        <h2>Contact</h2>

        <div className="glass contact">
          <p>📧 Email : khaoulabenyahiaa@gmail.com</p>
          <p>📞 Téléphone : +33 7 44 78 14 30</p>
          <p className="green">Disponible immédiatement 🚀</p>
        </div>
      </footer>

    </div>
  );
}