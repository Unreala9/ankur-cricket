import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      question: "What is the minimum age to join the academy?",
      answer:
        "We accept students from 6 years old. We have specialized programs for different age groups, starting with our 'Little Champions' program for 6-8 year olds.",
    },
    {
      question: "Do you provide cricket equipment?",
      answer:
        "Yes, we provide all basic cricket equipment during training sessions. However, we recommend students to gradually acquire their own equipment as they progress.",
    },
    {
      question: "What are the training timings?",
      answer:
        "We offer flexible timings including early morning (6:00-8:00 AM), evening (4:00-7:00 PM), and weekend batches. Specific timings vary by program and age group.",
    },
    {
      question: "Is there a trial session available?",
      answer:
        "Yes! We offer a free trial session for new students. You can book a trial by calling us or filling out the contact form.",
    },
    {
      question: "What is the coach-to-student ratio?",
      answer:
        "We maintain small batch sizes to ensure personalized attention. Our typical ratio is 1:8 for younger kids and 1:12 for older students.",
    },
    {
      question: "Do you help with selections for school/state teams?",
      answer:
        "Absolutely! We provide guidance for selections, including specialized coaching for trials and mock selection sessions.",
    },
    {
      question: "Are there any scholarship programs available?",
      answer:
        "Yes, we offer need-based scholarships and merit scholarships for talented students. Please contact us to learn more about eligibility criteria.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Student safety is our top priority. We have qualified first aid personnel, proper safety equipment, and comprehensive insurance coverage for all students.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/view.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-black/50 p-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about our programs? Want to schedule a visit? We're
              here to help you start your cricket journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageCircle className="h-6 w-6 text-primary mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Ankur cricket Academy
                        <br />
                        ankur kheel parisar, 6 no bus stop,
                        <br />
                        shivaji nagar, Bhopal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +91 94074 69553 Ajay Mathuriya ( manager)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@ankurcricket.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        admissions@ankurcricket.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        Training Hours
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Mon-Fri: 6:00 AM - 8:00 AM, 4:00 PM - 8:00 PM</p>
                        <p>Saturday: 6:00 AM - 12:00 PM, 3:00 PM - 7:00 PM</p>
                        <p>Sunday: 7:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Book a Visit
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Free Trial Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our cricket academy
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/*
      Map Section
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Mumbai's sports complex
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive Google Map will be embedded here
                <br />
                Cricket Ground Complex, Sports City, Mumbai
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Cricket Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ankur Cricket Academy is one of the best cricket academies not only
            in Bhopal but in the entire country. Ankur Cricket Academy, Bhopal
            has given society numerous international cricket players, IPL
            players, Ranji Trophy champion players, and many captains.
            <br />
            It has also produced many engineers, doctors, IITians, and
            well-educated, socially popular, and disciplined individuals. With
            27 consecutive years of experience in cricket coaching, the academy
            now brings you a residential cricket academy that guarantees
            holistic development along with school education.
            <br />
            Our priorities include school education, cricket training, mental
            coaching, social education, and practical skills, along with cricket
            placements, job placements, and good social conduct.
            <br />
            We guarantee to transform children aged 8 to 18 into successful,
            outstanding cricketers and leaders in our society. Our source of
            inspiration, BCCI and NCA cricket coach Engineer Jyoti Prakash
            Tyagi, will be the mentor for the academy, supported by the entire
            Ankur Cricket Academy team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Free Trial
            </Button>
            <Button size="lg" className="text-black" variant="outline">
              Call Now:+91 94074 69553
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
