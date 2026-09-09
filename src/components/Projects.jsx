import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Restaurant Management System (Urban Spoon)",
      description:
        "A full-stack restaurant management system supporting reservations and customer bookings with authentication, responsive interfaces, and backend API integration.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "AI Travel Agent",
      description:
        "An Agentic AI travel assistant using RAG, Ollama, and LLM-powered tool calling to orchestrate hotel, flight, and cab recommendations.",
      tags: ["Agentic AI", "RAG", "Ollama", "LLM APIs"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
      github: "#",
    },
    {
      title: "B-DECIVE",
      description:
        "A blockchain-based certificate issuance and verification platform with a three-stage pipeline for secure, tamper-resistant academic credential validation.",
      tags: ["Blockchain", "Verification", "Web3"],
      gradient: "from-purple-500 to-pink-500",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my projects that showcase my learning and
            development journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--color-primary), var(--color-accent))`,
                }}
              />

              <div className="bg-card border border-border rounded-2xl p-6 h-full backdrop-blur-sm flex flex-col">
                {/* Project gradient header */}
                <div
                  className={`w-full h-32 rounded-xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center relative overflow-hidden`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <span className="text-4xl relative z-10">💻</span>
                </div>

                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/SapnaBisht101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sapna-bisht-a7b4a6297/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
