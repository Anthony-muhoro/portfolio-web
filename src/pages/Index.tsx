import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome!",
      description: "Thanks for visiting my portfolio.",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;