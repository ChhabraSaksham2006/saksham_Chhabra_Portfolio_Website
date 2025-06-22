
import { Code, Globe, Database, Wrench, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 60 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Data Structures & Algorithms", level: 85 }
      ]
    },
    {
      title: "Languages",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: [
        { name: "English", level: 95 },
        { name: "Hindi", level: 100 },
        { name: "Punjabi", level: 100 }
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
