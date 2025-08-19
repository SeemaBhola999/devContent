import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const categoryInfo: Record<string, { name: string; description: string; color: string }> = {
  frontend: {
    name: "Frontend Development",
    description: "Learn modern frontend technologies including React, Vue, Angular, and more.",
    color: "from-blue-500 to-cyan-500"
  },
  backend: {
    name: "Backend Development", 
    description: "Master server-side development with Node.js, Python, Java, and databases.",
    color: "from-green-500 to-emerald-500"
  },
  mobile: {
    name: "Mobile Development",
    description: "Build mobile apps for iOS and Android using React Native, Flutter, and native technologies.",
    color: "from-purple-500 to-pink-500"
  },
  devops: {
    name: "DevOps & Cloud",
    description: "Learn containerization, CI/CD, cloud platforms, and infrastructure automation.",
    color: "from-orange-500 to-red-500"
  },
  frameworks: {
    name: "Frameworks & Libraries",
    description: "Explore popular frameworks and libraries that accelerate development.",
    color: "from-indigo-500 to-purple-500"
  },
  apis: {
    name: "APIs & Integration",
    description: "Master REST, GraphQL, webhooks, and third-party integrations.",
    color: "from-teal-500 to-blue-500"
  },
  algorithms: {
    name: "Algorithms & Data Structures",
    description: "Strengthen your problem-solving skills with algorithms and data structures.",
    color: "from-yellow-500 to-orange-500"
  }
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? categoryInfo[categoryId] : null;

  if (!category) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Category Not Found</h1>
          <p className="text-slate-600 mb-8">The category you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Categories
        </Link>

        {/* Header */}
        <div className="text-center py-8">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{category.name}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Placeholder Content */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/60">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              We're working hard to bring you amazing {category.name.toLowerCase()} content.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-slate-100 rounded-lg p-8">
              <MessageCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-700 mb-2">Want to be notified?</h3>
              <p className="text-slate-600 mb-4">
                This category is under development. Continue prompting to help us build out this section with courses, tutorials, and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Request Content
                </Button>
                <Link to="/courses">
                  <Button variant="outline">
                    Explore Other Courses
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
