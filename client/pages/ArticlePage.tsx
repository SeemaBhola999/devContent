import { useParams } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  User, 
  Calendar,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Copy,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample article content - in a real app this would come from a CMS or API
const sampleContent = {
  laravel: {
    installation: {
      title: "Laravel Installation",
      description: "Learn how to install Laravel and set up your development environment",
      content: `
# Laravel Installation

Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

## Via Laravel Installer

First, download the Laravel installer using Composer:

\`\`\`bash
composer global require laravel/installer
\`\`\`

Make sure to place Composer's system-wide vendor bin directory in your \$PATH so the laravel executable can be located by your system.

Once installed, the \`laravel new\` command will create a fresh Laravel installation in the directory you specify:

\`\`\`bash
laravel new example-app
\`\`\`

## Via Composer Create-Project

Alternatively, you may install Laravel by issuing the Composer \`create-project\` command in your terminal:

\`\`\`bash
composer create-project laravel/laravel example-app
\`\`\`

## Local Development Server

If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the \`serve\` Artisan command:

\`\`\`bash
cd example-app
php artisan serve
\`\`\`

This command will start a development server at \`http://localhost:8000\`.

## Initial Configuration

All of the configuration files for the Laravel framework are stored in the \`config\` directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.

### Environment Configuration

Laravel includes a \`.env.example\` file. If you installed Laravel via Composer, this file will automatically be renamed to \`.env\`. If it wasn't, you should rename the file manually.

Your \`.env\` file should not be committed to your application's source control, since each developer/server using your application could require a different environment configuration.

### Application Key

The next thing you should do after installing Laravel is set your application key to a random string. Typically, this string should be 32 characters long. The key can be set in the \`.env\` environment file:

\`\`\`bash
php artisan key:generate
\`\`\`

## Directory Permissions

After installing Laravel, you may need to configure some permissions. Directories within the \`storage\` and the \`bootstrap/cache\` directories should be writable by your web server or Laravel will not run.

## Web Server Configuration

### Apache

Laravel includes a \`public/.htaccess\` file that is used to provide URLs without the \`index.php\` front controller in the path. Before serving Laravel with Apache, be sure to enable the \`mod_rewrite\` module so the \`.htaccess\` file will be honored by the server.

### Nginx

If you are using Nginx, the following directive in your site configuration will direct all requests to the \`index.php\` front controller:

\`\`\`nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
\`\`\`

That's it! You now have Laravel installed and ready for development.
      `,
      author: "Laravel Team",
      publishedAt: "2024-01-15",
      readTime: "15 min",
      difficulty: "Beginner"
    }
  }
};

export default function ArticlePage() {
  const { categoryId, articleId } = useParams<{ categoryId: string; articleId: string }>();
  
  // In a real app, you'd fetch this from an API
  const article = categoryId && articleId ? sampleContent[categoryId as keyof typeof sampleContent]?.[articleId as keyof any] : null;

  if (!article) {
    return (
      <DocsLayout>
        <div className="container px-4 py-6 lg:px-8">
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-muted-foreground mb-4">Article Coming Soon</h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              This article is currently being written. Continue prompting to help us create this content faster!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={`/docs/${categoryId}`}>
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {categoryId}
                </Button>
              </Link>
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Request This Content
              </Button>
            </div>
          </div>
        </div>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout>
      <div className="container px-4 py-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link to="/docs" className="hover:text-foreground">Documentation</Link>
            <span>/</span>
            <Link to={`/docs/${categoryId}`} className="hover:text-foreground capitalize">{categoryId}</Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          {/* Article Header */}
          <div className="space-y-6 mb-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
              <p className="text-xl text-muted-foreground">{article.description}</p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline">{article.difficulty}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="mr-1 h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Edit on GitHub
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                Feedback
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-md overflow-x-auto"><code class="language-$1">$2</code></pre>')
                      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
                      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-2 mt-4">$1</h3>')
                      .replace(/^\n/gm, '<br>')
                  }} 
                />
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link to={`/docs/${categoryId}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {categoryId}
              </Button>
            </Link>
            <Button variant="outline" disabled>
              Next Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Help Section */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Was this helpful?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let us know if you found this article helpful or if you have suggestions for improvement.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">👍 Yes</Button>
                <Button variant="outline" size="sm">👎 No</Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Give Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocsLayout>
  );
}
