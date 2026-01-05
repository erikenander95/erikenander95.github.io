export function Footer() {
  return (
    <footer className="py-8 px-4" style={{ borderTop: '1px solid #2A2A30' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p style={{ color: '#8E8E99', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Erik Enander. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
