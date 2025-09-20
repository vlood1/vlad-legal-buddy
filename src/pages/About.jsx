import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We create beautiful, modern web experiences that inspire and delight users around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the power of great design to transform digital experiences. 
                Our mission is to craft beautiful, functional, and accessible web applications 
                that make a positive impact on people's lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project we undertake is an opportunity to push the boundaries of what's 
                possible on the web, combining cutting-edge technology with timeless design principles.
              </p>
            </div>
            <Card className="p-8 bg-gradient-secondary">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Passion Driven</h3>
                <p className="text-muted-foreground">
                  Every line of code, every pixel, every interaction is crafted with love and attention to detail.
                </p>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of technology, constantly exploring new ways to create better experiences.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  Great work happens when talented people come together with a shared vision and mutual respect.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We set high standards for ourselves and never compromise on quality or user experience.
                </p>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's create something amazing together. Reach out and let's start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                Get In Touch
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;