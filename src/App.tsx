import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/ContactForm';

function App() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Task Management App",
      description: "React-based project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Weather Dashboard",
      description: "Dynamic weather application using modern APIs",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading frontend development team, implementing React solutions"
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained web applications"
    }
  ];

  const education = [
    {
      title: "Computer Science",
      institution: "Tech University",
      period: "2015 - 2019",
      description: "Bachelor's Degree with focus on Software Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hola, soy [Tu Nombre]
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Ingeniero de Software especializado en desarrollo web
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" className="p-2 hover:text-blue-200">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="p-2 hover:text-blue-200">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:tu@email.com" className="p-2 hover:text-blue-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=600"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Sobre Mí
          </h2>
          <div className="max-w-3xl mx-auto">
            <AboutMe />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mis Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Tecnologías
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Experiencia y Educación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">Experiencia Laboral</h3>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">Educación</h3>
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Contáctame
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;