import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const education = [
    {
      title: "B.Tech in CSE (AIML)",
      place: "JSS Academy of Technical Education, Noida",
      duration: "2022 – 2026",
      description:
        "Specialized in Computer science (Artificial Intelligence & Machine Learning). Core Coursework: Software Engineering, DSA, DBMS, OS, Computer Networks. CGPA: 8.702",
    },
    {
      title: "Senior Secondary",
      place: "St. Peter's School",
      duration: "2020-2021",
      description: "PCM with Computer Science. Scored 95.5%.",
    },
    {
      title: "High School",
      place: "St. Peter's School",
      duration: "2018-2019",
      description: "Scored 93.6%.",
    },
  ];

  const experience = [
    {
      title: "Full Stack Intern",
      place: "Vivada Tech (Remote)",
      duration: "June 2024",
      description:
        "Implemented 4+ responsive UI modules, integrated REST APIs to improve load times by 20%, and collaborated with cross-functional teams in Agile sprints.",
    },
    {
      title: "Google Girl Hackathon 2024",
      place: "Google",
      duration: "2024",
      description:
        "Explored AI, LLMs, and full-stack development in cohort sessions while building innovative problem-solving approaches.",
    },
    {
      title: "Web Developer Lead",
      place: "Microsoft Mobile Innovation Lab (College Club)",
      duration: "2023 – Present",
      description:
        "Leading workshops, mentoring peers, and building full-stack projects with React, Node.js, and MongoDB while organizing flagship events like De-Encode, Code-in-Pair, and Treasuro.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#060606] text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="text-blue-500"> My </span>
        Education & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-400" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-[#111] border border-gray-800 h-full flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{edu.title}</CardTitle>
                  <CardDescription>{edu.place}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-sm text-gray-400">{edu.duration}</p>
                  <p className="text-sm mt-2">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-green-400" /> Experience
          </h3>
          <div className="space-y-6">
            {experience.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-[#111] border border-gray-800 h-full flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{edu.title}</CardTitle>
                  <CardDescription>{edu.place}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-sm text-gray-400">{edu.duration}</p>
                  <p className="text-sm mt-2">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
