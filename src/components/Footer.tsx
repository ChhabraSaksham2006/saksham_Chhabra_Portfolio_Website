
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Saksham Chhabra</h3>
          <p className="text-slate-300 mb-6">
            Building the future, one line of code at a time.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/ChhabraSaksham2006" target="_blank" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/feed/" target="_blank"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ccsaksham2006@gmail.com" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> by Saksham Chhabra
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
