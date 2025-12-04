import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Scale, Users, FileText, ArrowRight } from "lucide-react";

// --- ASSET PLACEHOLDERS ---
// Replace these with your actual imports like: import LOGO from './assets/logo.png';
const LOGO_URL = "https://placehold.co/200x50?text=MjM+Advocates";
const HERO_IMAGE = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000";
const OFFICE_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000";

// --- UTILITY COMPONENTS ---

// Automatically scrolls to top when changing pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    <div className="w-24 h-1 bg-blue-700 mx-auto my-4"></div>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

// --- SHARED LAYOUT COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Firm", path: "/about" },
    { name: "Practice Areas", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={LOGO_URL} alt="MjM Advocates" className="h-10 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  isActive(link.path) ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:text-blue-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isActive(link.path) ? "bg-blue-50 text-blue-700 font-bold" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
      <div>
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Scale className="text-blue-400" /> MjM Advocates
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          A corporate boutique law firm delivering seamless, strategic, and future-ready legal solutions for complex transactions and litigation.
        </p>
      </div>
      
      <div>
        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Practice Areas</Link></li>
          <li><Link to="/team" className="hover:text-blue-400">Our Attorneys</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Careers</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="mt-1 flex-shrink-0" />
            <span>Off Parklands Road,<br/>13 Crescent – Suite 4, Nairobi</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} />
            <span>+254 712 122 528</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} />
            <span>info@mjmadvocates.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Newsletter</h4>
        <p className="text-slate-400 text-sm mb-4">Subscribe for legal insights and firm news.</p>
        <div className="flex">
          <input type="email" placeholder="Email Address" className="w-full px-3 py-2 text-slate-900 rounded-l focus:outline-none" />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">OK</button>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} MjM Advocates. All Rights Reserved. | Privacy Policy
    </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="relative h-screen flex items-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div> {/* Overlay */}
      </div>
      
      <div className="container mx-auto px-6 z-10 relative mt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-blue-700 px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-sm">
            Excellence in Law
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Strategic Legal <br /> <span className="text-blue-400">Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            We specialize in cutting-edge corporate commercial transactions and complex litigation — delivering results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-bold text-center transition">
              Request Consultation
            </Link>
            <Link to="/services" className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded font-bold text-center transition">
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Intro Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-blue-700 font-bold uppercase tracking-wide mb-2">Who We Are</h3>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Corporate Boutique Law Firm Built for the Future.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MjM Advocates brings together deep experience, cross-sector knowledge, and strong government liaison abilities. We don't just interpret the law; we use it to pave the way for your business growth.
            </p>
            <Link to="/about" className="text-blue-700 font-bold flex items-center hover:gap-2 transition-all">
              Read More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-700 mb-2">15+</h4>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-700 mb-2">500+</h4>
              <p className="text-sm text-gray-600">Cases Won</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-700 mb-2">50+</h4>
              <p className="text-sm text-gray-600">Corporate Clients</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-700 mb-2">100%</h4>
              <p className="text-sm text-gray-600">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const About = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <img src={OFFICE_IMAGE} alt="MjM Office" className="rounded-lg shadow-xl w-full h-[500px] object-cover" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <SectionHeader title="Our Story & Mission" />
          <p className="text-gray-700 mb-4 leading-relaxed">
            MjM Advocates was founded with a singular vision: to bridge the gap between traditional legal practice and the modern, fast-paced needs of corporate Kenya.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are results-oriented and client-focused. When you think growth, we are the partner that accelerates your impact — ensuring every detail is meticulously handled and every risk expertly managed. With a wide network and accessible partners, we consistently deliver high-quality outcomes with economy of resources.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 mb-3">Our Core Values</h3>
          <ul className="space-y-2">
            {[
              "Strategic, High-Level Expertise",
              "Government & Regulatory Access",
              "Client-Focused Delivery",
              "Integrity & Confidentiality"
            ].map((val, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <ChevronRight size={16} className="text-blue-600" /> {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const practices = [
    { title: "Corporate & Commercial Law", desc: "Complex structuring, joint ventures, M&A, franchising, IP licensing, and governance." },
    { title: "Commercial Litigation", desc: "Negotiation, mediation, arbitration and trial advocacy for high-stakes disputes." },
    { title: "Banking & Finance", desc: "Project finance, capital markets, derivatives, securitization, and insolvency." },
    { title: "Real Estate", desc: "Acquisitions, financing, development, leasing, and complex land structuring." },
    { title: "Employment & Labour", desc: "Workplace investigations, HR policies, data privacy, and labour litigation." },
    { title: "Tax Compliance", desc: "Kenyan & cross-border tax advisory, regulatory frameworks, and risk mitigation." },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Practice Areas" subtitle="Comprehensive legal solutions tailored for the modern business landscape." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-blue-600 group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <FileText className="text-blue-600 group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const team = [
    { name: "James Mwaura", role: "Managing Partner", bio: "A dynamic legal mind with meticulous attention to detail. His strong government networks and relentless pursuit of perfection ensure robust outcomes." },
    { name: "Peter Maina", role: "Partner", bio: "Head of the Corporate Commercial & Litigation Departments. Combines precision with strategic perspective on major commercial matters." },
    { name: "George Gitau", role: "Partner", bio: "A seasoned tax expert and accountant with deep experience in Kenyan and cross-border taxation and financial structuring." },
    { name: "Joy Karimi", role: "Lead Real Estate", bio: "An experienced real estate, employment and corporate transactions lawyer. Known for excellence in M&A and development transactions." },
    { name: "Josphine Masenge", role: "Litigation", bio: "A commercially aware litigator bridging traditional and modern practice—delivering strategic, client-centered dispute resolution." },
    { name: "Gertrude Maina", role: "Administrator", bio: "The warm and professional first point of contact, ensuring an excellent client experience and strong relationships." },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeader title="Our Team" subtitle="Meet the legal minds dedicated to your success." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-2 bg-blue-700"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-blue-600" />
                  <span className="text-sm font-bold text-blue-600 uppercase">{member.role}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Insights = () => {
  // Mock data for blog posts
  const posts = [
    { title: "The Finance Act 2024: Implications for SMEs", date: "May 15, 2025", category: "Tax Law" },
    { title: "Data Privacy Compliance in Kenya: A Checklist", date: "April 22, 2025", category: "Compliance" },
    { title: "Navigating Employment Contracts in the Gig Economy", date: "March 10, 2025", category: "Labour Law" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Legal Insights" subtitle="Stay updated with the latest legal developments in Kenya." />
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-md cursor-pointer">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
              <h3 className="text-xl font-bold mt-4 mb-2 hover:text-blue-700">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">Read Article <ArrowRight size={14} className="ml-1"/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-6">
      <SectionHeader title="Contact Us" subtitle="Get in touch for a consultation today." />
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        
        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500">
                <option>General Inquiry</option>
                <option>Corporate Law</option>
                <option>Litigation</option>
                <option>Real Estate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500" placeholder="How can we help you?"></textarea>
            </div>
            <button className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Side */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="text-blue-700" /> Visit Us
            </h4>
            <p className="text-gray-600">Off Parklands Road,<br/>13 Crescent – Suite 4,<br/>Nairobi, Kenya</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Phone className="text-blue-700" /> Call Us
            </h4>
            <p className="text-gray-600 text-lg font-bold">+254 712 122 528</p>
            <p className="text-gray-500 text-sm">Mon - Fri: 8:00 AM - 5:00 PM</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Mail className="text-blue-700" /> Email Us
            </h4>
            <p className="text-gray-600">info@mjmadvocates.com</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;