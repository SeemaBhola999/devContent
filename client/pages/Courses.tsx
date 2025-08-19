import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Clock, Users, Search, Filter } from "lucide-react";

const allCourses = [
  {
    id: 1,
    title: "Modern React Development",
    description: "Learn React 18 with hooks, context, and best practices for building scalable applications.",
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 12500,
    duration: "8 hours",
    level: "Intermediate",
    category: "Frontend",
    price: "Free",
    lessons: 24
  },
  {
    id: 2,
    title: "Node.js & Express Masterclass",
    description: "Build robust backend APIs with Node.js, Express, and MongoDB from scratch.",
    instructor: "Mike Rodriguez",
    rating: 4.8,
    students: 8900,
    duration: "12 hours",
    level: "Beginner",
    category: "Backend",
    price: "$49",
    lessons: 36
  },
  {
    id: 3,
    title: "TypeScript for JavaScript Developers",
    description: "Master TypeScript and add type safety to your JavaScript projects with confidence.",
    instructor: "Alex Thompson",
    rating: 4.9,
    students: 15200,
    duration: "6 hours",
    level: "Intermediate",
    category: "Programming",
    price: "$29",
    lessons: 18
  },
  {
    id: 4,
    title: "Docker & Kubernetes for Developers",
    description: "Learn containerization and orchestration for modern application deployment.",
    instructor: "Jennifer Wu",
    rating: 4.7,
    students: 6800,
    duration: "10 hours",
    level: "Advanced",
    category: "DevOps",
    price: "$59",
    lessons: 28
  },
  {
    id: 5,
    title: "GraphQL API Development",
    description: "Build efficient and flexible APIs using GraphQL with Apollo Server.",
    instructor: "David Kumar",
    rating: 4.8,
    students: 5400,
    duration: "7 hours",
    level: "Intermediate",
    category: "Backend",
    price: "$39",
    lessons: 21
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description: "Create cross-platform mobile apps using React Native and Expo.",
    instructor: "Maria Santos",
    rating: 4.6,
    students: 9200,
    duration: "14 hours",
    level: "Intermediate",
    category: "Mobile",
    price: "$69",
    lessons: 42
  }
];

export default function Courses() {
  return (
    <>
      <SEO
        title="Programming Courses - Learn Web Development Online | devContent"
        description="Discover comprehensive programming courses covering Laravel, Node.js, Database management, Payment Gateway integration, APIs, and AI development. Start your coding journey today."
        keywords="programming courses, web development courses, laravel course, nodejs course, database course, coding bootcamp, online programming classes, developer training"
        url="https://devcontent.com/courses"
      />
      <Layout>
        <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">All Courses</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of development courses designed to take your skills to the next level.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 bg-white/80"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-white/80">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px] bg-white/80">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-white/80">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-slate-200/60 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <Badge className="absolute top-3 left-3 bg-white/90 text-slate-800 hover:bg-white">
                  {course.category}
                </Badge>
                <div className="absolute top-3 right-3 text-white font-semibold text-sm bg-black/30 px-2 py-1 rounded">
                  {course.price}
                </div>
                <div className="absolute bottom-3 left-3 text-white text-sm bg-black/30 px-2 py-1 rounded">
                  {course.lessons} lessons
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">by {course.instructor}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-8">
          <Button variant="outline" size="lg" className="bg-white/80">
            Load More Courses
          </Button>
        </div>
        </div>
      </Layout>
    </>
  );
}
