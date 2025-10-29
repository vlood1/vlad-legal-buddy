import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function ScrollLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset - 70;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };

  return (
    <a href={to} onClick={handleClick} className ="hover:text-orange-600 transition pointer">
      {children}
    </a>
  );
}



export default function LegalBuddyLanding() {

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div className="flex flex-col items-center w-full text-grey-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-10 py-6 shadow-sm bg-white">
        <div className="flex items-center gap-3">
      <img src="LEGALBUDDY.png" alt="Legal Buddy Logo" className="w-20 h-20 object-contain" />
      <span className="text-2xl font-semibold text-orange-600">Legal Buddy</span>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <ScrollLink to="#about">About us</ScrollLink>
          <ScrollLink to="#development">Development</ScrollLink>
          <ScrollLink to="#faqs">FAQs</ScrollLink>
          <ScrollLink to="#lawyers">Lawyers</ScrollLink>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => window.location.href = '/login'}>Login</Button>
          <Button className="bg-blue-900 text-white hover:bg-blue-800" onClick={() => window.location.href = '/register'}>Registration</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 mt-40 mb-20" id="home">
        <h1 className="text-5xl font-bold mb-4">Legal <span className="text-orange-600">Assistant</span></h1>
        <p className="max-w-2xl text-grey-600 mb-6">
          Instant legal advice using advanced artificial intelligence. Available 24/7, exactly and in accordance with English Law.
        </p>
        <Button className="bg-black text-white px-6 py-3">Get advice</Button>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Card className="p-4 w-80 text-center">
            <CardContent>
              The accuracy of answers is 83% higher than classical systems
            </CardContent>
          </Card>
          <Card className="p-4 w-80 text-center">
            <CardContent>
              Specialisation in the legislation and principles of English Law
            </CardContent>
          </Card>
        </div>

        <img src="legalhand.webp" alt="LegalHumanCrossover" className="mt-10 rounded-2xl shadow-lg w-20/21 object-cover" />
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-grey-50 w-full py-24 flex flex-col items-center">
        <div className="text-center container">
          <h2 className="text-sm uppercase tracking-wide text-orange-500 mb-2">About us</h2>
          <h3 className="text-3xl font-bold mb-4">Modern legal solutions based on artificial intelligence</h3>
          <p className="text-grey-600">
            Legal Buddy provides instant access to legal advice on all areas of English Law. Our AI consultants are trained on the current legislative framework and judicial practice of England and Wales and are constantly improving their knowledge.
          </p>
        </div>

        {/* Advantages */}
        <div className="mt-16 text-center">
          <h2 className="text-sm uppercase tracking-wide text-orange-500 mb-2">Advantages</h2>
          <h3 className="text-3xl font-bold mb-8">Why choose <span className="text-orange-600">Legal Buddy</span></h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="text-center">
                <h4 className="font-semibold mb-2">Deep specialisation</h4>
                <p className="text-sm text-grey-600">24 specialised AI consultants to solve specific legal problems: from corporate law to intellectual property protection.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center">
                <h4 className="font-semibold mb-2">High precision</h4>
                <p className="text-sm text-grey-600">97% accuracy of answers thanks to constant training on the current legal framework and judicial precedent of English Law.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center">
                <h4 className="font-semibold mb-2">An integrated approach</h4>
                <p className="text-sm text-grey-600">Analysis of your situation from all legal aspects to provide the most effective solution under English Law.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="development" className="w-full bg-black text-white py-24 px-8 flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-wide text-orange-500 mb-2 text-center">Development</h2>
        <h3 className="text-3xl font-bold mb-10 text-center">Our <span className="text-orange-600">Progress</span> & Innovations</h3>

        <div className="max-w-4xl text-center">
          <img src="/development.jpg" alt="Development Process" className="rounded-2xl mb-8 mx-auto" />
          <p className="text-grey-300 mb-6">
            Our development process focuses on building a robust, ethical AI legal system aligned with English Law. We are continually enhancing Legal Buddy’s capabilities to interpret statutes, analyse precedents, and provide human-level legal insights.
          </p>
          <ul className="list-disc list-inside text-grey-400 space-y-2 text-left mx-auto w-fit">
            <li>Continuous integration of new legal updates and case law</li>
            <li>24/7 AI model refinement through real-world data</li>
            <li>Partnerships with UK legal professionals for validation</li>
            <li>Full compliance with GDPR and ethical AI standards</li>
          </ul>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="w-full bg-grey-50 py-24 flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-sm uppercase tracking-wide text-orange-500 mb-2 text-center">FAQs</h2>
          <h3 className="text-3xl font-bold mb-10 text-center">Frequently Asked <span className="text-orange-600">Questions</span></h3>

          <div className="space-y-8 text-left">
            <div>
              <h4 className="font-semibold mb-1">Is Legal Buddy a replacement for a lawyer?</h4>
              <p className="text-sm text-grey-500 italic mb-2">— Sarah M., London</p>
              <p className="text-grey-600">No. Legal Buddy provides instant legal insights and helps you understand English Law better, but it does not replace professional legal representation.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Which areas of law does Legal Buddy cover?</h4>
              <p className="text-sm text-grey-500 italic mb-2">— David T., Manchester</p>
              <p className="text-grey-600">Our AI covers key areas including contract, employment, tort, criminal, and property law under English Law.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">How accurate are the AI’s responses?</h4>
              <p className="text-sm text-grey-500 italic mb-2">— Priya S., Birmingham</p>
              <p className="text-grey-600">The system achieves over 90% accuracy in identifying relevant legal principles, thanks to ongoing refinement and training.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Can I use Legal Buddy for case preparation?</h4>
              <p className="text-sm text-grey-500 italic mb-2">— Alex R., Bristol</p>
              <p className="text-grey-600">Yes. It can help summarise legislation, precedents, and arguments to assist in preparing your case effectively.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Is my data secure when using Legal Buddy?</h4>
              <p className="text-sm text-grey-500 italic mb-2">— Emma K., Leeds</p>
              <p className="text-grey-600">Absolutely. Legal Buddy complies fully with GDPR and implements end-to-end encryption to protect user information and query data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section id="lawyers" className="w-full bg-white py-24 flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-wide text-orange-500 mb-2 text-center">Lawyers</h2>
        <h3 className="text-3xl font-bold mb-10 text-center">Choose Your <span className="text-orange-600">Specialist</span></h3>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl">
          {[
            { name: "Property Lawyer", img: "propertylawyer.jpg" },
            { name: "Criminal Lawyer", img: "criminalsmt.png" },
            { name: "Corporate Lawyer", img: "/lawyer3.jpg" },
            { name: "Employment Lawyer", img: "/lawyer4.jpg" },
            { name: "Family Lawyer", img: "/lawyer5.jpg" },
            { name: "Contract Lawyer", img: "/lawyer6.jpg" },
          ].map((lawyer, index) => (
            <Card key={index} className="text-center p-6 flex flex-col items-center shadow-md hover:shadow-lg transition">
              <img src={lawyer.img} alt={lawyer.name} className="w-32 h-32 object-cover rounded-full mb-4" />
              <h4 className="font-semibold text-lg mb-2">{lawyer.name}</h4>
              <Button className="bg-orange-600 text-white hover:bg-orange-500">Start a conversation</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}


