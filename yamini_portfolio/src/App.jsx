import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const App = () => (
  <div className="p-5 max-w-4xl mx-auto">
    <div className="text-center">
      <img src="/images/profile.jpg" alt="Yamini P.S" className="rounded-full mx-auto w-40 h-40 shadow-lg" />
      <h1 className="text-4xl font-bold mt-4">YAMINI P.S</h1>
      <p className="text-lg mt-2">Aspiring Software Engineer | Python | MySQL | Django</p>
      <Button className="mt-4" asChild>
        <a href="#contact">Contact Me</a>
      </Button>
    </div>
    
    <Card className="p-5 mt-5">
      <CardContent>
        <h2 className="text-2xl font-bold">About Me</h2>
        <img src="/images/about.jpg" alt="About Me" className="w-full h-40 object-cover rounded-lg mt-2" />
        <p className="mt-2">Aspiring developer skilled in Python, MySQL, eager to build innovative solutions and grow with a dynamic organization.</p>
      </CardContent>
    </Card>
    
    <Card className="p-5 mt-5">
      <CardContent>
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <img src="/images/skills.jpg" alt="Skills" className="w-full h-40 object-cover rounded-lg mt-2" />
        <ul className="list-disc ml-5 mt-2">
          <li>Python</li>
          <li>MySQL</li>
          <li>Django</li>
          <li>Git</li>
          <li>HTML, CSS</li>
        </ul>
      </CardContent>
    </Card>
    
    <Card className="p-5 mt-5">
      <CardContent>
        <h2 className="text-2xl font-bold">Projects</h2>
        <img src="/images/projects.jpg" alt="Projects" className="w-full h-40 object-cover rounded-lg mt-2" />
        <p className="mt-2">Online Examination Portal</p>
        <ul className="list-disc ml-5">
          <li>Created an exam portal with Django for instant results.</li>
          <li>Designed a responsive UI using HTML and CSS.</li>
          <li>Utilized MySQL for secure data management.</li>
        </ul>
      </CardContent>
    </Card>
    
    <Card className="p-5 mt-5">
      <CardContent>
        <h2 className="text-2xl font-bold">Internships</h2>
        <img src="/images/internships.jpg" alt="Internships" className="w-full h-40 object-cover rounded-lg mt-2" />
        <ul className="list-disc ml-5 mt-2">
          <li>INTERNPE - Web Development (HTML, CSS)</li>
          <li>REDBACK SOLUTIONS - Web Development (Java, MySQL, HTML, CSS)</li>
          <li>TECHNOHACKS - Web Development (Login & Registration Forms)</li>
        </ul>
      </CardContent>
    </Card>
    
    <Card className="p-5 mt-5" id="contact">
      <CardContent>
        <h2 className="text-2xl font-bold">Contact</h2>
        <img src="/images/contact.jpg" alt="Contact" className="w-full h-40 object-cover rounded-lg mt-2" />
        <p>Email: <a href="mailto:yaminips01@gmail.com">yaminips01@gmail.com</a></p>
        <p>Phone: +91 9042444246</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yaminisrinivasan/" target="_blank" className="text-blue-500">Profile</a></p>
      </CardContent>
    </Card>
  </div>
);

export default App;
