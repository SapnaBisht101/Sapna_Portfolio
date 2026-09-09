import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";

export function Experiments() {
  const experiments = [
    {
      title: "MATLAB Signal Processing",
      description: "Hands-on experiments in MATLAB for matrix operations, signal visualization, and simulations.",
      icon: "📊",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Drone Bootcamp Prototype",
      description: "Practical drone control and navigation experiments conducted during NIT Kurukshetra Bootcamp.",
      icon: "🚁",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Frontend UI Animations",
      description: "Exploring modern UI/UX effects with React, Tailwind, and Framer Motion.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "RazorPay UI Clone",
      description: "Experimenting with payment page UI/UX using HTML, CSS, and JavaScript.",
      icon: "💳",
      color: "from-pink-500 to-orange-500",
    },
    {
      title: "StudyEase Mini Features",
      description: "Building small features like resource cards and navigation components for StudyEase website.",
      icon: "📚",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Data Structures Playground",
      description: "Implementing and visualizing algorithms like BFS, DFS, and sorting interactively.",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="experiments" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Experimental Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Creative Experiments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my experimental projects, certifications, and learning try-outs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity blur-xl -z-10 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--color-primary), var(--color-accent))`,
                }}
              />

              <div className="bg-card border border-border rounded-2xl p-8 h-full backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, var(--color-primary) 0px, transparent 2px, transparent 4px, var(--color-primary) 6px)",
                    backgroundSize: "200% 200%",
                  }}
                />

                <motion.div
                  className="text-6xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {experiment.icon}
                </motion.div>

                <h3 className="mb-3 relative z-10">{experiment.title}</h3>
                <p className="text-muted-foreground relative z-10">
                  {experiment.description}
                </p>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: 180 }}
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Interested in collaborating on creative experiments?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
