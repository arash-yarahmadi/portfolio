import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "linear-gradient(to bottom, #fff, #f9fafb)",
        color: "#1f2937",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5" }}
        >
          NovaCloud
        </span>
        <a
          href="/react-demo/authenticate"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            background: "#4f46e5",
            color: "white",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      style={{
        padding: "12rem 1.5rem 6rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          lineHeight: 1.2,
          color: "#111827",
        }}
      >
        Supercharge your <span style={{ color: "#4f46e5" }}>workflow</span>
        <br />
        with NovaCloud
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          marginTop: "1.5rem",
          fontSize: "1.125rem",
          color: "#4b5563",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        A next-generation SaaS platform that helps your team collaborate,
        automate, and scale faster than ever before.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ marginTop: "2.5rem" }}
      >
        <a
          href="#features"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            background: "#4f46e5",
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Explore Features
        </a>
      </motion.div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const counters = [
    { label: "Active Users", end: 12000 },
    { label: "Workflows Automated", end: 3500 },
    { label: "Teams Onboarded", end: 870 },
  ];
  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        {counters.map((c, i) => (
          <Counter key={i} end={c.end} label={c.label} />
        ))}
      </div>
    </section>
  );
}

function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#4f46e5" }}>
        {count.toLocaleString()}
      </h3>
      <p style={{ color: "#4b5563" }}>{label}</p>
    </motion.div>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    {
      title: "Seamless Collaboration",
      description:
        "Work together in real time with secure document sharing and messaging.",
      icon: "💬",
    },
    {
      title: "Powerful Automations",
      description:
        "Automate repetitive tasks with workflows that save hours every week.",
      icon: "⚡",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights with interactive dashboards and predictive reports.",
      icon: "📊",
    },
  ];

  return (
    <section
      id="features"
      style={{ padding: "6rem 1.5rem", background: "#f9fafb" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827" }}>
          Why NovaCloud?
        </h2>
        <p style={{ marginTop: "1rem", color: "#4b5563" }}>
          Everything you need to boost productivity in one secure platform.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem",
            marginTop: "3rem",
          }}
        >
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
              style={{
                padding: "2rem",
                borderRadius: "20px",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>{f.icon}</div>
              <h3
                style={{
                  marginTop: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                {f.title}
              </h3>
              <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, Acme Corp",
      text: "NovaCloud has completely transformed how our team collaborates. We save hours every week!",
    },
    {
      name: "David Lee",
      role: "CTO, FinSync",
      text: "The automations are a game-changer. It’s like having another team member working 24/7.",
    },
  ];

  return (
    <section style={{ padding: "6rem 1.5rem", background: "white" }}>
      <div
        style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827" }}>
          Loved by teams worldwide
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: "#f9fafb",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                textAlign: "left",
              }}
            >
              <p style={{ fontStyle: "italic", color: "#374151" }}>
                "{t.text}"
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {t.name}
              </p>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CallToAction() {
  return (
    <section style={{ padding: "6rem 1.5rem" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          borderRadius: "24px",
          background: "#4f46e5",
          textAlign: "center",
          padding: "4rem 2rem",
          color: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
          Ready to transform your workflow?
        </h2>
        <p style={{ marginTop: "1rem", color: "#c7d2fe" }}>
          Join thousands of teams already using NovaCloud to accelerate their
          productivity.
        </p>
        <a
          href="/authenticate"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 2rem",
            borderRadius: "12px",
            background: "white",
            color: "#4f46e5",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "#9ca3af",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "1.25rem", fontWeight: 600, color: "white" }}>
          NovaCloud
        </span>
        <p style={{ fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} NovaCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
