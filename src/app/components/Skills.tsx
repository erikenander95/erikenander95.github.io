import { Code, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'language';
}

export function Skills() {
  const skills: Skill[] = [
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'language' },
    { name: 'C#', category: 'backend' },
    { name: '.NET', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'C', category: 'language' },
    { name: 'SQL', category: 'database' },
    { name: 'Git', category: 'language' },
    { name: 'REST APIs', category: 'backend' },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return '#8B6DDE';
      case 'backend':
        return '#6F55C9';
      case 'database':
        return '#A78BFA';
      case 'language':
        return '#8B6DDE';
      default:
        return '#8B6DDE';
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: '700' }}>
            Skills & Technologies
          </h2>
          <p style={{ color: '#B8B8C0', fontSize: '1.125rem' }}>
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl transition-all hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
                border: '1px solid #2A2A30',
                boxShadow: '0 0 0 rgba(111, 85, 201, 0)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(111, 85, 201, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 rgba(111, 85, 201, 0)'}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all group-hover:scale-110"
                  style={{ backgroundColor: '#1C1C22' }}
                >
                  {skill.category === 'frontend' || skill.category === 'language' ? (
                    <Code className="w-6 h-6" style={{ color: getCategoryColor(skill.category) }} />
                  ) : (
                    <Terminal className="w-6 h-6" style={{ color: getCategoryColor(skill.category) }} />
                  )}
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8B6DDE' }} />
            <span style={{ color: '#8E8E99', fontSize: '0.875rem' }}>Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6F55C9' }} />
            <span style={{ color: '#8E8E99', fontSize: '0.875rem' }}>Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#A78BFA' }} />
            <span style={{ color: '#8E8E99', fontSize: '0.875rem' }}>Database</span>
          </div>
        </div>
      </div>
    </section>
  );
}