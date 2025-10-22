import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Lightbulb, Target, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Brand Identity",
    "Web Design",
    "Print Design",
    "UI/UX Design",
    "Typography",
    "Color Theory",
  ];

  const features = [
    {
      icon: Palette,
      title: "Creative Vision",
      description:
        "Transforming ideas into visually compelling designs that resonate with target audiences.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Bringing fresh perspectives and cutting-edge design approaches to every project.",
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description:
        "Designing with purpose to achieve specific business goals and user objectives.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Delivering exceptional results with meticulous attention to detail and craftsmanship.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
    >
      {/* Glowing Background Shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            I&apos;m a passionate graphic designer with over 5 years of
            experience creating impactful visual solutions for brands worldwide.
          </p>
        </div>

        {/* About Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Side */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Crafting Visual Stories That Matter
            </h3>
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <p>
                With a keen eye for detail and a passion for storytelling
                through design, I help businesses communicate their message
                effectively through powerful visual narratives.
              </p>
              <p>
                My approach combines strategic thinking with creative execution,
                ensuring that every design not only looks beautiful but also
                serves a purpose and drives results.
              </p>
              <p>
                From brand identity to digital experiences, I create designs
                that connect with audiences and leave lasting impressions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-orange-400">
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-orange-500/10 text-orange-300 border border-orange-400/20 hover:bg-orange-500/20 transition"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/30">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orange Glow Effects */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 border border-orange-500/20 text-center hover:bg-orange-500/10 transition duration-300 backdrop-blur-lg"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  {feature.title}
                </h4>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
