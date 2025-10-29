import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <Projects />
      <Features />
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name + Avatar */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/profile.JPG"
            alt="Arash Yarahmadi"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-indigo-600">
            Arash Yarahmadi
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/arash-yarahmadi"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arash-yarahmadii"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="pt-[12rem] pb-24 text-center overflow-hidden px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-gray-900"
      >
        Hi, I'm <span className="text-indigo-600">Arash Yarahmadi</span>
        <br />
        Senior Front-End Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-6 text-lg font-bold text-gray-600 max-w-xl mx-auto"
      >
        Passionate about React.Js, Next.Js TypeScript, Micro Front-End
        architecture, and building high-performance, scalable web applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10"
      >
        <a
          href="#features"
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold"
        >
          Explore My Skills
        </a>
      </motion.div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
// function Stats() {
//   const counters = [
//     { label: "Projects Completed", end: 45 },
//     { label: "Years of Experience", end: 8 },
//     { label: "SDKs & Microfrontends", end: 12 },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto flex flex-wrap gap-12 justify-around text-center">
//         {counters.map((c, i) => (
//           <Counter key={i} end={c.end} label={c.label} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function Counter({ end, label }: { end: number; label: string }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const step = end / 60;
//     const interval = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(Math.floor(start));
//     }, 30);
//     return () => clearInterval(interval);
//   }, [end]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <h3 className="text-4xl font-bold text-indigo-600">{count}</h3>
//       <p className="text-gray-600">{label}</p>
//     </motion.div>
//   );
// }

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    {
      title: "SSO Platform Development",
      tech: ["React", "TypeScript", "AWS Cognito"],
      description:
        "Built a modular Single Sign-On platform ensuring cross-application compatibility and secure authentication.",
      link: "https://www.truuth.id/price-planning-biopass/",
    },
    {
      title: "Reusable SDK (NPM)",
      tech: ["LitElement", "Shadcn", "NPM", "Storybook"],
      description:
        "Designed and published a reusable SDK to accelerate integration across micro front-ends.",
      link: "https://shadcn-lit-component.netlify.app/",
    },
    {
      title: "Micro Front-End Architecture",
      tech: ["Module Federation", "React"],
      description:
        "Implemented runtime-loading micro front-ends enabling independent deployments and faster iteration.",
      link: "https://ui-builder-auth-flow.netlify.app/",
    },
    {
      title: "Performance & Testing",
      tech: ["Jest", "React Testing Library", "Webpack", "Vite"],
      description:
        "Led unit testing efforts and implemented advanced performance optimizations including code-splitting and lazy loading.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">Selected Projects</h2>
        <p className="mt-2 text-gray-600">
          A showcase of my work, highlighting the technologies and architectures
          I’ve implemented.
        </p>
        <div className="grid gap-10 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    {
      title: "React & TypeScript",
      description:
        "Building scalable, high-performance SPAs with best practices and strong typing.",
      icon: "⚛️",
    },
    {
      title: "Next.js",
      description:
        "Developing SSR & SSG applications, API routes, and optimized static sites with Next.js.",
      icon: "🚀",
    },
    {
      title: "Micro Front-End",
      description:
        "Modular architecture using Webpack Module Federation for independently deployable front-end apps.",
      icon: "🧩",
    },
    {
      title: "Authentication & SDKs",
      description:
        "Implementing secure SSO systems, AWS Cognito integration, and reusable SDK creation.",
      icon: "🔐",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">My Core Skills</h2>
        <p className="mt-2 text-gray-600">
          What I bring to every project and team I join.
        </p>
        <div className="grid gap-10 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white shadow-md cursor-pointer"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Product Manager",
//       text: "Arash delivered high-quality front-end solutions and improved our team's efficiency.",
//     },
//     {
//       name: "David Lee",
//       role: "CTO",
//       text: "His expertise in React and Micro Front-End architecture is outstanding.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
//         <div className="grid gap-8 mt-10 sm:grid-cols-2">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-gray-100 p-6 rounded-xl shadow-md text-left"
//             >
//               <p className="italic text-gray-700">"{t.text}"</p>
//               <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
//               <p className="text-gray-500 text-sm">{t.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------------- CALL TO ACTION ---------------- */
// function CallToAction() {
//   return (
//     <section className="py-24 px-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-3xl mx-auto bg-indigo-600 text-white rounded-3xl text-center p-16 shadow-lg"
//       >
//         <h2 className="text-2xl font-bold">Let's Work Together</h2>
//         <p className="mt-4 text-indigo-100">
//           Interested in collaborating or hiring me? Let's get in touch!
//         </p>
//         <a
//           href="mailto:arashyarahmadi90@yahoo.com"
//           className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold"
//         >
//           Contact Me
//         </a>
//       </motion.div>
//     </section>
//   );
// }

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center text-center">
        <span className="text-xl font-semibold text-white">
          Arash Yarahmadi
        </span>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/arash-yarahmadi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arash-yarahmadii"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p>Email: arashyarahmadi90@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
}

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function LandingPage() {
//   return (
//     <div
//       style={{
//         fontFamily: "sans-serif",
//         background: "linear-gradient(to bottom, #fff, #f9fafb)",
//         color: "#1f2937",
//         minHeight: "100vh",
//       }}
//     >
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Features />
//       <Testimonials />
//       <CallToAction />
//       <Footer />
//     </div>
//   );
// }

// /* ---------------- NAVBAR ---------------- */
// function Navbar() {
//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         background: "rgba(255,255,255,0.85)",
//         backdropFilter: "blur(8px)",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
//         zIndex: 50,
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "1rem 1.5rem",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <span
//           style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5" }}
//         >
//           NovaCloud
//         </span>
//         <a
//           href="/react-demo/authenticate"
//           style={{
//             padding: "0.5rem 1rem",
//             borderRadius: "12px",
//             background: "#4f46e5",
//             color: "white",
//             fontWeight: 500,
//             textDecoration: "none",
//           }}
//         >
//           Sign In
//         </a>
//       </div>
//     </nav>
//   );
// }

// /* ---------------- HERO ---------------- */
// function Hero() {
//   return (
//     <section
//       style={{
//         padding: "12rem 1.5rem 6rem",
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         style={{
//           fontSize: "clamp(2rem, 5vw, 3.5rem)",
//           fontWeight: 800,
//           lineHeight: 1.2,
//           color: "#111827",
//         }}
//       >
//         Supercharge your <span style={{ color: "#4f46e5" }}>workflow</span>
//         <br />
//         with NovaCloud
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.7 }}
//         style={{
//           marginTop: "1.5rem",
//           fontSize: "1.125rem",
//           color: "#4b5563",
//           maxWidth: "700px",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         A next-generation SaaS platform that helps your team collaborate,
//         automate, and scale faster than ever before.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//         style={{ marginTop: "2.5rem" }}
//       >
//         <a
//           href="#features"
//           style={{
//             padding: "0.75rem 1.5rem",
//             borderRadius: "12px",
//             background: "#4f46e5",
//             color: "white",
//             fontWeight: 600,
//             textDecoration: "none",
//           }}
//         >
//           Explore Features
//         </a>
//       </motion.div>
//     </section>
//   );
// }

// /* ---------------- STATS ---------------- */
// function Stats() {
//   const counters = [
//     { label: "Active Users", end: 12000 },
//     { label: "Workflows Automated", end: 3500 },
//     { label: "Teams Onboarded", end: 870 },
//   ];
//   return (
//     <section
//       style={{
//         padding: "4rem 1.5rem",
//         background: "white",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1000px",
//           margin: "0 auto",
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "2rem",
//           justifyContent: "space-around",
//           textAlign: "center",
//         }}
//       >
//         {counters.map((c, i) => (
//           <Counter key={i} end={c.end} label={c.label} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function Counter({ end, label }: { end: number; label: string }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const step = end / 60;
//     const interval = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(Math.floor(start));
//     }, 30);
//     return () => clearInterval(interval);
//   }, [end]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#4f46e5" }}>
//         {count.toLocaleString()}
//       </h3>
//       <p style={{ color: "#4b5563" }}>{label}</p>
//     </motion.div>
//   );
// }

// /* ---------------- FEATURES ---------------- */
// function Features() {
//   const features = [
//     {
//       title: "Seamless Collaboration",
//       description:
//         "Work together in real time with secure document sharing and messaging.",
//       icon: "💬",
//     },
//     {
//       title: "Powerful Automations",
//       description:
//         "Automate repetitive tasks with workflows that save hours every week.",
//       icon: "⚡",
//     },
//     {
//       title: "Advanced Analytics",
//       description:
//         "Gain insights with interactive dashboards and predictive reports.",
//       icon: "📊",
//     },
//   ];

//   return (
//     <section
//       id="features"
//       style={{ padding: "6rem 1.5rem", background: "#f9fafb" }}
//     >
//       <div
//         style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
//       >
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827" }}>
//           Why NovaCloud?
//         </h2>
//         <p style={{ marginTop: "1rem", color: "#4b5563" }}>
//           Everything you need to boost productivity in one secure platform.
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//             gap: "2.5rem",
//             marginTop: "3rem",
//           }}
//         >
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//               }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               style={{
//                 padding: "2rem",
//                 borderRadius: "20px",
//                 background: "white",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                 cursor: "pointer",
//               }}
//             >
//               <div style={{ fontSize: "2.5rem" }}>{f.icon}</div>
//               <h3
//                 style={{
//                   marginTop: "1rem",
//                   fontSize: "1.25rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 {f.title}
//               </h3>
//               <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
//                 {f.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- TESTIMONIALS ---------------- */
// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Product Manager, Acme Corp",
//       text: "NovaCloud has completely transformed how our team collaborates. We save hours every week!",
//     },
//     {
//       name: "David Lee",
//       role: "CTO, FinSync",
//       text: "The automations are a game-changer. It’s like having another team member working 24/7.",
//     },
//   ];

//   return (
//     <section style={{ padding: "6rem 1.5rem", background: "white" }}>
//       <div
//         style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
//       >
//         <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827" }}>
//           Loved by teams worldwide
//         </h2>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "2rem",
//             marginTop: "3rem",
//           }}
//         >
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               style={{
//                 background: "#f9fafb",
//                 padding: "2rem",
//                 borderRadius: "16px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                 textAlign: "left",
//               }}
//             >
//               <p style={{ fontStyle: "italic", color: "#374151" }}>
//                 "{t.text}"
//               </p>
//               <p
//                 style={{
//                   marginTop: "1rem",
//                   fontWeight: 600,
//                   color: "#111827",
//                 }}
//               >
//                 {t.name}
//               </p>
//               <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{t.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- CTA ---------------- */
// function CallToAction() {
//   return (
//     <section style={{ padding: "6rem 1.5rem" }}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//           borderRadius: "24px",
//           background: "#4f46e5",
//           textAlign: "center",
//           padding: "4rem 2rem",
//           color: "white",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
//           Ready to transform your workflow?
//         </h2>
//         <p style={{ marginTop: "1rem", color: "#c7d2fe" }}>
//           Join thousands of teams already using NovaCloud to accelerate their
//           productivity.
//         </p>
//         <a
//           href="/authenticate"
//           style={{
//             display: "inline-block",
//             marginTop: "2rem",
//             padding: "0.75rem 2rem",
//             borderRadius: "12px",
//             background: "white",
//             color: "#4f46e5",
//             fontWeight: 600,
//             textDecoration: "none",
//           }}
//         >
//           Get Started
//         </a>
//       </motion.div>
//     </section>
//   );
// }

// /* ---------------- FOOTER ---------------- */
// function Footer() {
//   return (
//     <footer
//       style={{
//         background: "#111827",
//         color: "#9ca3af",
//         padding: "3rem 1.5rem",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         <span style={{ fontSize: "1.25rem", fontWeight: 600, color: "white" }}>
//           NovaCloud
//         </span>
//         <p style={{ fontSize: "0.875rem" }}>
//           © {new Date().getFullYear()} NovaCloud. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
