import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground mb-2 block">SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of my technical skills and expertise in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg bg-card hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <Badge variant="secondary">{skill.category}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;