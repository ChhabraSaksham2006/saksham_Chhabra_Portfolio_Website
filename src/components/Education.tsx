
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Delhi Technological University",
      duration: "2024 – 2028",
      grade: "CGPA: 9.3",
      progress: 93
    },
    {
      degree: "Senior Secondary Education",
      field: "Non-Medical",
      institution: "Sant Nishchal Singh Public School",
      duration: "Class XII",
      grade: "93.8%",
      progress: 94
    },
    {
      degree: "Secondary Education",
      field: "",
      institution: "Sant Nishchal Singh Public School",
      duration: "Class X",
      grade: "96.2%",
      progress: 96
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {index === 0 ? <GraduationCap className="h-8 w-8" /> : <Award className="h-8 w-8" />}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-lg text-slate-600 mb-2">{edu.institution}</p>
                      <p className="text-slate-500">{edu.duration}</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-2xl font-bold text-green-600 mb-2">{edu.grade}</div>
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${edu.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
