import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Monitor,
  FileText,
  Smartphone,
  Package,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Complete brand identity solutions including logo design, color palettes, typography, and brand guidelines.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Schemes",
        "Typography",
      ],
      price: "Starting at $200",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description:
        "Modern, responsive website designs that provide exceptional user experiences across all devices.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Prototyping",
        "User Testing",
      ],
      price: "Starting at $250",
    },
    {
      icon: FileText,
      title: "Print Design",
      description:
        "High-quality print materials including brochures, flyers, business cards, and marketing collateral.",
      features: [
        "Brochures",
        "Business Cards",
        "Posters",
        "Marketing Materials",
      ],
      price: "Starting at $20",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Intuitive mobile app interfaces designed for optimal user engagement and conversion.",
      features: ["iOS Design", "Android Design", "User Flows", "Prototyping"],
      price: "Starting at $150",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "Eye-catching packaging solutions that stand out on shelves and communicate brand values.",
      features: [
        "Product Packaging",
        "Label Design",
        "Box Design",
        "3D Mockups",
      ],
      price: "Starting at $200",
    },
    {
      icon: Users,
      title: "Consultation & Strategy",
      description:
        "Design consultation and strategic planning to align your visual identity with business goals.",
      features: [
        "Design Audit",
        "Strategy Planning",
        "Brand Positioning",
        "Market Research",
      ],
      price: "Starting at $20/hour",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
    >
      {/* Decorative glowing orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I offer comprehensive design services to help your brand stand out
            and connect with your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-blue-900/30 border border-orange-400/20 backdrop-blur-lg hover:bg-orange-500/10 hover:border-orange-400/40 transition-all duration-300 group"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-orange-500/30">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-orange-400">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-blue-100 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-blue-100"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-2xl font-bold text-orange-400 mb-6">
                  {service.price}
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6">
            Need a custom solution? Let&apos;s discuss your specific
            requirements.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white transition"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
