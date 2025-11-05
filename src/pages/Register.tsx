import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Users,
  Shield,
  IndianRupee,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    email: "",
    phone: "",

    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Course Selection
    selectedCourse: "",

    // Emergency Contact
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",

    // Medical Information
    medicalConditions: "",
    allergies: "",

    // Terms & Conditions
    agreeTerms: false,
    agreeMarketing: false,
  });

  // State management for the new payment flow
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  // --- UPDATED COURSES DATA ---
  const courses = [
    {
      id: 2,
      name: "Full Year Academy (One Session)",
      duration: "1 Year",
      price: "35,000",
      timing: "6:30 AM - 9:00 AM or 3:30 PM - 6:30 PM",
      features: [
        "7 Days a Week",
        "One Session per Day",
        "Fitness Programme",
        "Physio & Trainers available",
        "All India Tournament Access",
        "Personal Attention",
      ],
    },
    {
      id: 3,
      name: "Full Year Academy (Two Sessions)",
      duration: "1 Year",
      price: "60,000",
      timing: "6:30 AM - 9:00 AM & 3:30 PM - 6:30 PM",
    },
    {
      id: 4,
      name: "Summer Camp",
      duration: "March to june",
      price: "15,000",
      timing: "Morning, Evening, or Both",
    },

    {
      id: 6,
      name: "Annual Package with Hostel (Shared Room)",
      duration: "1 Year",
      price: "2,10,000",
      timing: "Full-time",
    },
    {
      id: 7,
      name: "Annual Package with Hostel & School",
      duration: "1 Year",
      price: "2,60,000",
      timing: "Full-time",
    },
  ];

  // Find course by string ID
  const selectedCourseDetails = courses.find(
    (course) => course.id.toString() === formData.selectedCourse
  );

  const confirmPaymentAndEnableRegistration = () => {
    const userConfirmed = window.confirm("Have you completed the payment?");
    if (userConfirmed) {
      setPaymentCompleted(true);
      setShowPaymentOptions(false);
      toast({
        title: "Payment Confirmed!",
        description: "You can now complete your registration.",
      });
    } else {
      toast({
        title: "Payment Pending",
        description: "Please complete the payment to proceed.",
        variant: "destructive",
      });
    }
  };

  const handleRazorpayPayment = () => {
    toast({
      title: "Redirecting to Razorpay...",
      description: "Please complete the payment in the new window.",
    });
    confirmPaymentAndEnableRegistration();
  };

  const handleUpiPayment = () => {
    setShowQrCode(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentCompleted) {
      toast({
        title: "Payment Required",
        description:
          "Please complete the registration payment before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    const academyPhoneNumber = "919876543210";
    const academyEmail = "info@ankurcricket.com";
    const courseName = selectedCourseDetails?.name || "Not Selected";

    const messageBody = `
      New Cricket Academy Registration:
      ---------------------------------
      **Personal Info:**
      - Name: ${formData.fullName}
      - DOB: ${formData.dateOfBirth}
      - Age: ${formData.age}
      - Gender: ${formData.gender}
      - Email: ${formData.email}
      - Phone: ${formData.phone}

      **Address:**
      - Address: ${formData.address}
      - City: ${formData.city}
      - State: ${formData.state}
      - Pincode: ${formData.pincode}

      **Course Selection:**
      - Course: ${courseName}

      **Emergency Contact:**
      - Name: ${formData.emergencyName}
      - Relation: ${formData.emergencyRelation}
      - Phone: ${formData.emergencyPhone}

      **Medical Info:**
      - Conditions: ${formData.medicalConditions || "None"}
      - Allergies: ${formData.allergies || "None"}

      **Consents:**
      - Agreed to T&C: Yes
      - Marketing Updates: ${formData.agreeMarketing ? "Yes" : "No"}
    `;

    const whatsappUrl = `https://wa.me/${academyPhoneNumber}?text=${encodeURIComponent(
      messageBody
    )}`;
    window.open(whatsappUrl, "_blank");

    const emailSubject = `New Registration: ${formData.fullName}`;
    const mailToUrl = `mailto:${academyEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(messageBody)}`;
    window.open(mailToUrl, "_blank");

    toast({
      title: "Registration Successful!",
      description:
        "Welcome to Ankur Cricket Academy! Your details have been sent.",
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative py-12"
        style={{
          backgroundImage: `url("/images/view.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-black/50 p-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Register for Cricket Training
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join Ankur Cricket Academy and start your journey to cricket
              excellence. Registration fee: ₹51 only!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        required
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleChange("dateOfBirth", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleChange("age", e.target.value)}
                        required
                        placeholder="Age"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => handleChange("gender", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="Email address"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Address Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Address Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      required
                      placeholder="Enter complete address"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        required
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleChange("state", e.target.value)}
                        required
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) =>
                          handleChange("pincode", e.target.value)
                        }
                        required
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    Course Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <Select
                      value={formData.selectedCourse}
                      onValueChange={(value) =>
                        handleChange("selectedCourse", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your training program" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.id.toString()}
                          >
                            {course.name} (₹{course.price}only)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName">Contact Name *</Label>
                      <Input
                        id="emergencyName"
                        value={formData.emergencyName}
                        onChange={(e) =>
                          handleChange("emergencyName", e.target.value)
                        }
                        required
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyRelation">Relationship *</Label>
                      <Select
                        value={formData.emergencyRelation}
                        onValueChange={(value) =>
                          handleChange("emergencyRelation", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="sibling">Sibling</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Contact Number *</Label>
                    <Input
                      id="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={(e) =>
                        handleChange("emergencyPhone", e.target.value)
                      }
                      required
                      placeholder="Emergency contact number"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information (Optional)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="medicalConditions">
                      Medical Conditions
                    </Label>
                    <Textarea
                      id="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={(e) =>
                        handleChange("medicalConditions", e.target.value)
                      }
                      placeholder="Any medical conditions we should know about..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="allergies">Allergies</Label>
                    <Textarea
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) =>
                        handleChange("allergies", e.target.value)
                      }
                      placeholder="Any allergies we should be aware of..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 text-primary mr-2" />
                    Registration Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Registration Fee</span>
                      <span className="text-2xl font-bold text-primary">
                        ₹51 only
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      One-time registration fee to secure your spot. Course fees
                      will be collected separately.
                    </p>
                  </div>

                  {!paymentCompleted ? (
                    <>
                      {!showPaymentOptions && (
                        <Button
                          type="button"
                          onClick={() => setShowPaymentOptions(true)}
                          className="w-full"
                          size="lg"
                        >
                          <IndianRupee className="h-4 w-4 mr-2" />
                          Pay Registration Fee - ₹51 only
                        </Button>
                      )}

                      {showPaymentOptions && (
                        <div className="space-y-3 pt-2">
                          <Button
                            type="button"
                            onClick={handleRazorpayPayment}
                            className="w-full"
                            variant="outline"
                          >
                            Pay with Razorpay
                          </Button>
                          <Button
                            type="button"
                            onClick={handleUpiPayment}
                            className="w-full"
                            variant="outline"
                          >
                            Pay with UPI QR
                          </Button>
                        </div>
                      )}

                      {showQrCode && (
                        <div className="mt-4 p-4 border rounded-lg text-center space-y-3 bg-background">
                          <p className="font-semibold">Scan to Pay with UPI</p>
                          <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=ankurcricket@upi&pn=Ankur%20Cricket%20Academy&am=59.00&cu=INR"
                            alt="UPI QR Code"
                            className="mx-auto"
                          />
                          <Button
                            type="button"
                            onClick={confirmPaymentAndEnableRegistration}
                            size="sm"
                          >
                            I have paid
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-3 shrink-0" />
                        <span>Payment Completed Successfully!</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        handleChange("agreeTerms", !!checked)
                      }
                    />
                    <Label
                      htmlFor="agreeTerms"
                      className="text-sm leading-relaxed"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-primary underline">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary underline ml-1">
                        Privacy Policy
                      </a>{" "}
                      of Ankur Cricket Academy.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) =>
                        handleChange("agreeMarketing", !!checked)
                      }
                    />
                    <Label htmlFor="agreeMarketing" className="text-sm">
                      I would like to receive updates about academy events, new
                      programs, and cricket tips.
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!paymentCompleted || !formData.agreeTerms}
              >
                Complete Registration
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* --- UPDATED COURSE DETAILS CARD --- */}
            {selectedCourseDetails && (
              <Card>
                <CardHeader>
                  <CardTitle>Selected Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {selectedCourseDetails.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1">
                      {selectedCourseDetails.duration}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timing:</span>
                      <span className="text-right">
                        {selectedCourseDetails.timing}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Course Fee:</span>
                      <span className="text-primary">
                        ₹{selectedCourseDetails.price}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {selectedCourseDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Registration Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>What You Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                  Making International Celebrities we Produce 5 International
                  Players, 6 state Captains, 4 IPL Players,15 Ranji Trophy -
                  Vijay Hazare Trophy - Mustaq Ali Trophy Players , 81 National Players.
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                  We also produce Administrators, Politisions,  Engineers, Doctors, Businessmans & Good Citizens of India.
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Professional cricket coaching
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Access to modern facilities
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Personalized training plans
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Performance tracking
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Regular progress reports
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Participation in tournaments
                </div>

              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  Have questions about registration? Contact us:
                </p>
                <div>
                  <p className="font-medium">
                    Phone: +91 94074 69553 Ajay Mathuriya ( manager)
                  </p>
                  <p className="font-medium">Email: info@ankurcricket.com</p>
                </div>
                <p className="text-muted-foreground">
                  Office Hours: Mon-Sat, 9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
