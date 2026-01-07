import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Clear form after sent email
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent! Thank you.");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Oops! Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="mb-4"
            style={{ color: "#FFFFFF", fontSize: "2.5rem", fontWeight: "700" }}
          >
            Get In Touch
          </h2>
          <p style={{ color: "#B8B8C0", fontSize: "1.125rem" }}>
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className="p-8 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #141417 0%, #1A1A1F 100%)",
              border: "1px solid #2A2A30",
            }}
          >
            <h3
              className="mb-6"
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#1C1C22" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#8B6DDE" }} />
                </div>
                <div>
                  <p style={{ color: "#8E8E99", fontSize: "0.875rem" }}>
                    Email
                  </p>
                  <a
                    href="mailto:erik.enander@proton.me"
                    style={{ color: "#B8B8C0" }}
                    className="hover:underline"
                  >
                    erik.enander@proton.me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#1C1C22" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#8B6DDE" }} />
                </div>
                <div>
                  <p style={{ color: "#8E8E99", fontSize: "0.875rem" }}>
                    Location
                  </p>
                  <p style={{ color: "#B8B8C0" }}>Sweden</p>
                </div>
              </div>
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid #2A2A30" }}
            >
              <p
                className="mb-4"
                style={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Connect with me
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/erikenander95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all hover:scale-110"
                  style={{
                    backgroundColor: "#1C1C22",
                    boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(111, 85, 201, 0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(111, 85, 201, 0)")
                  }
                >
                  <Github className="w-5 h-5" style={{ color: "#8B6DDE" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/erik-enander-648032221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all hover:scale-110"
                  style={{
                    backgroundColor: "#1C1C22",
                    boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(111, 85, 201, 0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(111, 85, 201, 0)")
                  }
                >
                  <Linkedin className="w-5 h-5" style={{ color: "#8B6DDE" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #141417 0%, #1A1A1F 100%)",
              border: "1px solid #2A2A30",
            }}
          >
            <h3
              className="mb-6"
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{ color: "#B8B8C0", fontSize: "0.875rem" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#1C1C22",
                    border: "1px solid #2A2A30",
                    color: "#FFFFFF",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{ color: "#B8B8C0", fontSize: "0.875rem" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#1C1C22",
                    border: "1px solid #2A2A30",
                    color: "#FFFFFF",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{ color: "#B8B8C0", fontSize: "0.875rem" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    backgroundColor: "#1C1C22",
                    border: "1px solid #2A2A30",
                    color: "#FFFFFF",
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading} // disable while sending
                className="w-full py-3 rounded-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: "#8B6DDE",
                  color: "#FFFFFF",
                  fontWeight: "600",
                  boxShadow: "0 0 0 rgba(111, 85, 201, 0)",
                  cursor: loading ? "not-allowed" : "pointer", // show not-allowed cursor when disabled
                }}
                onMouseEnter={(e) => {
                  if (!loading)
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(111, 85, 201, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 rgba(111, 85, 201, 0)";
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
