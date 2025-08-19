import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="mb-8">
          <div className="text-8xl font-bold text-slate-300 mb-4">404</div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Page Not Found</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
          <Link to="/courses">
            <Button size="lg" variant="outline">
              <Search className="mr-2 h-5 w-5" />
              Browse Courses
            </Button>
          </Link>
        </div>

        <div className="bg-slate-100 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-slate-800 mb-2">Looking for something specific?</h3>
          <p className="text-slate-600 text-sm mb-4">
            Try exploring our courses or use the navigation menu to find what you need.
          </p>
          <div className="flex flex-col gap-2">
            <Link to="/courses" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              → View All Courses
            </Link>
            <Link to="/tutorials" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              → Browse Tutorials
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
