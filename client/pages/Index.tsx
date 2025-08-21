import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Play, BookOpen, Clock, Database, Cpu, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Learners", value: "50K+", icon: Users },
  { label: "Courses Available", value: "200+", icon: BookOpen },
  { label: "Hours of Content", value: "1,500+", icon: Clock },
  { label: "Success Rate", value: "94%", icon: TrendingUp }
];

const categories = [
  { title: "Laravel Mastery", desc: "Advanced tutorials on Laravel, REST APIs & real-world projects.", icon: BookOpen },
  { title: "Node.js & Backend", desc: "Learn scalable APIs, microservices, and backend architecture.", icon: Cpu },
  { title: "Database Systems", desc: "Deep dive into schema design, default tables & optimization.", icon: Database },
  { title: "Payment Gateways", desc: "Integration with Stripe, PayPal, Mada, STC Pay & real-world flows.", icon: CreditCard },
  { title: "API Development", desc: "Hands-on API design, testing, security & deployment.", icon: ArrowRight },
  { title: "AI & Automation", desc: "Build AI-powered apps with Python, Node.js & ML integrations.", icon: Play }
];

export default function Index() {
  return (
    <>
      <SEO
        title="devContent - Advanced Development Skills | Laravel, Node.js, Databases, APIs, AI"
        description="Master advanced programming skills with real-world tutorials. Learn Laravel, Node.js, Database design, Payment Gateway integration, APIs, and AI development with practical market content."
        keywords="advanced programming, laravel tutorial, nodejs backend, database design, payment gateway integration, api development, ai coding, software architecture"
        url="https://devcontent.com"
      />
      <Layout>
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Learn Advanced Development Skills
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Real-world tutorials & courses to master <strong>Laravel, Node.js, Databases, Payment Gateways, APIs, and AI</strong>.
                Stay ahead with industry-ready content designed for developers.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
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
                <Card key={stat.label} className="text-center border-slate-200/60 bg-white/70 backdrop-blur-sm shadow-sm">
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

          {/* Categories / Topics Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
              What You’ll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Card key={cat.title} className="border-slate-200/60 bg-white/70 backdrop-blur-sm hover:shadow-md transition">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                          <Icon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <CardTitle className="text-lg font-semibold">{cat.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">{cat.desc}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
}
