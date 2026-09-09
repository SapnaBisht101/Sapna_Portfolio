import { motion } from "framer-motion";
import { Award, Trophy, Code2, GraduationCap, ExternalLink } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      year: "2025",
      title: "Large-Scale Graph Analytics Research",
      organization: "Indian Institute of Technology Jodhpur",
      description:
        "Worked under Dr. Dip Sankar Banerjee on Large-Scale Graph Analytics using Arkouda, focusing on BFS and centrality algorithms.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2023",
      title: "Competitive Programming",
      organization: "LeetCode & Coding Ninjas",
      description:
        "Solved 400+ problems on LeetCode and 150+ problems on Coding Ninjas.",
      icon: Code2,
      color: "from-purple-500 to-blue-500",
    },
    {
      year: "2023-2027",
      title: "Academic Excellence",
      organization: "National Institute of Technology Uttarakhand",
      description:
        "Maintained a CGPA of 9.27/10 in Computer Science and Engineering.",
      icon: GraduationCap,
      color: "from-green-400 to-teal-500",
    },
  ];

  const stats = [
    { value: "400+", label: "LeetCode Problems" },
    { value: "150+", label: "Coding Ninjas Problems" },
    { value: "9.27", label: "CGPA / 10" },
    { value: "97%", label: "Senior Secondary Score" },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
            <Award className="w-4 h-4" />
            <span>Recognition & Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions from my academic and technical journey
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="https://leetcode.com/u/SapnaBisht101/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
            <Code2 className="w-4 h-4" /> LeetCode Profile <ExternalLink className="w-4 h-4" />
          </a>
          <a href="https://www.naukri.com/code360/profile/SapnaBisht" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
            <Award className="w-4 h-4" /> Coding Ninjas Profile <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full lg:w-[calc(50%-2rem)] relative group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 rounded-2xl"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--color-primary), var(--color-accent))`,
                    }}
                  />
                  <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {achievement.organization}
                        </p>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden lg:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                  />
                </div>

                <div className="hidden lg:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <h3 className="mb-4">Want to achieve great things together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always looking for new challenges and opportunities to create impactful solutions
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
