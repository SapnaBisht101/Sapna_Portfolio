import { motion } from "framer-motion";
import {
  FaCuttlefish, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaDatabase, FaJsSquare, FaNodeJs, FaLaptopCode, FaRegFileExcel, FaRegFileWord, FaRegFilePowerpoint
} from "react-icons/fa";
import {
  SiMysql, SiRedux, SiTailwindcss, SiExpress, SiMongodb
} from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbBrandLeetcode } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";

// 1st row: Programming
const programmingSkills = [
  { name: "C++", icon: <FaCuttlefish className="text-[#00599C]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "C", icon: <FaCuttlefish className="text-gray-700" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
];

// 2nd row: Web Dev
const webSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Express Js", icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
];

// 3rd row: Tools & Coding Platforms
const toolsSkills = [
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "MS Excel", icon: <FaRegFileExcel className="text-[#217346]" /> },
  { name: "MS Word", icon: <FaRegFileWord className="text-[#2B579A]" /> },
  { name: "MS Powerpoint", icon: <FaRegFilePowerpoint className="text-[#B7472A]" /> },
  { name: "LeetCode", icon: <TbBrandLeetcode className="text-[#FFA116]" /> },
  { name: "Coding Ninjas", icon: <MdOutlineIntegrationInstructions className="text-[#F47F24]" /> },
  { name: "GFG", icon: <GiBrain className="text-[#2F8D46]" /> },
  { name: "CodeForces", icon: <FaLaptopCode className="text-[#1F8ACB]" /> },
];

// Animation variants
const rowVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 200 : -200,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

function SkillRow({ skills, direction }) {
  return (
    <motion.div
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={rowVariants}
      className="flex flex-row flex-wrap justify-center gap-8 w-full mb-8"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center bg-card/80 dark:bg-card/60 border border-border rounded-2xl py-6 px-6 min-w-[140px] max-w-[180px] shadow-lg transition-all duration-300"
        >
          <div className="text-4xl mb-3">{skill.icon}</div>
          <div className="text-lg font-medium text-gray-800 dark:text-gray-100">{skill.name}</div>
        </div>
      ))}
    </motion.div>
  );
}

export  function Skills() {
  return (
    <section className="w-full py-16 px-2 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14">Skills & Tools</h2>
        <div className="flex flex-col gap-8 w-full">
          <SkillRow skills={programmingSkills} direction={-1} />
          <SkillRow skills={webSkills} direction={1} />
          <SkillRow skills={toolsSkills} direction={-1} />
        </div>
      </div>
    </section>
  );
}

export default Skills