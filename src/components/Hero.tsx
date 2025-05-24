
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="text-blue-600">Ritik Raj</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Data Science Enthusiast crafting insights from data through 
            <span className="text-blue-600 font-semibold"> machine learning</span>, 
            <span className="text-blue-600 font-semibold"> statistical analysis</span>, and 
            <span className="text-blue-600 font-semibold"> interactive visualizations</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={28} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-slate-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
