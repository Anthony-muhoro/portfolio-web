import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const projects = [
  {
    title: "Project One",
    description: "A modern Dashboard built with React and Node.js",
    tags: ["React", "Node.js", "TypeScript"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "E-commerce Website",
    description: "Mobile-first e-commerce platform",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Medical Web App",
    description: "Real-time collaboration tool",
    tags: ["React", "Socket.io", "Express"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/username/project3",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project4.com",
    githubUrl: "https://github.com/username/project4",
  },
  {
    title: "Task Management App",
    description: "Kanban-style task management tool",
    tags: ["React", "Firebase", "Material UI"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project5.com",
    githubUrl: "https://github.com/username/project5",
  },
  {
    title: "Blog Platform",
    description: "Markdown-based blog platform",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project6.com",
    githubUrl: "https://github.com/username/project6",
  },
  {
    title: "AI Chatbot",
    description: "AI-powered chatbot for customer support",
    tags: ["Python", "TensorFlow", "Flask"],
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    liveUrl: "https://project7.com",
    githubUrl: "https://github.com/username/project7",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Moving Blue Light Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: "100vw", y: "100vh" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground mb-2 block">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in building modern web applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="hover-card overflow-hidden bg-background/50 backdrop-blur-md relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="w-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Preview
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Shadcn Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className={currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  Previous
                </Button>
              </PaginationItem>
              <PaginationItem>
                <span className="text-sm">
                  Page {currentPage + 1} of {totalPages}
                </span>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                  className={currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  Next
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Projects;