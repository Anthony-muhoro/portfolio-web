import { motion } from "framer-motion";
import { Code2, Layout, Server, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications using the latest technologies",
    icon: Layout,
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description: "Developing robust and scalable backend services and APIs",
    icon: Server,
  },
  {
    title: "Custom Solutions",
    description: "Tailored software solutions to meet your specific needs",
    icon: Code2,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground mb-2 block">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to meet your development needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-card h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;