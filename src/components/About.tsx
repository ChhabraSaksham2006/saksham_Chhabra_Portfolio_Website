
const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 animate-fade-in animation-delay-300">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="mb-6 text-xl">
              Hello! I'm <span className="font-semibold text-blue-600">Saksham Chhabra</span>, a passionate first-year Computer Science student at 
              <span className="font-semibold text-purple-600"> Delhi Technological University</span> with an insatiable curiosity for technology and innovation.
            </p>
            
            <p className="mb-6">
              My journey in tech spans across multiple domains - from crafting elegant web applications using the 
              <span className="font-semibold text-green-600"> MERN stack</span> to diving deep into the fascinating world of 
              <span className="font-semibold text-red-600"> Machine Learning</span> and 
              <span className="font-semibold text-orange-600"> Cybersecurity</span>.
            </p>
            
            <p className="mb-6">
              I thrive on challenges, whether it's solving complex algorithms in 
              <span className="font-semibold text-blue-600"> competitive programming</span> or leading teams to victory in hackathons. 
              My leadership experience and consistent academic excellence reflect my commitment to both personal growth and collaborative success.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring the latest developments in 
              <span className="font-semibold text-purple-600"> Large Language Models</span> or brainstorming innovative solutions to real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
