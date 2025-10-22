"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "365biloli@gmail.com",
      description: "Send me an email anytime!",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+254 719 123 456",
      description: "Call me for urgent projects",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "NAIROBI, KENYA",
      description: "Available for local meetings",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let&apos;s
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-blue-900/40 border border-blue-800 backdrop-blur-sm hover:border-orange-500 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-orange-400 font-medium mb-1">
                        {info.info}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-blue-800 to-orange-600 text-white shadow-lg shadow-orange-600/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                <p className="mb-4 opacity-90">
                  I typically respond to all inquiries within 24 hours.
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-blue-900/50 border border-blue-800 shadow-lg shadow-blue-900/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-500">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-1 bg-blue-950/60 border-blue-800 text-white placeholder-gray-400 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1 bg-blue-950/60 border-blue-800 text-white placeholder-gray-400 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="mt-1 bg-blue-950/60 border-blue-800 text-white placeholder-gray-400 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="mt-1 bg-blue-950/60 border-blue-800 text-white placeholder-gray-400 focus:border-orange-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-800 to-orange-600 hover:from-blue-900 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/30"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
