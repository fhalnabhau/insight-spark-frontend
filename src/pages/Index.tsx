
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Visualizations } from "@/components/Visualizations";
import { Skills } from "@/components/Skills";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <Projects />
      <Visualizations />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
