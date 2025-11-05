import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Trophy, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";




const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We breathe cricket and inspire that same passion in every student",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Striving for the highest standards in coaching and player development",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Building strong team spirit and collaborative learning environment",
    },
    {
      icon: Target,
      title: "Dedication",
      description:
        "Committed to helping each player reach their full potential",
    },
  ];

  const achievements = [
    {
      text: "5 State Championship titles",
      image: "/images/g29.jpg",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g28.jpg",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g27.jpg",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g26.jpg",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g25.jpg",
    },
  
    {
      text: "5 State Championship titles",
      image: "/images/g23.jpg",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g22.jpg",
    },


    {
      text: "500+ players trained successfully",
      image: "/images/g3.png",
    },
    {
      text: "95% improvement rate in student performance",
      image: "/images/g4.png",
    },
    {
      text: "Recognized by State Cricket Association",
      image: "/images/g5.png",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g6.png",
    },
    {
      text: "5 State Championship titles",
      image: "/images/g7.jpg",
    },
    {
      text: "20+ students selected for state teams",
      image: "/images/g8.jpg",
    },
    {
      text: "500+ players trained successfully",
      image: "/images/g9.jpg",
    },
    {
      text: "95% improvement rate in student performance",
      image: "/images/g10.jpg",
    },
    {
      text: "Recognized by State Cricket Association",
      image: "/images/g11.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g12.jpg",
    },

    {
      text: "Recognized by State Cricket Association",
      image: "/images/g14.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g15.jpg",
    },
    {
      text: "95% improvement rate in student performance",
      image: "/images/g16.jpg",
    },
    {
      text: "Recognized by State Cricket Association",
      image: "/images/g17.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g18.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g19.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g20.jpg",
    },
    {
      text: "Modern facilities with latest equipment",
      image: "/images/g21.jpg",
    },
  ];

  const coaches = [
    {
      name: "Mr. Pradeep Yagnik",
      role: "Coach",
      achievements:
        "Mr. Pradeep Yagnik is a coach. He has been represent Madhya Pradesh in Ranji Trophy and also a member of M.C.C.A.Team in 1995 and play in Englend.He is also played in various tournament for M.P.",
      image:"/images/2nd coach.jpg"
    },
    {
      name: "Mr. Deepak Deshmukh",
      role: "Coach",
      achievements:
        "Mr. Deepak Deshmukh :Represented 35th school state level cricket competition in Gwalior in 1990-91 and Domestic,State and Direct level tournaments. Played for Hosangabad Senior Division Cricket Association at Indore and Bhopal 1995,1996. Represented Inter-University Staff Cricket Tournaments jaipur, Rajasthan 2004-05",
      image: "/images/Deepak coach.jpg",
    },
    {
      name: "Dr. Sheetal Kumar Gupta",
      role: "Orthopaedics",
      achievements:
        "Mr. Sheetal Kumar Gupta is Assistant professor in the Department of Orthopaedics at L.N.Medical College & J.K. Hospital, Bhopal. He is also Visiting sports medicine specialist for Sports Authority of India (SAI). Presently serving as Director joint and sports injury clinic in Bhopal. He also visits as arthroscopy specialist divisional railway hospital in Bhopal.",
      image:"/images/DR GUPTA.jpg",
    },
    {
      name: "Dr. Gaurav Mehra",
      role: "Psychotherapist",
      achievements:
        "Dr. Gaurav Mehra is a physiotherapist. He can assess,evaluate,diagnose,treat players requiring physiotherapy care. He can alo monitor player progress and outcome.He also took rehabilitation training programs for players in multiple departments. He also managed varied cases of sports injuries and participated in atheletes training program.",
      image: "/images/DR gaurav.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background/50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url(/images/view.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-black/50 p-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
              About Ankur Cricket Academy
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Committed to excellence in cricket training since 1996. We believe
              in nurturing talent, building character, and creating champions
              both on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Welcome to the official website of the Ankur Cricket Academy
                (ACA). This is a non-for-profit organisation committed to
                reaching out to the rough diamonds, and refining their talents
                for the national cricket team of India. The academy provides
                free enrollment, training and accessories for anyone poised to
                become a professional cricketer.So are you ready to play? Our
                unique proposition is that we offer club cricketers the
                opportunity to experience the life of a professional cricketer.
                World class coaches, fitness trainers, and sports psychologists
                are available to you at the Ankur Cricket Academy to make this
                dream a reality. Cricketers will leave the Academy having played
                cricket in India, developed their cricket potential to the full,
                be physically fitter and mentally tougher. They will also have a
                far greater understand of their own game and the finer points of
                this great game. All Ankur Cricket Academy programmes are an
                adventure and a life changing experience. Established in 1996
                under the leadership of Late Mr. Abdul Wahid to coach players of
                high calibre. With the aim to provide quality,accessible and
                above all enjoyable cricket coaching courses to boys and girls
                between the ages of 8 years to 18 years who may or may not have
                had any a cricket experience.
              </p>
            </div>
            <div className="relative border-4 border-primary rounded-lg">
              <img
                src="/images/hero.jpg"
                alt="hero"
                className="rounded-sm shadow-lg w-full h-[70vh] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading cricket academy that develops not just
                  skilled cricketers, but well-rounded individuals who embody
                  the spirit of cricket. We aspire to be the stepping stone for
                  aspiring cricketers to achieve their dreams at national and
                  international levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class cricket coaching and training
                  facilities that nurture talent, build character, and instill
                  values. We are committed to making cricket accessible to all
                  while maintaining the highest standards of coaching
                  excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A testament to our commitment to excellence in cricket education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card className="overflow-hidden shadow-sm">
                <div className="relative">
                  {/* News Image */}
                  <img
                    src={achievement.image} // replace with actual image path
                    alt="Ankur Cricket League 2025"
                    className="w-full h-[60vh] object-cover"
                  />

                  {/* Text Block Overlap */}
                  {/* <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
                      <h3 className="text-xl font-semibold text-[#1b1b1f] mb-2">
                        Ankur Cricket League 2025 Success
                      </h3>
                      {/* <p className="text-muted-foreground mb-3 text-sm">
                        {achievement.text}
                      </p>
                    </div>
                  </div> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Coaches
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from experienced professionals who have played at the
              highest levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {coach.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {coach.role}
                  </Badge>
                  <p className="text-black">
                    <strong>Achievements:</strong> {coach.achievements}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Ankur Cricket
              Academy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4  gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Cricket Family
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of our legacy and start your journey towards cricket
            excellence. Register now for just ₹51 only!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
