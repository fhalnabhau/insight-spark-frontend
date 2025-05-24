
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding LSTM Networks for Time Series Forecasting",
    description: "A deep dive into Long Short-Term Memory networks and their application in predicting stock prices and sales data.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["Deep Learning", "Time Series", "LSTM"],
    featured: true
  },
  {
    title: "Feature Engineering Techniques for Better ML Models",
    description: "Practical techniques for creating meaningful features that improve model performance and interpretability.",
    date: "March 8, 2024",
    readTime: "6 min read",
    tags: ["Machine Learning", "Feature Engineering", "Python"]
  },
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    description: "Learn how to process large datasets efficiently using Apache Spark and implement robust ETL workflows.",
    date: "February 28, 2024",
    readTime: "10 min read",
    tags: ["Big Data", "Apache Spark", "ETL"]
  },
  {
    title: "Interpretable AI: Making Black Box Models Explainable",
    description: "Exploring SHAP, LIME, and other techniques to understand and explain machine learning model predictions.",
    date: "February 20, 2024",
    readTime: "7 min read",
    tags: ["Explainable AI", "SHAP", "Model Interpretation"]
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sharing knowledge and insights from my data science journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 hover:scale-105 border-slate-200 ${
                post.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-blue-600 border-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};
