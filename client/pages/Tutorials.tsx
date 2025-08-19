import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Tutorials</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Step-by-step guides and tutorials to help you master development concepts and build real projects.
          </p>
        </div>

        {/* Placeholder Content */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/60">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Tutorials Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              We're curating the best step-by-step tutorials for developers.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-slate-100 rounded-lg p-8">
              <MessageCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-700 mb-2">Help Us Build This Section</h3>
              <p className="text-slate-600 mb-4">
                This tutorials section is under development. Continue prompting to help us create amazing tutorial content covering:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Getting Started Guides</li>
                  <li>• Project-Based Tutorials</li>
                  <li>• Best Practices</li>
                  <li>• Code Examples</li>
                </ul>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Video Tutorials</li>
                  <li>• Interactive Coding</li>
                  <li>• Real-World Projects</li>
                  <li>• Community Contributions</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Request Tutorials
                </Button>
                <Link to="/courses">
                  <Button variant="outline">
                    Explore Courses Instead
                    <ArrowRight className="ml-2 h-4 w-4" />
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
