
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <Code className="h-12 w-12" />
          </div>
          
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Exciting Projects Coming Soon!
          </h3>
          
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            I'm currently working on some amazing projects that showcase my skills in MERN stack development, 
            Machine Learning, and innovative problem-solving. Stay tuned for updates!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/ChhabraSaksham2006" target="_blank">View GitHub</a>
            </Button>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
