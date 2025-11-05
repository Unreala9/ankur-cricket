import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils, Salad, Milk, Coffee, Apple } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const DietChart = () => {
  const meals = [
    {
      id: 1,
      timing: "On Rising - 6:00 am",
      foods: [
        "Milk - 1 Cup (Complan, Boost, Bournvita)",
        "1 Banana",
        "Soured Pulses",
      ],
      prescription: "Take any one with milk",
      icon: <Milk className="h-6 w-6 text-amber-500" />,
    },
    {
      id: 2,
      timing: "Breakfast - 8:00 am to 9:00 am",
      foods: [
        "Fruit Juice",
        "Idli/Dosa",
        "Sambhar",
        "Chutney",
        "Egg",
        "Bread",
        "Butter",
        "Jam",
        "Corn Flakes with milk",
      ],
      prescription: "Eat any one or two",
      icon: <Utensils className="h-6 w-6 text-amber-500" />,
    },
    {
      id: 3,
      timing: "Lunch - 12:00 pm to 1:00 pm",
      foods: ["Roti", "Paratha", "Rice", "Vegetable", "Sabji", "Salad", "Curd"],
      prescription: "Take One Meal",
      icon: <Salad className="h-6 w-6 text-amber-500" />,
    },
    {
      id: 4,
      timing: "Pre-Practice - 4:00 pm",
      foods: ["Tea/Coffee", "Milk", "Sandwich", "Custard", "Lassi"],
      prescription: "Anyone",
      icon: <Coffee className="h-6 w-6 text-amber-500" />,
    },
    {
      id: 5,
      timing: "Post-Practice - 7:00 pm",
      foods: ["Snacks", "Biscuits", "Milk Shake"],
      prescription: "Anyone",
      icon: <Apple className="h-6 w-6 text-amber-500" />,
    },
    {
      id: 6,
      timing: "Dinner - 8:00 pm to 9:00 pm",
      foods: ["Roti/Phulka", "Salad", "Rice", "Fruits"],
      prescription: "Take One Meal",
      icon: <Utensils className="h-6 w-6 text-amber-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-16 "
        style={{
          backgroundImage: `url("/images/view.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/50 p-4 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Ankur Cricket Academy
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Weekly Diet Chart for Players
          </p>

        </div>
      </section>

      {/* Diet Chart Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {meals.map((meal) => (
              <Card
                key={meal.id}
                className="hover:shadow-xl transition-all duration-300 border-2 border-emerald-100"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="background-emerald-100 p-3 rounded-full">
                      {meal.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground-800">
                      {meal.timing}
                    </CardTitle>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="background-amber-100 text-amber-800 border-amber-300"
                    >
                      <Clock className="h-4 w-4 mr-1" />
                      {meal.timing.split("-")[0].trim()}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Food Items */}
                  <div>
                    <h3 className="font-semibold text-foreground-700 mb-2">
                      Food Options:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {meal.foods.map((food, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="background foreground-emerald-800 border-foreground-300"
                        >
                          {food}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Prescription */}
                  <div className="pt-3 border-t border-foreground-100">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground-700">
                        Prescription:
                      </span>
                      <span className="text-amber-600 font-medium">
                        {meal.prescription}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16 background-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground-800">
              Nutrition Guidelines
            </h2>
            <p className="text-foreground-600 mt-2">
              Essential tips for cricket players
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="background border-foreground-200">
              <CardContent className="p-6">
                <div className="text-foreground-600 mb-4 font-bold">
                  Hydration
                </div>
                <p className="text-foreground-700">
                  Drink at least 3-4 liters of water daily. Maintain electrolyte
                  balance during practice sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="background border-foreground-200">
              <CardContent className="p-6">
                <div className="text-foreground-600 mb-4 font-bold">
                  Protein Intake
                </div>
                <p className="text-foreground-700">
                  Include protein-rich foods in every meal for muscle recovery
                  and strength development.
                </p>
              </CardContent>
            </Card>

            <Card className="background border-foreground-200">
              <CardContent className="p-6">
                <div className="text-foreground-600 mb-4 font-bold">
                  Carb Timing
                </div>
                <p className="text-foreground-700">
                  Consume complex carbs 2-3 hours before practice and simple
                  carbs immediately after.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-backround-500 to-backround-600 foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Personalized Nutrition Plans
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a customized diet plan tailored to your position, training
            schedule, and fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="background-emerald-700 hover:background-emerald-800 foreground font-bold py-3 px-8 rounded-lg transition duration-300">
              Request Consultation
            </button>
            <button className="background hover:background-emerald-50 text-foreground-800 font-bold py-3 px-8 rounded-lg border-2 border-foreground-700 transition duration-300">
              Download Full Plan
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DietChart;
