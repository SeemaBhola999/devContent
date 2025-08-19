import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Play, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";


const stats = [
  { label: "Active Learners", value: "50K+", icon: Users },
  { label: "Courses Available", value: "200+", icon: BookOpen },
  { label: "Hours of Content", value: "1,500+", icon: Clock },
  { label: "Success Rate", value: "94%", icon: TrendingUp }
];

export default function Index() {
  return (
    <>
      <SEO
        title="devContent - Master Development Skills | Learn Programming Online"
        description="Learn programming and development skills with comprehensive tutorials and courses. Master Laravel, Node.js, Database management, Payment Gateway integration, APIs, and AI development with hands-on projects."
        keywords="programming courses, web development, laravel tutorial, nodejs tutorial, database tutorial, payment gateway integration, api development, ai programming, coding bootcamp, online programming courses"
        url="https://devcontent.com"
      />
      <Layout>
        <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Master Development Skills
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Learn from industry experts with hands-on projects, real-world examples, and a community of developers ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center border-slate-200/60 bg-white/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        </div>
      </Layout>
    </>
  );
}
