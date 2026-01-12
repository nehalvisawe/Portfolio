import AboutSection from "./components/About";
import ContactSection from "./components/ContactSection";
import Demo from "./components/Demo";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ChromeProjects from "./components/ProjectSection";
import ChromeSkills from "./components/SkillSection";

// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* Sections with matching IDs from your resume and projects */}
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="skills"><ChromeSkills /></section>
      <section id="projects"><ChromeProjects /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="contact"><ContactSection /></section>
   
    </main>
  );
}