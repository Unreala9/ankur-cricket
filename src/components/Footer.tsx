import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className=" rounded-full flex items-center justify-center  gap-4">
                <img
                  src="/images/image (1).png"
                  alt="logo"
                  className="h-[50px] w-[50px] "
                />
              </div>
              <span className="text-xl font-bold">Ankur Cricket Academy</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              we assure you, give the seed to us, we grow as dence tree for your
              family.
            </p>
            <p className="text-muted-foreground mb-4 max-w-md">
              Nurturing cricket talent with professional coaching, modern
              facilities, and a passion for the game. Join us to unlock your
              cricket potential.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="hidden md:block  ">
            <h3 className="font-semibold text-foreground mb-4  w-full">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/players"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Players
                </Link>
              </li>
              <li>
                <Link
                  to="/coaches"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Coaches
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +91 94074 69553 Ajay Mathuriya ( manager)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@ankurcricket.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Ankur cricket Academy
                  <br />
                  ankur kheel parisar, 6 no bus stop,
                  <br />
                  shivaji nagar,Bhopal
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-around  w-full md:hidden ">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4  w-full">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/players"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Players
                  </Link>
                </li>
                <li>
                  <Link
                    to="/coaches"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    +91 94074 69553 Ajay Mathuriya ( manager)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    info@ankurcricket.com
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    Ankur cricket Academy
                    <br />
                    ankur kheel parisar, 6 no bus stop,
                    <br />
                    shivaji nagar,Bhopal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Ankur Cricket Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
