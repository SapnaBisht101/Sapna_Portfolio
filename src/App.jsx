import './styles/globals.css';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Resume } from './components/Resume.jsx';
import { Achievements } from './components/Achievements.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}