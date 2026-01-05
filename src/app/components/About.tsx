export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center" style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: '700' }}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="p-8 rounded-xl"
            style={{ 
              background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
              border: '1px solid #2A2A30'
            }}
          >
            <h3 className="mb-4" style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
              Background
            </h3>
            <p style={{ color: '#B8B8C0', lineHeight: '1.8' }}>
              I'm a developer based in Sweden with a passion for building exceptional digital experiences. 
              My journey in software development has equipped me with a diverse skill set that spans both 
              frontend and backend technologies.
            </p>
          </div>
          
          <div 
            className="p-8 rounded-xl"
            style={{ 
              background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
              border: '1px solid #2A2A30'
            }}
          >
            <h3 className="mb-4" style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
              Approach
            </h3>
            <p style={{ color: '#B8B8C0', lineHeight: '1.8' }}>
              I believe in writing clean, maintainable code and creating intuitive user interfaces. 
              I'm constantly learning and adapting to new technologies, always striving to deliver 
              solutions that exceed expectations.
            </p>
          </div>
          
          <div 
            className="p-8 rounded-xl md:col-span-2"
            style={{ 
              background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
              border: '1px solid #2A2A30'
            }}
          >
            <h3 className="mb-4" style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
              Additional Qualifications
            </h3>
            <div className="flex flex-wrap gap-3">
              <div 
                className="px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: '#1C1C22',
                  border: '1px solid #6F55C9'
                }}
              >
                <span style={{ color: '#A78BFA' }}>Driver's License</span>
              </div>
              <div 
                className="px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: '#1C1C22',
                  border: '1px solid #6F55C9'
                }}
              >
                <span style={{ color: '#A78BFA' }}>Fluent in English</span>
              </div>
              <div 
                className="px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: '#1C1C22',
                  border: '1px solid #6F55C9'
                }}
              >
                <span style={{ color: '#A78BFA' }}>Fluent in Swedish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
