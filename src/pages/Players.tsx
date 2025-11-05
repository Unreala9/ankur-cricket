import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Description } from "@radix-ui/react-dialog";

const Players = () => {
  const players = [
    {
      name: "Samay Srivastava",
      achievements: [
        "Oman National Team",
        "Oman A Team",
        "International Player",
      ],
      image: "/images/samay.jpg",
      description:
        "Major team: Oman National Team, Oman A Team Batting style: Right Handed Batsman Bowling style : Right-arm Legbreak",
    },
    {
      name: "Aayan Mohd. Khan",
      achievements: ["Oman", "Oman A", "International Player"],
      image: "/images/ayan.jpg",
      description:
        "Major team: Oman National Team , Oman A Team Batting style: Right Handed Batsman Bowling style : Right-arm offbreak",
    },
    {
      name: "Aditya Shrivastava",
      achievements: [
        "Madhya Pradesh",
        "IPLs",
        "Ranji Champion Captain",
        "State Captain (Under 16, 19)",
      ],
      image: "/images/Aditya.jpg",
      description:
        "Major team: Madhya Pradesh Batting style: Right Handed Batsman Bowling style : Right-arm offbreak. Captain under 16 for four years, under 19, Ranji Trophy champion captain (only in MP).",
    },
    {
      name: "Amarjeet Singh",
      achievements: ["Ranji Team", "IPL"],
      image: "/images/amarjeet singh.png",
      description:
        "Major team: Ranji Trophy Madhya Pradesh ,Rajasthan Royals Batting style: Right Hand Middle Order Batsman Bowling style : Right Arm Fast Bowler. IPL Player.",
    },
    {
      name: "Varunesh Sharma",
      achievements: ["Ranji Team"],
      image: "/images/Varunesh Sharma.jpg",
      description:
        "Major team: Madhya Pradesh Batting style: Right Handed Batsman Bowling style : Right-arm offbreak. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Aniket Verma",
      achievements: ["Ranji Team", "IPL", "MPL"],
      image: "/images/aniket.jpeg",
      description:
        "Major team: Sunrisers Hyderabad ,Madhya Pradesh Batting style: Right Handed Batsman Bowling style : Right-arm offbreak. IPL Player, Ranji Trophy, Vijay Hazare, Mushtaq Ali Player, MPL Player.",
    },
    {
      name: "Rahul Batham",
      achievements: ["India A", "Ranji Trophy", "International Player", "MPL"],
      image: "/images/rahulbatham.png",
      description:
        "Major teams: India under 19s, Ranji Trophy. Batting style: right handed batsman. Bowling style: right arm off spin. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Mohnish Mishra",
      achievements: [
        "India A",
        "Ranji Trophy",
        "Vijay Hazare Trophy",
        "International Player",
        "IPL",
      ],
      image: "/images/mohnish.jpg",
      description:
        "Major teams: Deccan Chargers , Delhi Giants , Madhya Pradesh , Pune Warriors , Urberisers .Batting style: right handed batsman. Bowling style: right arm offbreak. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Shivam Tiwari",
      achievements: [
        "Ranji Trophy Captain",
        "MPL",
        "State Captain (Under 16, MP)",
      ],
      image: "/images/shivam.jpg",
      description:
        "Major teams: Services, MPL. Batting style: right handed batsman. Bowling style: right arm offbreak. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Vaidaihi Rajput",
      achievements: ["Ranji Captain", "State Captain (Under 16, MP)"],
      image: "/images/vaidaihi.jpeg",
      description:
        "Major achievements: Ranji Captain. Batting style: right handed batsman. Wicket keeper. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Kanishk Dubey",
      achievements: ["MPL"],
      image: "/images/kanishk-dubey.png",
      description: "Major teams: MPL. Batting style: right handed batsman.",
    },
    {
      name: "Shivam Shukla",
      achievements: ["IPL", "MPL", "Ranji Trophy"],
      image: "/images/shivams.jpg",
      description:
        "Major teams:Sunrisers Hyderabad,Kolkata Knight Riders, Madhya Pradesh. Batting style: right handed batsman. Bowling style: right arm Legbreak. MPL Player.",
    },
    {
      name: "Ankush Singh",
      achievements: ["MPL", "Ranji Trophy"],
      image: "/images/ankush.jpeg",
      description:
        "Major teams: MPL, Ranji Trophy. Batting style: Left handed batsman. Bowling style: right arm leg spin Bowler",
    },
    {
      name: "Tanishq Yadav",
      achievements: ["MPL"],
      image: "/images/tanishq-yadav.png",
      description:
        "Major teams: MPL. Batting style: right handed batsman. Bowling style: right arm offbreak",
    },
    {
      name: "Akhil Yadav",
      achievements: ["MPL"],
      image: "/images/akhilyadav.png",
      description: "Major teams: MPL. Batting style: right handed batsman.",
    },
    {
      name: "Yuvraj Nema",
      achievements: ["MPL", "Ranji Trophy"],
      image: "/images/p5.jpg",
      description:
        "Major teams: MPL. Bowling style: right arm medium. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Mann Dubey",
      achievements: ["Ranji", "State Captain (Under 16, MP)"],
      image: "/images/mann.png",
      description: "Major achievements: Ranji.",
    },
    {
      name: "Tammana Nigam",
      achievements: ["Ranji Trophy", "MPL"],
      image: "/images/tammana.jpeg",
      description:
        "Major teams: India A, Ranji Trophy, MPL. Batting style: right handed batsman. Bowling style: right arm medium. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Nikita Singh",
      achievements: ["Ranji Trophy", "MPL"],
      image: "/images/nikitasingh.jpeg",
      description:
        "Major teams: Ranji Trophy, MPL. Bowling style: right arm medium. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Vikrant Singh",
      achievements: ["India A", "Ranji Trophy", "MPL"],
      image: "/images/vikrant.jpeg",
      description:
        "Major teams:India A, Ranji Trophy, MPL. Batting style: right handed batsman. Bowling style: right arm medium. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Ankita Chaturvedi",
      achievements: ["Ranji Trophy"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description:
        "Major teams: Ranji Trophy. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Akshita Chaturvedi",
      achievements: ["Ranji Trophy"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description:
        "Major teams: Ranji Trophy. Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Abhimanyu Pandey",
      achievements: ["Ranji Trophy", "MPL"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "Major teams: Ranji Trophy, MPL.",
    },
    {
      name: "Pranjul Puri",
      achievements: ["International Player"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "International Player from Ankur Cricket Academy.",
    },
    {
      name: "Shreyash Singh",
      achievements: ["State Captain (Under 16, MP)"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "State Captain under 16, MP.",
    },
    {
      name: "Anupam Toppo",
      achievements: ["Ranji Trophy", "Vijay Hazare", "Mushtaq Ali"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Punit Datey",
      achievements: ["Ranji Trophy", "Vijay Hazare", "Mushtaq Ali", "MPL"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description:
        "Ranji Trophy, Vijay Hazare, Mushtaq Ali Player. MPL Player.",
    },
    {
      name: "Dipika Shakya",
      achievements: ["Ranji Trophy", "Vijay Hazare", "Mushtaq Ali"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Khushi Yadav",
      achievements: ["Ranji Trophy", "Vijay Hazare", "Mushtaq Ali"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "Ranji Trophy, Vijay Hazare, Mushtaq Ali Player.",
    },
    {
      name: "Aviral Singh",
      achievements: ["MPL"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "MPL Player.",
    },
    {
      name: "Ritik Tada",
      achievements: ["MPL"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "MPL Player.",
    },
    {
      name: "Vanshika Prajapati",
      achievements: ["MPL"],
      image:
        "/images/cricket-player-isolated-vector-silhouette-cricketer-striking-batter.webp",
      description: "MPL Player.",
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "batsman":
      case "opening batsman":
      case "middle order batsman":
        return "bg-blue-100 text-blue-800";
      case "bowler":
      case "fast bowler":
      case "spinner":
      case "leg spinner":
        return "bg-red-100 text-red-800";
      case "all-rounder":
        return "bg-green-100 text-green-800";
      case "wicket keeper":
      case "captain/batsman":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
              Our Cricket Stars
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Meet the talented cricketers who have trained at Ankur Cricket
              Academy and are now making their mark in professional cricket.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">International Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">IPL Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">81</div>
              <div className="text-muted-foreground">National Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">State Team Captains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">
                Ranji/Vijay Hazare/Mushtaq Ali Players
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  {/* Player Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between gap-5 items-start">
                      <div className="relative mb-4">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="h-[200px] w-[150px] object-cover rounded-lg border-2 border-primary "
                        />
                      </div>
                      <div>
                        <h3 className="text-xl mb-5 font-semibold text-foreground">
                          {player.name}
                        </h3>
                        <h4 className="text-sm font-semibold mb-5 text-foreground  flex items-center">
                          <Trophy className="h-4 w-4 text-primary mr-1" />
                          Key Achievements
                        </h4>
                        <div className="space-y-1 ">
                          {player.achievements
                            .slice(0, 2)
                            .map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <Star className="h-3 w-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </div>
                            ))}
                          {player.achievements.length > 2 && (
                            <div className="text-xs text-primary">
                              +{player.achievements.length - 2} more
                              achievements
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <p>{player.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From academy grounds to professional stadiums - witness the
              journey of our alumni. Ankur Cricket Academy Bhopal has produced
              many administrators, engineers, lawyers, businessmen & good
              citizens of India.🇮🇳 We shape the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  IPL Dreams Come True
                </h3>
                <p className="text-sm text-muted-foreground">
                  3 of our players have been selected for IPL teams, fulfilling
                  their childhood dreams.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  International Recognition
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our alumni have represented India in various age-group
                  international tournaments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Professional Careers
                </h3>
                <p className="text-sm text-muted-foreground">
                  Many graduates now play for state teams and have successful
                  cricket careers.
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
            Your Name Could Be Next!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our academy and follow in the footsteps of these successful
            cricketers. Start your professional cricket journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/90 transition-colors"
            >
              Register Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Players;
