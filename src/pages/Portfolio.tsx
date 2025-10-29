// Single-file React portfolio component
// Tailwind CSS utility classes are used for styling
// Default export a React component so it can be dropped into any CRA / Vite React app

const projects = [
  {
    title: "SSO Platform Development",
    tech: ["React", "TypeScript", "LitElement", "AWS Cognito"],
    description:
      "Built a modular Single Sign-On platform ensuring cross-application compatibility and secure authentication.",
    link: "#"
  },
  {
    title: "Reusable SDK (NPM)",
    tech: ["LitElement", "Webpack", "NPM"],
    description:
      "Designed and published a reusable SDK to accelerate integration across micro front-ends.",
    link: "#"
  },
  {
    title: "Micro Front-End Architecture",
    tech: ["Module Federation", "Webpack", "React"],
    description:
      "Implemented runtime-loading micro front-ends enabling independent deployments and faster iteration.",
    link: "#"
  },
  {
    title: "Performance & Testing",
    tech: ["Jest", "React Testing Library", "Webpack", "Vite"],
    description:
      "Led unit testing efforts and implemented advanced performance optimizations including code-splitting and lazy loading.",
    link: "#"
  }
];

const skills = [
  "ReactJS",
  "TypeScript",
  "Next.js",
  "Micro Front-Ends",
  "LitElement",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Jest & RTL",
  "CI/CD (Jenkins / GitHub Actions)",
  "AWS Cognito",
  "PWA"
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white/60 backdrop-blur sticky top-0 z-30 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold">AY</div>
            <div>
              <h1 className="text-lg font-semibold">Arash Yarahmadi</h1>
              <p className="text-xs text-gray-500">Senior Front-End Developer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a
              href="#"
              className="ml-4 inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md border">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-indigo-600 font-medium">Hi, I&apos;m Arash 👋</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight">
              Senior Front-End Developer
              <span className="block text-2xl font-normal text-gray-600 mt-2">React · TypeScript · Micro Front-Ends</span>
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              I build high-performance, scalable, and user-focused web applications. My work focuses on modular
              architectures, secure authentication (AWS Cognito), and reusable toolkits distributed across teams.
              I love optimizing performance, writing robust unit tests, and crafting developer-friendly component libraries.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">Contact Me</a>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p><strong>Location:</strong> Remote / Open to relocation</p>
              <p className="mt-1"><strong>Available for:</strong> Senior Front-End roles, Contract work, Mentorship</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold">Quick Snapshot</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>• Expertise in React, TypeScript, NextJS, and LitElement.</li>
              <li>• Experience building SSO platforms and secure authentication using AWS Cognito.</li>
              <li>• Built reusable SDKs and micro front-ends distributed via NPM and Module Federation.</li>
              <li>• Strong testing & CI/CD practices: Jest, React Testing Library, Jenkins, GitHub Actions.</li>
            </ul>

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium">arash.yarahmadi.dev@gmail.com</p>
              </div>
              <div className="text-right text-sm">
                <p className="text-xs text-gray-500">GitHub</p>
                <p className="font-medium">github.com/arash-yarahmadi</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I&apos;m a passionate Front-End Developer with extensive experience in ReactJS, TypeScript, and Micro Front-End architecture.
            I specialize in building modular, secure, and high-performing applications with a strong focus on developer experience and scalability.
            My background includes building SSO solutions, integrating AWS Cognito for secure authentication, and creating reusable SDKs for faster cross-team
            integration.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-medium">What I do</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>• Architect front-end applications with modular boundaries and runtime integration.</li>
                <li>• Deliver performant PWAs with code-splitting and lazy loading.</li>
                <li>• Build and publish reusable UI kits and SDKs (NPM).</li>
                <li>• Drive testing, CI/CD, and developer experience improvements.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-medium">How I work</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>• Collaborative — I sync closely with UX, backend, and product teams.</li>
                <li>• Test-first — I emphasize unit testing and automation to ensure quality.</li>
                <li>• Pragmatic — I balance architectural vision with shipping value fast.</li>
                <li>• Performance-focused — I measure and improve real user performance metrics.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="inline-flex items-center px-3 py-1 rounded-full bg-white border text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Featured Projects</h3>
            <p className="text-sm text-gray-500">Selected work highlighting architecture, auth, SDKs and testing</p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-xl p-6 border shadow-sm">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded-md">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="text-sm text-indigo-600 hover:underline">View details</a>
                  <div className="text-xs text-gray-400">Role: Lead Front-End</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Timeline (short) */}
        <section className="mt-12 bg-white p-6 rounded-2xl border">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="p-3 border rounded-lg">
              <h5 className="font-semibold">SSO Platform</h5>
              <p className="mt-1">React, TypeScript, LitElement — Architected and maintained SSO for cross-app auth.</p>
            </div>
            <div className="p-3 border rounded-lg">
              <h5 className="font-semibold">SDK Creation</h5>
              <p className="mt-1">Created reusable SDKs and component libraries and published them to NPM.</p>
            </div>
            <div className="p-3 border rounded-lg">
              <h5 className="font-semibold">Micro Front-Ends</h5>
              <p className="mt-1">Module Federation, runtime loading, and independent deployments.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-white p-8 rounded-2xl border">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Let’s build something great</h3>
                <p className="mt-2 text-gray-700">I&apos;m open to senior roles, contracts, and collaborations. Reach out and let&apos;s talk about your product and how I can help.</p>

                <div className="mt-4 text-sm">
                  <p><strong>Email:</strong> <a href="mailto:arash.yarahmadi.dev@gmail.com" className="text-indigo-600">arash.yarahmadi.dev@gmail.com</a></p>
                  <p className="mt-1"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arashyarahmadi" className="text-indigo-600">linkedin.com/in/arashyarahmadi</a></p>
                  <p className="mt-1"><strong>GitHub:</strong> <a href="https://github.com/arash-yarahmadi" className="text-indigo-600">github.com/arash-yarahmadi</a></p>
                </div>
              </div>

              <form className="w-full md:w-96 bg-white rounded-lg p-4 border">
                <label className="block text-xs font-medium text-gray-600">Name</label>
                <input className="mt-1 w-full px-3 py-2 border rounded-md text-sm" placeholder="Your name" />

                <label className="block text-xs font-medium text-gray-600 mt-3">Email</label>
                <input className="mt-1 w-full px-3 py-2 border rounded-md text-sm" placeholder="you@company.com" />

                <label className="block text-xs font-medium text-gray-600 mt-3">Message</label>
                <textarea className="mt-1 w-full px-3 py-2 border rounded-md text-sm" rows={4} placeholder="Short message"></textarea>

                <div className="mt-4 flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send</button>
                  <div className="text-xs text-gray-500">I typically reply within a few days.</div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Arash Yarahmadi — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
