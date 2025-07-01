import React, { useState } from 'react';
import { Briefcase, Gavel, Users, Mail, Phone, MapPin, Menu, X, ChevronRight, Star, Globe } from 'lucide-react';

// Logo Image URL - using a placeholder for now.
// You can replace this with your actual logo image URL once it's hosted.
const LOGO_URL = "https://placehold.co/150x50/000000/FFFFFF?text=MJM+Advocates+Logo"; // Black background, white text

// Main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img src={LOGO_URL} alt="MJM Advocates Logo" className="h-10 w-auto" />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition duration-300">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition duration-300">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-gray-900 transition duration-300">Why Choose Us</a>
            <a href="#collaborations" className="text-gray-700 hover:text-gray-900 transition duration-300">Collaborations</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 py-2 shadow-lg rounded-md">
            <a href="#home" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
            <a href="#services" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
            <a href="#why-us" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Why Choose Us</a>
            <a href="#collaborations" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Collaborations</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden rounded-b-lg shadow-lg">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/000000/FFFFFF?text=Law+Firm+Background")' }}></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Your Trusted Legal Partner in Kenya
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
            MJM Advocates provides seamless legal solutions for American clients navigating the Kenyan legal landscape.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-400"
          >
            Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About MJM Advocates</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MJM Advocates is a distinguished law firm based in Kenya, dedicated to providing exceptional legal services to a diverse clientele, with a specialized focus on international clients, particularly those from the United States. We understand the unique challenges and opportunities that arise when conducting business or managing personal affairs across borders.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our proprietor is a highly experienced Kenyan advocate with a profound understanding of both local and international legal frameworks. With years of practice and a proven track record, they bring a wealth of expertise to every case, ensuring our clients receive robust, strategic, and effective legal representation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We pride ourselves on our commitment to integrity, professionalism, and client satisfaction, striving to achieve the best possible outcomes for those we serve.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://placehold.co/500x350/E0E0E0/333333?text=MJM+Advocates+Office"
              alt="MJM Advocates Office"
              className="rounded-xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Legal Services in Kenya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Briefcase className="h-10 w-10 text-gray-700" />}
              title="Corporate & Commercial Law"
              description="Assisting with business formation, contracts, mergers & acquisitions, and regulatory compliance for foreign investors."
            />
            <ServiceCard
              icon={<Gavel className="h-10 w-10 text-gray-700" />}
              title="Dispute Resolution & Litigation"
              description="Representing clients in civil and commercial disputes, arbitration, and mediation in Kenyan courts."
            />
            <ServiceCard
              icon={<MapPin className="h-10 w-10 text-gray-700" />}
              title="Property & Real Estate Law"
              description="Guidance on property acquisition, leases, land disputes, and real estate development for foreign nationals."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-gray-700" />}
              title="Immigration Law"
              description="Advising on visas, work permits, residency, and citizenship matters for Americans moving to or working in Kenya."
            />
            <ServiceCard
              icon={<Briefcase className="h-10 w-10 text-gray-700" />}
              title="Intellectual Property"
              description="Protecting trademarks, copyrights, patents, and industrial designs in Kenya for international businesses."
            />
            <ServiceCard
              icon={<Gavel className="h-10 w-10 text-gray-700" />}
              title="Family Law"
              description="Handling cross-border family matters including divorce, child custody, and adoption."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose MJM Advocates?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <WhyUsCard
              icon={<Star className="h-10 w-10 text-gray-700" />}
              title="Vast Experience"
              description="Our proprietor's extensive experience in Kenyan law ensures expert guidance and strategic solutions."
            />
            <WhyUsCard
              icon={<Users className="h-10 w-10 text-gray-700" />}
              title="Client-Centric Approach"
              description="We prioritize your needs, offering personalized attention and clear communication throughout your legal journey."
            />
            <WhyUsCard
              icon={<Gavel className="h-10 w-10 text-gray-700" />}
              title="Cross-Border Expertise"
              description="Specialized knowledge in handling legal matters for American clients in Kenya, bridging legal systems seamlessly."
            />
            <WhyUsCard
              icon={<Briefcase className="h-10 w-10 text-gray-700" />}
              title="Integrity & Trust"
              description="Committed to the highest ethical standards, ensuring transparent and trustworthy legal representation."
            />
          </div>
        </div>
      </section>

      {/* International Collaborations Section */}
      <section id="collaborations" className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">International Collaborations</h2>
          <Globe className="h-16 w-16 text-gray-700 mx-auto mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            MJM Advocates actively collaborates with law firms worldwide, serving as your reliable local counsel in Kenya. If your firm requires expert legal representation or assistance for your clients' matters within the Kenyan jurisdiction, we are your trusted partner. We offer seamless cooperation, ensuring your clients receive the highest standard of legal support while maintaining clear communication with your firm.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Partner with us to extend your global reach and provide comprehensive legal solutions to your international clientele.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center mt-8 bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-black transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Discuss Collaboration <ChevronRight className="ml-2 h-5 w-5 text-white" />
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white rounded-lg shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8 opacity-90">
              Have a legal query or need assistance in Kenya? Contact MJM Advocates today. We are ready to provide expert advice and representation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-gray-300" />
                <a href="mailto:info@mjmadvocates.com" className="text-lg hover:underline">info@mjmadvocates.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-gray-300" />
                <a href="tel:+254712345678" className="text-lg hover:underline">+254 712 345 678</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-gray-300 mt-1" />
                <p className="text-lg">
                  MJM House, <br />
                  Advocates Way, Upper Hill, <br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-black text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 rounded-t-lg shadow-inner">
        <div className="container mx-auto text-center px-4">
          <p className="text-lg mb-4">&copy; {new Date().getFullYear()} MJM Advocates. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#privacy" className="hover:text-gray-200 transition duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-200 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center mb-4 text-gray-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

// Why Choose Us Card Component
const WhyUsCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default App;