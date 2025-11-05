import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Users, Calendar, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Coaches = () => {
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

  const coaches = [
    {
      name: "Mr. Pradeep Yagnik",
      role: "Coach",
      image: "/images/2nd coach.jpg",
      experience: "12+ years",
      achievements: [
        "Represented Madhya Pradesh in Ranji Trophy and a member of M.C.C.A. Team in 1995, played in England. Participated in various tournaments for M.P.",
      ],
      philosophy:
        "Perfect practice makes perfect. Every shot is a work of art.",
    },
    {
      name: "Mr. Deepak Deshmukh",
      role: "Coach",
      image: "/images/Deepak coach.jpg",
      experience: "10+ years",
      achievements: [
        "Represented 35th school state-level cricket competition in Gwalior in 1990-91 and Domestic, State, and District-level tournaments. Played for Hoshangabad Senior Division Cricket Association at Indore and Bhopal 1995, 1996. Represented Inter-University Staff Cricket Tournaments Jaipur, Rajasthan 2004-05.",
      ],
      philosophy:
        "Bowling is chess at 140 km/h. It's about outsmarting the batsman.",
    },
    {
      name: "Dr. Sheetal Kumar Gupta",
      role: "Orthopaedics",
      image: "/images/DR GUPTA.jpg",
      achievements: [
        "Assistant Professor in the Department of Orthopaedics at L.N. Medical College & J.K. Hospital, Bhopal. Visiting sports medicine specialist for Sports Authority of India (SAI). Director of Joint and Sports Injury Clinic in Bhopal. Visits as arthroscopy specialist at Divisional Railway Hospital in Bhopal.",
      ],
      philosophy:
        "Behind every great bowler is a great wicket keeper. We are the silent guardians.",
    },
    {
      name: "Dr. Gaurav Mehra",
      role: "Physiotherapist",
      image: "/images/DR gaurav.png",
      achievements: [
        "Assesses, evaluates, diagnoses, and treats players requiring physiotherapy care. Monitors player progress and outcomes. Conducts rehabilitation training programs for players in multiple departments. Manages varied cases of sports injuries and participates in athletes' training programs.",
      ],
      philosophy:
        "A strong mind in a strong body is the foundation of cricket excellence.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-16"
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
              Meet Our Expert Coaches
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Learn from experienced professionals who have played at the
              highest levels and are passionate about developing the next
              generation of cricket stars.
            </p>
          </div>
        </div>
      </section>

      {/* Head Coach Section */}
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

      {/* Academy Achievements Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ankur Cricket Academy Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Under the leadership of Er Jyoti Prakash Tyagi, we assure you:
              Give us a seed, and we will grow it into a dense tree for your
              family.{" "}
              <strong>
                हम वादा करते हैं। आप हमें एक अंकुर दीजिए, हम बनायेंगे एक घना
                पेड़ आप के परिवार के लिए। जय हिन्द 🇮🇳
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">
                  International Cricket Players
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">16</div>
                <div className="text-muted-foreground">
                  Ranji Trophy, Vijay Hazare, Mushtaq Ali Players
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">
                  State Captains (Including Ranji Champion Aditya Shrivastava)
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">16</div>
                <div className="text-muted-foreground">
                  India, BCCI, NCA Camps
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">
                  Multiple
                </div>
                <div className="text-muted-foreground">
                  World Record Holders
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">Many</div>
                <div className="text-muted-foreground">
                  Engineers, Leaders, CEOs & Dignitaries
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Team */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Coaching Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of specialized coaches bringing years of experience
              and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {coach.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1">
                      {coach.role}
                    </Badge>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">
                        Experience:{" "}
                      </span>
                      <span className="text-muted-foreground">
                        {coach.experience}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-foreground mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {coach.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Trophy className="h-3 w-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      "{coach.philosophy}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Excellence */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Coaching Excellence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">27+</div>
              <div className="text-muted-foreground">
                Years Average Experience
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Certified Coaches</div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Students Coached</div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from the Best
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Train under the guidance of Er Jyoti Prakash Tyagi and our expert
            team. Contact Ajay Mathuriya to start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Start Training Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary border-white/20 hover:bg-white/10"
              asChild
            >
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact Ajay Mathuriya
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaches;
