import { motion, useAnimation, Variants } from "framer-motion"; // Import Variants type
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define Variants for Framer Motion
  const flamingTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    flaming: {
      color: ["#ff7e5f", "#feb47b", "#ff7e5f"], // Gradient colors for flaming effect
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror" as const, // Use "mirror" as a literal type
      },
    },
  };

  // Scroll animations
  const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center section-padding relative overflow-hidden"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={scrollVariants}
          className="text-left"
        >
          <motion.span
            variants={flamingTextVariants}
            animate="visible"
            className="text-sm md:text-base text-muted-foreground mb-4 block"
          >
            Anthony Muhoro, Software Engineer
          </motion.span>
          <motion.h1
            variants={flamingTextVariants}
            animate="flaming"
            className="text-4xl md:text-6xl font-bold mb-6 text-blue-800"
          >
            Creating Digital Experiences That Matter
          </motion.h1>
          <motion.p
            variants={flamingTextVariants}
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Passionate about building beautiful, functional, and user-centered
            digital experiences
          </motion.p>
          <motion.div
            variants={scrollVariants}
            className="flex gap-4"
          >
            <Button size="lg" className="rounded-full">
              Call Me
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              +25470101012
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 animate-float">
            <img
              src="https://res.cloudinary.com/dyzssa40e/image/upload/v1739451629/5866255608246815703_hyneja.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full p-4"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;