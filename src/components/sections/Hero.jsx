"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[5rem] 2xl:min-h-[90vh]"
    >
      {/* Dark Blue & Orange Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#172A45] animate-gradient"></div>

      {/* Floating Elements with Orange Accents */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-200 text-orange-900 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                  Emmanuel Biloli
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-orange-300">
                  Graphic Designer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I specialize in transforming ideas into visually stunning designs that 
                resonate with audiences. With a keen eye for detail and a passion for 
                innovation, I deliver results that elevate brands.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 font-semibold group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-orange-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Main Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Emmanuel Biloli - Graphic Designer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Orange Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full opacity-80 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full opacity-80 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Floating Tools */}
                <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-3 animate-float">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-400 rounded"></div>
                </div>
                <div
                  className="absolute bottom-8 -right-8 bg-white rounded-lg shadow-lg p-3 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
