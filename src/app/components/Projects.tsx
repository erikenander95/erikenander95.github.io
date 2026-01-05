import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['React', 'C#', '.NET', 'SQL'],
      link: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, team assignments, and progress tracking.',
      technologies: ['JavaScript', 'Python', 'SQL'],
      link: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Custom content management system for creative professionals to showcase their work with dynamic galleries.',
      technologies: ['React', 'C#', '.NET'],
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts, real-time metrics, and customizable reporting.',
      technologies: ['React', 'Python', 'SQL'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: '700' }}>
            Featured Projects
          </h2>
          <p style={{ color: '#B8B8C0', fontSize: '1.125rem' }}>
            A selection of projects showcasing my development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
                border: '1px solid #2A2A30',
                boxShadow: '0 0 0 rgba(111, 85, 201, 0)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(111, 85, 201, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 rgba(111, 85, 201, 0)'}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" style={{ color: '#8B6DDE' }} />
                  </a>
                )}
              </div>

              <p className="mb-6" style={{ color: '#B8B8C0', lineHeight: '1.7' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: '#1C1C22',
                      color: '#A78BFA',
                      fontSize: '0.875rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div 
                className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: '#8B6DDE' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}