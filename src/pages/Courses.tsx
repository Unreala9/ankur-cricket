import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Trophy, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Full Year Academy ",
      duration: "1 Year",
      price: "35,000 (One Session)",
      timing: "6:30 AM - 9:00 AM or 3:30 PM - 6:30 PM",
    },
    {
      id: 2,
      name: "Full Year Academy",
      duration: "1 Year ",
      price: "60,000 (Two Sessions)",
      timing: "6:30 AM - 9:00 AM & 3:30 PM - 6:30 PM",
    },
    {
      id: 3,
      name: "Summer Camp",
      duration: "4 Month(Summer)",
      price: "15,000 ",
      timing: "Marck to june",
    },
    {
      id: 4,
      name: "Annual Package with Hostel ",
      duration: "1 Year ",
      price: "2,10,000",
      timing: "Full-time",
    },
    {
      id: 5,
      name: "Annual Package with Hostel & School",
      duration: "1 Year",
      price: "2,60,000",
      timing: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative  py-16"
        style={{
          backgroundImage: `url("/images/view.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-black/50 p-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
              Cricket Training Programs
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Comprehensive cricket courses designed for every age group and
              skill level. From beginners to professionals, we have the perfect
              program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-foreground">
                      {course.name}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ₹{course.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span>{course.timing}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-border">
                    <Button className="w-full" asChild>
                      <Link to="/register">Enroll Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-sm text-muted-foreground">
                  Morning, evening, and weekend batches available to suit your
                  schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Small Batch Sizes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Limited students per batch ensures personalized attention for
                  every player.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Family Discounts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Special rates for siblings and family members. Ask about our
                  discount programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Cricket Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose the perfect program and register today. Registration fee just
            ₹51 only for all courses!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
