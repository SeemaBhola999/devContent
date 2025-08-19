import { ReactNode, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { 
  BookOpen, 
  Search, 
  Menu, 
  X,
  Server,
  Database,
  CreditCard,
  Zap,
  Brain,
  Code
} from "lucide-react";

interface DocsLayoutProps {
  children: ReactNode;
}

const categories = [
  { 
    id: "laravel", 
    name: "Laravel", 
    icon: Code,
    description: "PHP Laravel framework tutorials and best practices",
    subcategories: [
      { id: "getting-started", name: "Getting Started" },
      { id: "routing", name: "Routing" },
      // { id: "middleware", name: "Middleware" },
      // { id: "controllers", name: "Controllers" },
      // { id: "models", name: "Models & Eloquent" },
      // { id: "views", name: "Views & Blade" },
      // { id: "authentication", name: "Authentication" },
      // { id: "testing", name: "Testing" }
    ]
  },
  { 
    id: "nodejs", 
    name: "Node.js", 
    icon: Server,
    description: "Node.js backend development and server-side programming",
    subcategories: [
      { id: "introduction", name: "Introduction" },
      { id: "modules", name: "Modules" },
      { id: "express", name: "Express.js" },
      // { id: "file-system", name: "File System" },
      // { id: "streams", name: "Streams" },
      // { id: "async", name: "Async Programming" },
      // { id: "npm", name: "NPM & Packages" },
      // { id: "deployment", name: "Deployment" }
    ]
  },
  { 
    id: "database", 
    name: "Database", 
    icon: Database,
    description: "Database design, optimization, and management",
    subcategories: [
      // { id: "sql-basics", name: "SQL Basics" },
      // { id: "mysql", name: "MySQL" },
      // { id: "postgresql", name: "PostgreSQL" },
      // { id: "mongodb", name: "MongoDB" },
      // { id: "redis", name: "Redis" },
      // { id: "orm", name: "ORMs" },
      // { id: "migrations", name: "Migrations" },
      // { id: "optimization", name: "Optimization" }
    ]
  },
  { 
    id: "payment-gateway", 
    name: "Payment Gateway", 
    icon: CreditCard,
    description: "Payment processing and gateway integrations",
    subcategories: [
      { id: "stripe", name: "Stripe Integration" },
      { id: "paypal", name: "PayPal Integration" },
      { id: "razorpay", name: "Razorpay" },
      { id: "security", name: "Payment Security" },
      { id: "webhooks", name: "Webhooks" },
      { id: "testing", name: "Testing Payments" },
      { id: "compliance", name: "PCI Compliance" },
      { id: "refunds", name: "Refunds & Disputes" }
    ]
  },
  { 
    id: "apis", 
    name: "APIs", 
    icon: Zap,
    description: "API development, integration, and best practices",
    subcategories: [
      { id: "rest", name: "REST APIs" },
      { id: "graphql", name: "GraphQL" },
      { id: "authentication", name: "API Authentication" },
      { id: "documentation", name: "API Documentation" },
      { id: "testing", name: "API Testing" },
      { id: "versioning", name: "API Versioning" },
      { id: "rate-limiting", name: "Rate Limiting" },
      { id: "webhooks", name: "Webhooks" }
    ]
  },
  { 
    id: "ai", 
    name: "AI", 
    icon: Brain,
    description: "Artificial Intelligence and machine learning integration",
    subcategories: [
      { id: "openai", name: "OpenAI Integration" },
      { id: "machine-learning", name: "Machine Learning" },
      { id: "nlp", name: "Natural Language Processing" },
      { id: "computer-vision", name: "Computer Vision" },
      { id: "chatbots", name: "Chatbots" },
      { id: "recommendation", name: "Recommendation Systems" },
      { id: "ethics", name: "AI Ethics" },
      { id: "deployment", name: "AI Model Deployment" }
    ]
  }
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();
  const { categoryId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = categories.find(cat => cat.id === categoryId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">devContent</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link 
                to="/docs" 
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Documentation
              </Link>
              {/* <Link 
                to="/courses" 
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === "/courses" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Courses
              </Link> */}
            </nav>
          </div>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8 md:w-[300px] lg:w-[400px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <nav className="flex items-center">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={cn(
          "fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block",
          sidebarOpen && "block"
        )}>
          <div className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="w-full">
              {!categoryId ? (
                // Main categories view
                <div className="space-y-2">
                  <h2 className="mb-4 text-lg font-semibold tracking-tight">Categories</h2>
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.id}
                        to={`/docs/${category.id}`}
                        className="flex items-start space-x-3 rounded-md p-3 hover:bg-accent transition-colors"
                      >
                        <Icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-muted-foreground">{category.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                // Category subcategories view
                currentCategory && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-4">
                      <Link 
                        to="/docs" 
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        ← Back to Categories
                      </Link>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <currentCategory.icon className="h-5 w-5" />
                      <h2 className="text-lg font-semibold tracking-tight">{currentCategory.name}</h2>
                    </div>
                    {currentCategory.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.id}
                        to={`/docs/${categoryId}/${subcategory.id}`}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          location.pathname === `/docs/${categoryId}/${subcategory.id}` 
                            ? "bg-accent text-accent-foreground" 
                            : "text-muted-foreground"
                        )}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
