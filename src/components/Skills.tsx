
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Random Forest"]
  },
  {
    title: "Data Analysis",
    skills: ["pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    title: "Big Data & Cloud",
    skills: ["Apache Spark", "AWS", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Jupyter", "Git", "FastAPI", "Streamlit", "Power BI"]
  }
];

const certifications = [
  "AWS Certified Machine Learning - Specialty",
  "Google Cloud Professional Data Engineer",
  "TensorFlow Developer Certificate",
  "IBM Data Science Professional Certificate"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to turn data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 text-center">
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
