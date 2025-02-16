import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold">YAMINI P.S</h1>
    <p className="text-lg mt-2">Aspiring Software Engineer | Python | MySQL | Django</p>
    <Button className="mt-4" asChild>
      <a href="#contact">Contact Me</a>
    </Button>
  </div>
);

const About = () => (
  <Card className="p-5">
    <CardContent>
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-2">Aspiring developer skilled in Python, MySQL, eager to build innovative solutions and grow with a dynamic organization.</p>
    </CardContent>
  </Card>
);

const Skills = () => (
  <Card className="p-5">
    <CardContent>
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      <ul className="list-disc ml-5 mt-2">
        <li>Python</li>
        <li>MySQL</li>
        <li>Django</li>
        <li>Git</li>
        <li>HTML, CSS</li>
      </ul>
    </CardContent>
  </Card>
);

const Projects = () => (
  <Card className="p-5">
    <CardContent>
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2">Online Examination Portal</p>
      <ul className="list-disc ml-5">
        <li>Created an exam portal with Django for instant results.</li>
        <li>Designed a responsive UI using HTML and CSS.</li>
        <li>Utilized MySQL for secure data management.</li>
      </ul>
    </CardContent>
  </Card>
);

const Internships = () => (
  <Card className="p-5">
    <CardContent>
      <h2 className="text-2xl font-bold">Internships</h2>
      <ul className="list-disc ml-5 mt-2">
        <li>INTERNPE - Web Development (HTML, CSS)</li>
        <li>REDBACK SOLUTIONS - Web Development (Java, MySQL, HTML, CSS)</li>
        <li>TECHNOHACKS - Web Development (Login & Registration Forms)</li>
      </ul>
    </CardContent>
  </Card>
);

const Contact = () => (
  <Card className="p-5">
    <CardContent>
      <h2 className="text-2xl font-bold">Contact</h2>
      <p>Email: <a href="mailto:yaminips01@gmail.com">yaminips01@gmail.com</a></p>
      <p>Phone: +91 9042444246</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/yaminisrinivasan/" target="_blank" className="text-blue-500">Profile</a></p>
    </CardContent>
  </Card>
);

const App = () => (
  <Router>
    <nav className="flex justify-center space-x-5 p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/internships">Internships</Link>
      <Link to="#contact">Contact</Link>
    </nav>
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
      <div id="contact" className="mt-5">
        <Contact />
      </div>
    </div>
  </Router>
);

export default App;
