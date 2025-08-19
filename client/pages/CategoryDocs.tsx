import { useParams } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  User, 
  Star,
  BookOpen,
  ArrowRight,
  Play,
  Download,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryContent: Record<string, any> = {
  laravel: {
    name: "Laravel",
    description: "Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.",
    version: "11.x",
    difficulty: "Beginner to Advanced",
    estimatedTime: "40 hours",
    sections: [
      {
        title: "Getting Started",
        articles: [
          { title: "Installation", slug: "installation", duration: "15 min", difficulty: "Beginner" },
          { title: "Configuration", slug: "configuration", duration: "20 min", difficulty: "Beginner" },
          { title: "Directory Structure", slug: "directory-structure", duration: "10 min", difficulty: "Beginner" },
          { title: "Deployment", slug: "deployment", duration: "30 min", difficulty: "Intermediate" }
        ]
      },
      {
        title: "The Basics",
        articles: [
          { title: "Routing", slug: "routing", duration: "25 min", difficulty: "Beginner" },
          { title: "Middleware", slug: "middleware", duration: "20 min", difficulty: "Intermediate" },
          { title: "CSRF Protection", slug: "csrf", duration: "15 min", difficulty: "Beginner" },
          { title: "Controllers", slug: "controllers", duration: "30 min", difficulty: "Beginner" }
        ]
      },
      {
        title: "Frontend",
        articles: [
          { title: "Blade Templates", slug: "blade", duration: "35 min", difficulty: "Beginner" },
          { title: "Asset Bundling (Vite)", slug: "vite", duration: "25 min", difficulty: "Intermediate" },
          { title: "Localization", slug: "localization", duration: "20 min", difficulty: "Intermediate" }
        ]
      },
      {
        title: "Security",
        articles: [
          { title: "Authentication", slug: "authentication", duration: "45 min", difficulty: "Intermediate" },
          { title: "Authorization", slug: "authorization", duration: "35 min", difficulty: "Intermediate" },
          { title: "Email Verification", slug: "verification", duration: "25 min", difficulty: "Intermediate" },
          { title: "Encryption", slug: "encryption", duration: "20 min", difficulty: "Advanced" }
        ]
      }
    ]
  },
  nodejs: {
    name: "Node.js",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Learn to build scalable server-side applications.",
    version: "20.x LTS",
    difficulty: "Intermediate",
    estimatedTime: "35 hours",
    sections: [
      {
        title: "Fundamentals",
        articles: [
          { title: "Introduction to Node.js", slug: "introduction", duration: "20 min", difficulty: "Beginner" },
          { title: "Modules and NPM", slug: "modules", duration: "25 min", difficulty: "Beginner" },
          { title: "File System", slug: "file-system", duration: "30 min", difficulty: "Beginner" },
          { title: "Events and Streams", slug: "events-streams", duration: "35 min", difficulty: "Intermediate" }
        ]
      },
      {
        title: "Express.js",
        articles: [
          { title: "Getting Started with Express", slug: "express-intro", duration: "25 min", difficulty: "Beginner" },
          { title: "Routing", slug: "express-routing", duration: "30 min", difficulty: "Beginner" },
          { title: "Middleware", slug: "express-middleware", duration: "25 min", difficulty: "Intermediate" },
          { title: "Error Handling", slug: "error-handling", duration: "20 min", difficulty: "Intermediate" }
        ]
      },
      {
        title: "Database Integration",
        articles: [
          { title: "MongoDB with Mongoose", slug: "mongodb", duration: "40 min", difficulty: "Intermediate" },
          { title: "PostgreSQL with Prisma", slug: "postgresql", duration: "45 min", difficulty: "Intermediate" },
          { title: "Redis for Caching", slug: "redis", duration: "25 min", difficulty: "Intermediate" }
        ]
      }
    ]
  },
  database: {
    name: "Database",
    description: "Master database design, optimization, and management across different database systems.",
    version: "Latest",
    difficulty: "All Levels",
    estimatedTime: "50 hours",
    sections: [
      {
        title: "SQL Fundamentals",
        articles: [
          { title: "Introduction to SQL", slug: "sql-intro", duration: "30 min", difficulty: "Beginner" },
          { title: "Basic Queries", slug: "basic-queries", duration: "40 min", difficulty: "Beginner" },
          { title: "Joins and Relationships", slug: "joins", duration: "45 min", difficulty: "Intermediate" },
          { title: "Advanced Queries", slug: "advanced-queries", duration: "50 min", difficulty: "Advanced" }
        ]
      },
      {
        title: "Database Design",
        articles: [
          { title: "Entity Relationship Modeling", slug: "er-modeling", duration: "35 min", difficulty: "Intermediate" },
          { title: "Normalization", slug: "normalization", duration: "40 min", difficulty: "Intermediate" },
          { title: "Indexing Strategies", slug: "indexing", duration: "30 min", difficulty: "Advanced" }
        ]
      }
    ]
  },
  "payment-gateway": {
    name: "Payment Gateway",
    description: "Learn to integrate secure payment processing solutions into your applications.",
    version: "Latest APIs",
    difficulty: "Intermediate to Advanced",
    estimatedTime: "25 hours",
    sections: [
      {
        title: "Payment Fundamentals",
        articles: [
          { title: "Payment Processing Basics", slug: "basics", duration: "25 min", difficulty: "Beginner" },
          { title: "Security & PCI Compliance", slug: "security", duration: "35 min", difficulty: "Intermediate" },
          { title: "Payment Methods", slug: "payment-methods", duration: "20 min", difficulty: "Beginner" }
        ]
      },
      {
        title: "Stripe Integration",
        articles: [
          { title: "Stripe Setup", slug: "stripe-setup", duration: "30 min", difficulty: "Intermediate" },
          { title: "Processing Payments", slug: "stripe-payments", duration: "40 min", difficulty: "Intermediate" },
          { title: "Webhooks", slug: "stripe-webhooks", duration: "35 min", difficulty: "Advanced" }
        ]
      }
    ]
  },
  apis: {
    name: "APIs",
    description: "Master API development, integration, and best practices for building robust web services.",
    version: "REST & GraphQL",
    difficulty: "All Levels",
    estimatedTime: "45 hours",
    sections: [
      {
        title: "REST APIs",
        articles: [
          { title: "REST Principles", slug: "rest-principles", duration: "25 min", difficulty: "Beginner" },
          { title: "HTTP Methods", slug: "http-methods", duration: "20 min", difficulty: "Beginner" },
          { title: "Status Codes", slug: "status-codes", duration: "15 min", difficulty: "Beginner" },
          { title: "API Versioning", slug: "versioning", duration: "30 min", difficulty: "Intermediate" }
        ]
      },
      {
        title: "GraphQL",
        articles: [
          { title: "GraphQL Basics", slug: "graphql-basics", duration: "35 min", difficulty: "Intermediate" },
          { title: "Queries and Mutations", slug: "queries-mutations", duration: "40 min", difficulty: "Intermediate" },
          { title: "Schema Design", slug: "schema-design", duration: "45 min", difficulty: "Advanced" }
        ]
      }
    ]
  },
  ai: {
    name: "AI",
    description: "Integrate artificial intelligence and machine learning capabilities into your applications.",
    version: "Latest Models",
    difficulty: "Advanced",
    estimatedTime: "60 hours",
    sections: [
      {
        title: "Getting Started",
        articles: [
          { title: "AI Fundamentals", slug: "fundamentals", duration: "40 min", difficulty: "Beginner" },
          { title: "Machine Learning Basics", slug: "ml-basics", duration: "45 min", difficulty: "Intermediate" },
          { title: "Neural Networks", slug: "neural-networks", duration: "60 min", difficulty: "Advanced" }
        ]
      },
      {
        title: "OpenAI Integration",
        articles: [
          { title: "OpenAI API Setup", slug: "openai-setup", duration: "25 min", difficulty: "Intermediate" },
          { title: "GPT Integration", slug: "gpt-integration", duration: "40 min", difficulty: "Intermediate" },
          { title: "DALL-E Image Generation", slug: "dalle", duration: "35 min", difficulty: "Intermediate" }
        ]
      }
    ]
  }
};

