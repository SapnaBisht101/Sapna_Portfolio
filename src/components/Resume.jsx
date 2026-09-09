import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap, Award, Calendar } from 'lucide-react';

export function Resume() {
  const experience = [
    { period: 'May 2026 - Jul 2026', title: 'ASDE Summer Intern', organization: 'Publicis Sapient, Bangalore', details: ['Built an AI-powered Travel Agent using Agentic AI, RAG, and Ollama.', 'Developed APIs and integrated hotel, flight, and cab booking workflows.'] },
    { period: 'May 2025 - Jul 2025', title: 'Summer Research Intern', organization: 'Indian Institute of Technology Jodhpur', details: ['Conducted research on large-scale graph analytics using Arkouda.', 'Implemented BFS and Connected Components algorithms for graph analysis.'] },
  ];
  const certifications = ['Generative AI Architectures with LLM, Prompt Engineering, RAG & Vector Databases', 'Introduction to Open Source - IBM Developer Skills Network', 'MATLAB Certification - NIT Uttarakhand'];

  return (
    <section id="resume" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 mb-4"><BriefcaseBusiness className="w-4 h-4" /><span>Experience & Education</span></div>
          <h2 className="text-4xl sm:text-5xl mb-4">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A snapshot of my academic foundation, industry experience, and certifications.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-card border border-border rounded-2xl p-8"><div className="flex items-center gap-3 mb-6"><GraduationCap className="w-6 h-6 text-primary" /><h3>Education</h3></div><div className="space-y-6"><div><div className="flex justify-between gap-4 mb-1"><h4>National Institute of Technology Uttarakhand</h4><span className="text-sm text-muted-foreground whitespace-nowrap">2023 - 2027</span></div><p className="text-muted-foreground">B.Tech in Computer Science and Engineering</p><p className="text-primary mt-2">CGPA: 9.27 / 10.00 (Till 5th Semester)</p></div><div><div className="flex justify-between gap-4 mb-1"><h4>S.G.R.R Public School, Dehradun</h4><span className="text-sm text-muted-foreground whitespace-nowrap">2022</span></div><p className="text-muted-foreground">CBSE Senior Secondary (PCM + Computer Science)</p><p className="text-primary mt-2">Score: 97%</p></div></div></div>
          <div className="bg-card border border-border rounded-2xl p-8"><div className="flex items-center gap-3 mb-6"><BriefcaseBusiness className="w-6 h-6 text-primary" /><h3>Experience</h3></div><div className="space-y-6">{experience.map((role) => <div key={role.title}><div className="flex items-center gap-2 text-sm text-primary mb-1"><Calendar className="w-4 h-4" />{role.period}</div><h4>{role.title}</h4><p className="text-muted-foreground mb-2">{role.organization}</p><ul className="list-disc pl-5 text-muted-foreground space-y-1">{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>)}</div></div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8"><div className="flex items-center gap-3 mb-6"><Award className="w-6 h-6 text-primary" /><h3>Certifications</h3></div><div className="grid md:grid-cols-3 gap-4">{certifications.map((certification) => <div key={certification} className="border border-border rounded-xl p-4 text-muted-foreground">{certification}</div>)}</div></div>
      </div>
    </section>
  );
}