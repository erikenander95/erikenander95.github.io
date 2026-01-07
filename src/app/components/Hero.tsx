import { MapPin, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative">
      <div className="max-w-4xl w-full text-center">
        {/* Accent line */}
        <div
          className="h-1 w-20 mx-auto mb-8"
          style={{ backgroundColor: "#8B6DDE" }}
        />

        <h1
          className="mb-4"
          style={{
            color: "#FFFFFF",
            fontSize: "3.5rem",
            fontWeight: "700",
            lineHeight: "1.2",
          }}
        >
          Erik Enander
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-4 h-4" style={{ color: "#8B6DDE" }} />
          <p style={{ color: "#B8B8C0", fontSize: "1.125rem" }}>Sweden</p>
        </div>

        <p
          className="mb-8 max-w-2xl mx-auto"
          style={{ color: "#B8B8C0", fontSize: "1.25rem", lineHeight: "1.8" }}
        >
          Full-stack developer passionate about crafting elegant solutions to
          complex problems. I build modern web applications with a focus on
          clean code, user experience, and scalability.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/erikenander95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: "#141417",
              border: "1px solid #2A2A30",
              boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(111, 85, 201, 0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 rgba(111, 85, 201, 0)")
            }
          >
            <Github className="w-6 h-6" style={{ color: "#8B6DDE" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/erik-enander-648032221/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: "#141417",
              border: "1px solid #2A2A30",
              boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(111, 85, 201, 0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 rgba(111, 85, 201, 0)")
            }
          >
            <Linkedin className="w-6 h-6" style={{ color: "#8B6DDE" }} />
          </a>
          <a
            href="mailto:erik.enander@proton.me"
            className="p-3 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: "#141417",
              border: "1px solid #2A2A30",
              boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(111, 85, 201, 0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 rgba(111, 85, 201, 0)")
            }
          >
            <Mail className="w-6 h-6" style={{ color: "#8B6DDE" }} />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-3 rounded-lg transition-all hover:scale-105"
          style={{
            backgroundColor: "#8B6DDE",
            color: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 30px rgba(111, 85, 201, 0.6)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 rgba(111, 85, 201, 0)")
          }
        >
          Get In Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" style={{ color: "#8B6DDE" }} />
      </button>
    </section>
  );
}