export default function CategoryDocs() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? categoryContent[categoryId] : null;

  if (!category) {
    return (
      <DocsLayout>
        <div className="container px-4 py-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-muted-foreground mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-8">The documentation category you're looking for doesn't exist.</p>
            <Link to="/docs">
              <Button>← Back to Documentation</Button>
            </Link>
          </div>
        </div>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout>
      <div className="container px-4 py-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/docs" className="hover:text-foreground">Documentation</Link>
              <span>/</span>
              <span>{category.name}</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{category.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary">Version {category.version}</Badge>
                <Badge variant="outline">{category.difficulty}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {category.estimatedTime}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start Card */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Quick Start
              </CardTitle>
              <CardDescription>
                Get up and running with {category.name} in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Tutorial
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download Examples
                </Button>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Official Docs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-8">
            {category.sections.map((section: any, index: number) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                <div className="grid gap-4">
                  {section.articles.map((article: any, articleIndex: number) => (
                    <Card key={articleIndex} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                              <Link to={`/docs/${categoryId}/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                {article.duration}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {article.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <Link to={`/docs/${categoryId}/${article.slug}`}>
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
            ))}
          </div>

          {/* Related Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Related Topics</CardTitle>
              <CardDescription>
                Explore related documentation that might interest you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(categoryContent)
                  .filter(([key]) => key !== categoryId)
                  .slice(0, 3)
                  .map(([key, cat]: [string, any]) => (
                    <Link key={key} to={`/docs/${key}`}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{cat.name}</h4>
                          <p className="text-sm text-muted-foreground">{cat.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocsLayout>
  );
}
