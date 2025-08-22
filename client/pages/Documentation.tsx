import DocsLayout from "@/components/DocsLayout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Server,
  Database,
  CreditCard,
  Zap,
  Brain,
  Code,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "laravel",
    name: "Laravel",
    icon: Code,
    description: "PHP Laravel framework tutorials and best practices",
    articles: 24,
    level: "Beginner to Advanced",
    color: "bg-red-500"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: Server,
    description: "Node.js backend development and server-side programming",
    articles: 18,
    level: "Intermediate",
    color: "bg-green-500"
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    description: "Database design, optimization, and management",
    articles: 32,
    level: "All Levels",
    color: "bg-blue-500"
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway",
    icon: CreditCard,
    description: "Payment processing and gateway integrations",
    articles: 16,
    level: "Intermediate to Advanced",
    color: "bg-purple-500"
  },
  {
    id: "apis",
    name: "APIs",
    icon: Zap,
    description: "API development, integration, and best practices",
    articles: 28,
    level: "All Levels",
    color: "bg-yellow-500"
  },
  {
    id: "ai",
    name: "AI",
    icon: Brain,
    description: "Artificial Intelligence and machine learning integration",
    articles: 22,
    level: "Advanced",
    color: "bg-pink-500"
  }
];

const recentUpdates = [
  {
    category: "Laravel",
    title: "Laravel 11 New Features",
    description: "Explore the latest features in Laravel 11",
    date: "2 days ago",
    path: "/docs/laravel/laravel-11-features"
  },
  {
    category: "Node.js",
    title: "Building Scalable APIs with Express",
    description: "Learn to build production-ready APIs",
    date: "1 week ago",
    path: "/docs/nodejs/scalable-apis"
  },
  {
    category: "AI",
    title: "Integrating OpenAI GPT-4",
    description: "Step-by-step guide to integrate GPT-4",
    date: "2 weeks ago",
    path: "/docs/ai/openai-integration"
  }
];

export default function Documentation() {
  return (
    <>
      <SEO
        title="Developer Documentation - Laravel, Node.js, Database & More | devContent"
        description="Comprehensive developer documentation covering Laravel, Node.js, Database management, Payment Gateway integration, API development, and AI programming. Learn with detailed guides and examples."
        keywords="developer documentation, laravel docs, nodejs documentation, database guide, payment gateway docs, api documentation, ai programming guide, web development docs"
        url="https://developcontent.netlify.app/docs"
      />
      <DocsLayout>
        <div className="container px-4 py-6 lg:px-8">
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Developer Documentation</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Comprehensive guides, tutorials, and references for modern web development.
                Learn to build scalable applications with industry best practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <BookOpen className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <div className="text-2xl font-bold">140+</div>
                    <div className="text-sm text-muted-foreground">Articles</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-6">
                  <Clock className="h-8 w-8 text-green-600 mr-4" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Hours Content</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-6">
                  <TrendingUp className="h-8 w-8 text-purple-600 mr-4" />
                  <div>
                    <div className="text-2xl font-bold">25K+</div>
                    <div className="text-sm text-muted-foreground">Developers</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Categories Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className={`p-2 rounded-lg ${category.color} text-white`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <Badge variant="secondary">{category.articles} articles</Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{category.level}</Badge>
                          <Link to={`/docs/${category.id}`}>
                            <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              Explore
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Recent Updates</h2>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{update.category}</Badge>
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                            <Link to={update.path}>{update.title}</Link>
                          </h3>
                          <p className="text-muted-foreground">{update.description}</p>
                        </div>
                        <Link to={update.path}>
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Getting Started CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Choose your learning path and start building amazing applications with our comprehensive documentation and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/docs/laravel">
                    <Button variant="secondary" size="lg">
                      Start with Laravel
                    </Button>
                  </Link>
                  <Link to="/docs/nodejs">
                    <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Explore Node.js
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DocsLayout>
    </>
  );
}
