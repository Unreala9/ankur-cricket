import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Trophy,
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Index = () => {
  const headCoach = {
    name: "Er Jyoti Prakash Tyagi",
    title: "Director",
    image: "/images/headc.jpg",
    experience: "27+ years",
    qualifications: [
      "BE (Civil)",
      "BCCI, NCA Cricket Coach",
      "Director Ankur Cricket Academy",
      "Ex Captain State Bank Of India (MP & CG)",
      "Ex-Member of M.P.C.A Cricket Development Committee (S.G.F.I-1991-92)",
      "Under 19, India Camp",
      "Ex Captain MP Cricket Team under 19",
      "Ex Captain MP Cricket Team under 16",
      "Ex Member Cricket Development Committee (CDC) MPCA",
      "Ex Chief Coach MPCA Sub Center for Bhopal Division 2008 to 2014",
      "Tournament Director, (Cricket) Khelo MP",
    ],
    philosophy:
      "Cricket is not just a sport; it's a way of life that teaches discipline, teamwork, and perseverance. Every child has the potential to excel - our job is to unlock it.",
    availability: "Monday to Saturday, 6:00 AM - 10:00 AM",
    accolades: [
      "The Engineer, The Coach, The Mentor, The Leader, The Brother",
      "Coached 5 International Cricket Players",
      "Mentored 16 Ranji Trophy, Vijay Hazare, Mushtaq Ali Players",
      "Guided 5 State Captains, including Ranji Trophy Champion Captain Aditya Shrivastava",
      "Facilitated 16 India, BCCI, NCA Camps",
      "Nurtured World Record Holders",
      "Developed Engineers, Leaders, CEOs, and Dignitaries of India",
    ],
  };
  const achievements = [
    {
      icon: Trophy,
      title: "Expert Cricket Coaching Staff",
      desc: "Our certified cricket coaches bring years of professional experience and proven training methods.",
    },
    {
      icon: Users,
      title: "State-of-the-Art Cricket Facilities",
      desc: "Train on professional cricket grounds with modern equipment and technology.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      desc: "Over 500 successful cricketers trained with measurable improvements and tournament victories.",
    },
  ];
  const testimonials = [
    {
      name: "Amarjeet Singh",
      role: "State Level Player",
      text: "Major team: Deccan Chargers, Delhi Giants, Madhya Pradesh, Pune Warriors. Batting style: Right Handed Batsman. Bowling style: Right-arm offbreak",
      rating: 5,
    },
    {
      name: "Aditya Shrivastava",
      role: "District Captain",
      text: "Major team: Ranji Trophy Madhya Pradesh. Batting style: Right Hand Middle Order Batsman. Bowling style: Right Arm Fast Bowler",
      rating: 5,
    },
    {
      name: "Varunesh Sharma",
      role: "Youth Player",
      text: "Chargers, Delhi Giants, Madhya Pradesh, Pune Warriors. Batting style: Right Handed Batsman. Bowling style: Right-arm offbreak",
      rating: 5,
    },
  ];
 const galleryImages = [
   {
     src: "/images/g29.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g28.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g27.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g26.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g1.png",
     alt: "Cricket training session",
   },

   {
     src: "/images/g3.png",
     alt: "Player practicing batting",
   },
   {
     src: "/images/g4.png",

     alt: "Fielding drill in action",
   },
   {
     src: "/images/g5.png",

     alt: "Team celebrating a win",
   },
   {
     src: "/images/g6.png",

     alt: "View of the academy facilities",
   },
   {
     src: "/images/g7.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g8.jpg",

     alt: "View of the academy facilities",
   },
   {
     src: "/images/g9.jpg",

     alt: "View of the academy facilities",
   },
   {
     src: "/images/g10.jpg",
     alt: "Fielding drill in action",
   },
   {
     src: "/images/g11.jpg",
     alt: "Team celebrating a win",
   },
   {
     src: "/images/g12.jpg",
     alt: "View of the academy facilities",
   },

   {
     src: "/images/g14.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g15.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g16.jpg",
     alt: "Fielding drill in action",
   },
   {
     src: "/images/g17.jpg",
     alt: "Team celebrating a win",
   },
   {
     src: "/images/g18.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g19.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g20.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g21.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g22.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g23.jpg",
     alt: "View of the academy facilities",
   },
   {
     src: "/images/g25.jpg",
     alt: "View of the academy facilities",
   },
 ];
   const scrollingGalleryImages = [...galleryImages, ...galleryImages];

  return (
    <div className="min-h-screen bg-background">
      {/* Custom CSS for the auto-scrolling animation */}
      <style>
        {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-wrapper {
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
        .scrolling-content {
          animation: scroll 40s linear infinite;
        }
        .scrolling-wrapper:hover .scrolling-content {
          animation-play-state: paused;
        }
      `}
      </style>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-7 md:h-[92vh] h-[90vh] ">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("/images/Banner.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/10 to-primary/5" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 h-full flex items-center ">
          <div className="text-center w-full mt-[70vh]">

            <div className="flex flex-row sm:flex-row gap-8 justify-center mb-8 md:mt-0">
              <Button size="lg" asChild>
                <Link to="/register">Start Your Journey</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-red-500"
              >
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={headCoach.image}
                  alt={headCoach.name}
                  className="w-full h-96 lg:h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl font-bold">{headCoach.name}</h2>
                  <p className="text-xl opacity-90">{headCoach.title}</p>
                  <Badge variant="secondary" className="mt-2">
                    {headCoach.experience}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Coaching Philosophy
                  </h3>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{headCoach.philosophy}"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Qualifications & Achievements
                  </h3>
                  <div className="space-y-2">
                    {headCoach.qualifications.map((qual, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {qual}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Accolades
                  </h3>
                  <div className="space-y-2">
                    {headCoach.accolades.map((accolade, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {accolade}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Ankur Cricket Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-4 border-primary rounded-xl overflow-hidden">
              <video
                src="/images/ankur cricket.mp4"
                autoPlay
                loop
                muted
                className="md:w-[50vw] h-[60vh] w-full object-cover"
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Glimpses of Glory
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Moments of hard work, teamwork, and triumph from Ankur Cricket
              Academy.
            </p>
          </div>
          <div className="scrolling-wrapper relative w-full overflow-hidden">
            <div className="scrolling-content flex w-max flex-nowrap gap-4">
              {scrollingGalleryImages.map((image, index) => (
                <div
                  key={index}
                  className="w-[70vw] md:w-[30vw] max-w-sm flex-shrink-0 overflow-hidden rounded-lg group aspect-w-3 aspect-h-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="md:w-[50vw] w-[90vw] h-[50vh] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Cricket Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their cricket skills
            with us. Registration fee just ₹51 only!
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

export default Index;
