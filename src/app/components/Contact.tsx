import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem', fontWeight: '700' }}>
            Get In Touch
          </h2>
          <p style={{ color: '#B8B8C0', fontSize: '1.125rem' }}>
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div 
            className="p-8 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
              border: '1px solid #2A2A30',
            }}
          >
            <h3 className="mb-6" style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#1C1C22' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#8B6DDE' }} />
                </div>
                <div>
                  <p style={{ color: '#8E8E99', fontSize: '0.875rem' }}>Email</p>
                  <a 
                    href="mailto:erik@example.com"
                    style={{ color: '#B8B8C0' }}
                    className="hover:underline"
                  >
                    erik@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#1C1C22' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#8B6DDE' }} />
                </div>
                <div>
                  <p style={{ color: '#8E8E99', fontSize: '0.875rem' }}>Location</p>
                  <p style={{ color: '#B8B8C0' }}>Sweden</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid #2A2A30' }}>
              <p className="mb-4" style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600' }}>
                Connect with me
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all hover:scale-110"
                  style={{ backgroundColor: '#1C1C22', boxShadow: '0 0 0 rgba(111, 85, 201, 0)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(111, 85, 201, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 rgba(111, 85, 201, 0)'}
                >
                  <Github className="w-5 h-5" style={{ color: '#8B6DDE' }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all hover:scale-110"
                  style={{ backgroundColor: '#1C1C22', boxShadow: '0 0 0 rgba(111, 85, 201, 0)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(111, 85, 201, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 rgba(111, 85, 201, 0)'}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#8B6DDE' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="p-8 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #141417 0%, #1A1A1F 100%)',
              border: '1px solid #2A2A30',
            }}
          >
            <h3 className="mb-6" style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '600' }}>
              Send a Message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2"
                  style={{ color: '#B8B8C0', fontSize: '0.875rem' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: '#1C1C22',
                    border: '1px solid #2A2A30',
                    color: '#FFFFFF',
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2"
                  style={{ color: '#B8B8C0', fontSize: '0.875rem' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: '#1C1C22',
                    border: '1px solid #2A2A30',
                    color: '#FFFFFF',
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2"
                  style={{ color: '#B8B8C0', fontSize: '0.875rem' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    backgroundColor: '#1C1C22',
                    border: '1px solid #2A2A30',
                    color: '#FFFFFF',
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: '#8B6DDE',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  boxShadow: '0 0 0 rgba(111, 85, 201, 0)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(111, 85, 201, 0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 rgba(111, 85, 201, 0)'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}