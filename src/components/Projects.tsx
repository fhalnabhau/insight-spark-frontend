
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict customer churn using ensemble methods and feature engineering techniques.",
    tech: ["Python", "scikit-learn", "pandas", "XGBoost"],
    accuracy: "94.2%",
    github: "#",
    demo: "#"
  },
  {
    title: "Stock Market Sentiment Analysis",
    description: "NLP pipeline analyzing social media sentiment to predict stock price movements with LSTM networks.",
    tech: ["Python", "TensorFlow", "NLTK", "Twitter API"],
    accuracy: "87.5%",
    github: "#",
    demo: "#"
  },
  {
    title: "Sales Forecasting Dashboard",
    description: "Interactive dashboard for sales forecasting using time series analysis and seasonal decomposition.",
    tech: ["Python", "Plotly", "Prophet", "Streamlit"],
    accuracy: "91.8%",
    github: "#",
    demo: "#"
  },
  {
    title: "Image Classification CNN",
    description: "Deep learning model for multi-class image classification with data augmentation and transfer learning.",
    tech: ["Python", "PyTorch", "OpenCV", "ResNet"],
    accuracy: "96.1%",
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore my data science projects showcasing machine learning, deep learning, and data visualization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-slate-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Accuracy: {project.accuracy}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-blue-600 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
