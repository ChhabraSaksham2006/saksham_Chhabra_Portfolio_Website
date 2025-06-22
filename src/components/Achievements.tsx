
import { Trophy, Target, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "JEE Mains 2024",
      description: "99.82 percentile (AIR 2949)",
      highlight: "100 percentile in Physics",
      icon: <Target className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Olympiad Champion",
      description: "IOQM, NSEC, NSEP (2024)",
      highlight: "District Topper",
      icon: <Award className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hackathon Winner",
      description: "2x College-level Hackathons",
      highlight: "Innovation & Problem Solving",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:animate-pulse`}>
                  {achievement.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-3">
                  {achievement.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    {achievement.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
