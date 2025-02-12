import React from 'react';
import {
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Award,
  Star,
  Code,
  Database,
  Cloud,
  Monitor,
  Settings,
  Layout,
  BookOpen,
  Users
} from 'lucide-react';

// Simple Card components since we don't have shadcn/ui
const Card = ({ className = "", children }) => (
  <div className={`rounded-lg   border dark:border-none bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);
const HalfCard = ({ className = "", children }) => (
  <div className={`rounded-lg w-full md:w-1/2  border dark:border-none bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

// Simple Badge component
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors
                    bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 
                    dark:hover:bg-purple-900/50 text-purple-900 dark:text-purple-100 ${className}`}>
    {children}
  </span>
);
const resumeData = {
  personalInfo: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123-456-7890",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    location: "New York, USA"
  },
  summary: "Motivated and detail-oriented IT student with strong knowledge of programming, software development, and troubleshooting. Passionate about technology and eager to apply academic knowledge in a practical setting.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "XYZ University",
    location: "New York",
    graduation: "May 2026",
    courses: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Software Engineering",
      "Database Management"
    ]
  },
  skills: {
    programming: ["Python", "Java", "JavaScript", "C++"],
    webDev: ["HTML", "CSS", "React.js", "Node.js"],
    databases: ["MySQL", "MongoDB"],
    cloudDevOps: ["AWS", "Docker", "Git/GitHub"],
    os: ["Windows", "Linux"],
    tools: ["VS Code", "Postman", "JIRA"]
  },
  projects: [
    {
      title: "E-Commerce Website",
      details: [
        "Developed a fully functional e-commerce website using React.js, Node.js, and MongoDB",
        "Implemented authentication, product search, and payment integration",
        "Deployed on AWS with CI/CD pipelines"
      ]
    },
    {
      title: "Library Management System",
      details: [
        "Designed a web-based system to manage book inventory and user records",
        "Used Python (Django) for the backend and PostgreSQL as the database",
        "Enhanced user experience with a responsive UI using Bootstrap"
      ]
    }
  ],
  experience: [
    {
      title: "Software Development Intern",
      company: "ABC Tech Solutions",
      location: "New York",
      period: "Summer 2024",
      achievements: [
        "Assisted in developing an internal web application for task management",
        "Wrote and optimized SQL queries to improve database efficiency",
        "Collaborated with senior developers to debug and enhance features"
      ]
    }
  ],
  certifications: [
    "AWS Certified Cloud Practitioner (2024)",
    "Google IT Support Professional Certificate (2023)"
  ],
  extracurricular: [
    "Member, XYZ University Coding Club",
    "Participated in Hackathons and built AI-based applications",
    "Volunteer IT Support at local community center"
  ]
};

const sectionIcons = {
  summary: BookOpen,
  skills: Code,
  projects: Layout,
  experience: Briefcase,
  education: GraduationCap,
  certifications: Award,
  extracurricular: Users,
  softSkills: Star
};

const skillCategoryIcons = {
  programming: Code,
  databases: Database,
  cloudDevOps: Cloud,
  os: Monitor,
  tools: Settings,
  webDev: Layout
};

const SectionIcon = ({ name, className }) => {
  const IconComponent = sectionIcons[name] || Star;
  return <IconComponent className={className} />;
};

const ResumeDashboard = () => {
  const renderSkillBadges = (skills) => (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge 
          key={skill} 
          variant="secondary"
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 
                     dark:hover:bg-purple-900/50 text-purple-900 dark:text-purple-100
                     transition-all duration-300 hover:scale-105"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );

  const renderSection = (title, content, icon) => (
    <Card className="mb-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center space-x-2">
        <SectionIcon name={icon} className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <CardTitle className="bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen dark:bg-gray-900 p-8">
      {/* Header Section */}
      <div className='w-full md:flex gap-6'>
      <HalfCard className="mb-6 bg-white dark:bg-gray-800 shadow-lg">
        <CardContent className="pt-6">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 
                          bg-clip-text text-transparent">
              {resumeData.personalInfo.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <a href={`mailto:${resumeData.personalInfo.email}`} 
                 className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{resumeData.personalInfo.email}</span>
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{resumeData.personalInfo.phone}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{resumeData.personalInfo.location}</span>
              </span>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href={`https://${resumeData.personalInfo.linkedin}`} 
                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30
                          text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 
                          transition-all duration-300">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={`https://${resumeData.personalInfo.github}`} 
                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700
                          text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 
                          transition-all duration-300">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </CardContent>
      </HalfCard>

      {/* Summary Section */}
      <HalfCard>
      {renderSection("Professional Summary", 
        <p className=" text-gray-700 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>,
        "summary"
      )}
      </HalfCard>
      </div>

      {/* Skills Section */}
      {renderSection("Technical Skills",
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className="space-y-2">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 capitalize flex items-center gap-2">
                {skillCategoryIcons[category] && React.createElement(skillCategoryIcons[category], {
                  className: "w-4 h-4 text-purple-600 dark:text-purple-400"
                })}
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              {renderSkillBadges(skills)}
            </div>
          ))}
        </div>,
        "skills"
      )}

      {/* Projects Section */}
      {renderSection("Projects",
        <div className="space-y-6">
          {resumeData.projects.map((project) => (
            <div key={project.title} className="border-b border-gray-200  last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 
                           bg-clip-text text-transparent mb-2">
                {project.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>,
        "projects"
      )}

      {/* Experience Section */}
      {renderSection("Experience",
        resumeData.experience.map((exp) => (
          <div key={exp.title} className="mb-6 last:mb-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 
                             bg-clip-text text-transparent">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company} - {exp.location}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {exp.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )),
        "experience"
      )}

      {/* Education Section */}
      {renderSection("Education",
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
            <div>
              <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 
                           bg-clip-text text-transparent">
                {resumeData.education.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {resumeData.education.school} - {resumeData.education.location}
              </p>
            </div>
            <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
              Expected: {resumeData.education.graduation}
            </span>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework:</p>
            {renderSkillBadges(resumeData.education.courses)}
          </div>
        </div>,
        "education"
      )}

      {/* Additional Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        {renderSection("Certifications",
          <ul className="space-y-2">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <Award className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>,
          "certifications"
        )}

        {/* Extracurricular Activities */}
        {renderSection("Extracurricular Activities",
          <ul className="space-y-2">
            {resumeData.extracurricular.map((activity, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <Users className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>,
          "extracurricular"
        )}
      </div>
    </div>
  );
};

export default ResumeDashboard;