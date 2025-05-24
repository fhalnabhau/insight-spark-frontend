
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const stockData = [
  { month: 'Jan', price: 120, prediction: 118 },
  { month: 'Feb', price: 135, prediction: 132 },
  { month: 'Mar', price: 148, prediction: 145 },
  { month: 'Apr', price: 142, prediction: 144 },
  { month: 'May', price: 156, prediction: 158 },
  { month: 'Jun', price: 167, prediction: 165 },
];

const churnData = [
  { feature: 'Contract Length', importance: 0.35 },
  { feature: 'Monthly Charges', importance: 0.28 },
  { feature: 'Total Charges', importance: 0.22 },
  { feature: 'Customer Service', importance: 0.15 },
];

const sentimentData = [
  { name: 'Positive', value: 45, color: '#10B981' },
  { name: 'Neutral', value: 35, color: '#6B7280' },
  { name: 'Negative', value: 20, color: '#EF4444' },
];

export const Visualizations = () => {
  return (
    <section id="visualizations" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Data Visualizations</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interactive charts and insights from my data science projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">
                Stock Price Prediction Model
              </CardTitle>
              <CardDescription>
                Actual vs predicted stock prices using LSTM neural network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    name="Actual Price"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#dc2626" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="Predicted Price"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">
                Feature Importance Analysis
              </CardTitle>
              <CardDescription>
                Most important features for customer churn prediction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={churnData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="feature" type="category" stroke="#64748b" width={120} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="importance" fill="#2563eb" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">
              Sentiment Analysis Distribution
            </CardTitle>
            <CardDescription>
              Twitter sentiment analysis for stock market prediction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
