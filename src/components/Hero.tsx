
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6 animate-scale-in">
            Saksham Chhabra
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-600 mb-4 animate-fade-in animation-delay-300">
            <span className="font-semibold text-blue-600">CSE'28 @ DTU</span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              MERN Stack & ML Enthusiast | 2x Hackathon Winner
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in animation-delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              <a
                 href="Saksham_Chhabra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Saksham_Chhabra_Resume.pdf"
                >
                Download Resume
                </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-200 text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in animation-delay-1000">
            <a href="https://github.com/ChhabraSaksham2006"target="_blank" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/saksham-chhabra-342ba82b9/" target="_blank" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:ccsaksham2006@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
