import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { Stars } from "@react-three/drei";
import profile from "./assets/profile.jpeg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";

import { SiThreedotjs } from "react-icons/si";
<img
  src={profile}
  alt="Simson.A"
  style={{
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 20%",
  }}
/>

function Cube() {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshNormalMaterial />
    </mesh>
  );



  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      
        color="#269e52"
        metalness={1}
        roughness={0}
    
    </mesh>
  );
}

export default function App() {

  const [scroll, setScroll] = useState(0);
 const cursorRef = useRef();

useEffect(() => {
  const moveCursor = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform =
        `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    }
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      setScroll((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleTopButton = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleTopButton);

    return () =>
      window.removeEventListener("scroll", handleTopButton);
  }, []);

  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

useEffect(() => {
  const moveCursor = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };
  

  window.addEventListener("mousemove", moveCursor);

  return () =>
    window.removeEventListener("mousemove", moveCursor);
}, []);
useEffect(() => {
  const handleSectionScroll = () => {
    const sections = ["about", "skills", "projects", "contact"];

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
        }
      }
    });
  };
  
  

  window.addEventListener("scroll", handleSectionScroll);

  return () =>
    window.removeEventListener(
      "scroll",
      handleSectionScroll
    );
}, []);
const [darkMode, setDarkMode] = useState(true);
const [activeSection, setActiveSection] = useState("about");
const [filter, setFilter] = useState("All");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      alert("Failed to Send");
      console.log(error);
    });
};

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#00ff88",
      }}
    >
      
      <TypeAnimation
        sequence={[
          "Welcome to Simson Portfolio",
          1000,
          "",
          500,
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        style={{
          fontSize: "40px",
          color: "#00ff88",
        }}
      />

      <p>Loading Portfolio...</p>
    </div>
  );
}



  return (
    
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: darkMode ? "#111" : "#f5f5f5",
        color: darkMode ? "white" : "#111",
        scrollBehavior: "smooth",
      }}
    >
      <div
  style={{
  position: "fixed",
  transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)`,
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#00ff88",
  pointerEvents: "none",
  zIndex: 9999,
  boxShadow: "0 0 20px #00ff88",
}}
  
></div>
    

      {/* Navigation Bar */}
      <nav></nav>
      
      {/* Navigation Bar */}
      <nav
      
      
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    position: "sticky",
    top: "0",
    zIndex: "1000",

    background: "rgba(17, 17, 17, 0.6)",
    backdropFilter: "blur(15px)",

    borderBottom: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
  }}
>
        <h2 style={{ color: "#00ff88" }}>
  simson
</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a
  href="#about"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
    transition: "0.4s",
cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#00ff88";
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "white";
  }}
>
  About
</a>


          
          <a
  href="#about"
  style={{
    color: activeSection === "about" ? "#00ff88" : "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  About
</a>

<a
  href="#skills"
  style={{
    color: activeSection === "skills" ? "#00ff88" : "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Skills
</a>

<a
  href="#projects"
  style={{
    color: activeSection === "projects" ? "#00ff88" : "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Projects
</a>


<a
  href="#contact"
  style={{
    color: activeSection === "contact" ? "#00ff88" : "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Contact
</a>
        </div>
        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    background: "#00ff88",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
        
      </nav>
      

    {/* Hero Section */}
<div
  style={{
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "30px",
    boxShadow: "0 0 30px rgba(0,255,136,0.1)",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 80px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
  style={{
    position: "absolute",
    top: "-150px",
    left: "-150px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "#00ff88",
    filter: "blur(150px)",
    opacity: 0.15,
  }}
></div>

<div
  style={{
    position: "absolute",
    bottom: "-150px",
    right: "-150px",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "#00ff88",
    filter: "blur(150px)",
    opacity: 0.15,
  }}
></div>

  {/* Left Side */}
  <div
    style={{
      flex: 1,
      minWidth: "350px",
    }}
  >
    <h1
  style={{
    fontSize: "70px",
    lineHeight: "1.1",
    marginBottom: "20px",
    fontWeight: "bold",
  }}
>
  Hi, I'm Simson <br />

  <span style={{ color: "#00ff88" }}>
    <Typewriter
      words={[
        "STUDENT",
        "AI Developer",
        "ML Learner",
        "Web Designer",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>

    <p
      style={{
        maxWidth: "500px",
        color: "#aaa",
        lineHeight: "1.8",
        fontSize: "18px",
      }}
    >
      Building digital experiences that merge
      creativity with technology. Specializing in
      modern web development, AI and Cyber Systems.
    </p>

    <button
      style={{
        marginTop: "30px",
        padding: "15px 35px",
        border: "none",
        borderRadius: "12px",
        background: "#00ff88",
        color: "#000",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        boxShadow: "0 0 20px rgba(0,255,136,0.4)",
      }}
    >
      Let's Connect
    </button>
    <a
  href="/resume.pdf"
  download
  style={{
    marginTop: "20px",
    display: "inline-block",
    padding: "15px 25px",
    background: "transparent",
    border: "2px solid #00ff88",
    color: "#00ff88",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  }}
>
  📄 Download Resume
</a>
<div
  style={{
    display: "flex",
    gap: "25px",
    marginTop: "30px",
    fontSize: "35px",
  }}
>
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#00ff88",
      transition: "0.3s",
    }}
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#00ff88",
      transition: "0.3s",
    }}
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/badboy__simson__07"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#00ff88",
      transition: "0.3s",
    }}
  >
    <FaInstagram />
  </a>
</div>

    {/* Social Icons */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "35px",
        fontSize: "32px",
      }}
    >
    </div>
  </div>

  {/* Right Side */}
  <div
    style={{
      flex: 1,
      minWidth: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        padding: "8px",
        background:
          "linear-gradient(135deg, #00ff88, #00cc66, #00ff88)",
        boxShadow:
          "0 0 30px #00ff88, 0 0 80px rgba(0,255,136,0.5)",
        animation: "float 4s ease-in-out infinite",
        overflow: "hidden",
      }}
    >
      <img
        src={profile}
        alt="Simson"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />
    </div>
  </div>
</div>

      {/* About Section */}
      <motion.div
  id="about"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
        style={{
          padding: "100px 50px",
          textAlign: "center",
        }}
      >
        <h1>About Me</h1>

        <p
  style={{
    fontSize: "20px",
    maxWidth: "500px",
    lineHeight: "1.8",
  }}
>
  Passionate AI & Data Science student building
  AI, Machine Learning and Modern Web Applications.
</p>
      </motion.div>
      
      
   
{/* Skills Section */}
<motion.div
  id="skills"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    padding: "100px 50px",
    textAlign: "center",
  }}
>
  <h1>My Skills</h1>

  <div
  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-10px)";
  e.currentTarget.style.boxShadow = "0 0 25px #00ff88";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow =
    "0 0 10px rgba(255,153,0,0.2)";
}}
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "50px",
    }}
  >
    {[
      { icon: <FaHtml5 size={45} />, name: "HTML" },
      { icon: <FaCss3Alt size={45} />, name: "CSS" },
      { icon: <FaJs size={45} />, name: "JavaScript" },
      { icon: <FaPython size={45} />, name: "Python" },
    ].map((skill, index) => (
      <div
        key={index}
        style={{
          width: "200px",
          height: "160px",
          borderRadius: "20px",
          background: "#1a1a1a",
          padding: "25px",
          borderRadius: "15px",
          backdropFilter: "blur(15px)",
          border: "1px solid #333",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          transition: "0.4s",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(0,255,136,0.2)",
          transition: "0.3s ease",
cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 0 30px #00ff88";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0px)";
          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(0,255,136,0.2)";
        }}
      >
        {skill.icon}
        <h3>{skill.name}</h3>
        
      </div>
    ))}
  </div>
</motion.div>
{/* Experience Section */}
<motion.div
  id="experience"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h1>Experience</h1>

  <div
    style={{
      maxWidth: "700px",
      margin: "40px auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    }}
  >
    <div
      style={{
        background: "#1a1a1a",
        padding: "25px",
        borderRadius: "15px",
        borderLeft: "5px solid #00ff88",
        textAlign: "left",
      }}
    >
      <h2>AI & Data Science Student</h2>
      <p style={{ color: "#00ff88" }}>
        2023 - Present
      </p>
      <p>
        Learning Artificial Intelligence, Machine Learning,
        Web Development and building real-world projects.
      </p>
    </div>

    <div
      style={{
        background: "#1a1a1a",
        padding: "25px",
        borderRadius: "15px",
        borderLeft: "5px solid #00ff88",
        textAlign: "left",
      }}
    >
      <h2>Full Stack Developer</h2>
      <p style={{ color: "#00ff88" }}>
        Personal Projects
      </p>
      <p>
        Developed modern web applications using
        React, MySQL and JavaScript.
      </p>
    </div>
  </div>
</motion.div>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "50px",
  }}
>
  <div
    style={{
      width: "180px",
      padding: "25px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(0,255,136,0.2)",
      boxShadow: "0 0 20px rgba(0,255,136,0.1)",
    }}
  >
    <h1 style={{ color: "#00ff88" }}>10+</h1>
    <p>Projects Completed</p>
  </div>

  <div
    style={{
      width: "180px",
      padding: "25px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(0,255,136,0.2)",
      boxShadow: "0 0 20px rgba(0,255,136,0.1)",
    }}
  >
    <h1 style={{ color: "#00ff88" }}>2+</h1>
    <p>Years Learning</p>
  </div>

  <div
    style={{
      width: "180px",
      padding: "25px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(0,255,136,0.2)",
      boxShadow: "0 0 20px rgba(0,255,136,0.1)",
    }}
  >
    <h1 style={{ color: "#00ff88" }}>5+</h1>
    <p>Technologies</p>
  </div>
</div>

{/* Certificates Section */}
<motion.div
  id="certificates"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h1>Certificates</h1>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
      marginTop: "40px",
    }}
  >
    <div
      style={{
        width: "300px",
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #333",
        boxShadow: "0 0 20px rgba(0,255,136,0.1)",
        transition: "0.3s",
      }}
    >
      <h2>🤖 AI & Machine Learning</h2>
      <p>Coursera / Udemy</p>
      <p style={{ color: "#00ff88" }}>2026</p>
    </div>

    <div
      style={{
        width: "300px",
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #333",
        boxShadow: "0 0 20px rgba(0,255,136,0.1)",
      }}
    >
      <h2>💻 Full Stack Development</h2>
      <p>Infosys Springboard</p>
      <p style={{ color: "#00ff88" }}>2026</p>
    </div>

    <div
      style={{
        width: "300px",
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #333",
        boxShadow: "0 0 20px rgba(0,255,136,0.1)",
      }}
    >
      <h2>🔒 Cyber Security</h2>
      <p>Cisco Networking Academy</p>
      <p style={{ color: "#00ff88" }}>2026</p>
    </div>
  </div>
</motion.div>

{/* Projects Section */}
{/* Projects Section */}
<motion.div
  id="projects"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    padding: "100px 50px",
    textAlign: "center",
  }}
>
  
  <h1 style={{ marginBottom: "50px" }}>Projects</h1>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "50px",
  }}
  >
    {/* Card 1 */}
  {/* Card 1 */}
<div
  style={{
    width: "300px",
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(0,255,136,0.2)",
    boxShadow: "0 8px 20px rgba(0,255,136,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(0,255,136,0.4)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,255,136,0.1)";
  }}
>
  <h2>🚀 3D Portfolio</h2>

  <p style={{ color: "#aaa", marginBottom: "20px" }}>
    Modern Portfolio built using React & Three.js
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "20px",
    }}
  >
    <a
      href="https://free3d.com/"
      target="_blank"
      style={{
        padding: "10px 20px",
        background: "#00ff88",
        color: "#111",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Live Demo
    </a>

    <a
      href="https://github.com/yourusername/project"
      target="_blank"
      style={{
        padding: "10px 20px",
        border: "2px solid #00ff88",
        color: "#00ff88",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      GitHub
    </a>
  </div>
</div>

    {/* Card 2 */}
    <div
  style={{
    width: "300px",
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(0,255,136,0.2)",
    boxShadow: "0 8px 20px rgba(0,255,136,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(0,255,136,0.4)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,255,136,0.1)";
  }}
>
  <h2>🤖 AI Chatbot</h2>

  <p style={{ color: "#aaa", marginBottom: "20px" }}>
    AI-powered chatbot using Python & Machine Learning
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "20px",
    }}
  >
    <a
      href="#"
      style={{
        padding: "10px 20px",
        background: "#00ff88",
        color: "#111",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Live Demo
    </a>

    <a
      href="#"
      style={{
        padding: "10px 20px",
        border: "2px solid #00ff88",
        color: "#00ff88",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      GitHub
    </a>
  </div>
</div>

    {/* Card 3 */}
   <div
  style={{
    width: "300px",
    background: "#1a1a1a",
    padding: "25px",
    borderRadius: "20px",
    border: "1px solid rgba(0,255,136,0.2)",
    boxShadow: "0 8px 20px rgba(0,255,136,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 15px 40px rgba(0,255,136,0.4)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(0,255,136,0.1)";
  }}
>
  <h2>🛒 E-Commerce</h2>

  <p style={{ color: "#aaa", marginBottom: "20px" }}>
    Full-stack e-commerce website using React & MySQL
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "20px",
    }}
  >
    <a
      href="#"
      style={{
        padding: "10px 20px",
        background: "#00ff88",
        color: "#111",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Live Demo
    </a>

    <a
      href="#"
      style={{
        padding: "10px 20px",
        border: "2px solid #00ff88",
        color: "#00ff88",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      GitHub
    </a>
  </div>
</div>
  </div>
</motion.div>
{/* Contact Section */}

<motion.div
  id="contact"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h1
    style={{
      fontSize: "60px",
      marginBottom: "60px",
    }}
  >
    Contact Me
  </h1>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  }}

  >

    {/* Email */}
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(0,255,136,0.3)",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 0 20px rgba(0,255,136,0.2)",
        transition: "0.4s",
      }}
    >
      <h2>📧 Email</h2>
      <p>simson@example.com</p>
    </div>

    {/* Github */}
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(0,255,136,0.3)",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 0 20px rgba(0,255,136,0.2)",
      }}
    >
      <h2>💻 GitHub</h2>
      <p>github.com/simson</p>
    </div>

    {/* Linkedin */}
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(0,255,136,0.3)",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 0 20px rgba(0,255,136,0.2)",
      }}
    >
      <h2>🔗 LinkedIn</h2>
      <p>linkedin.com/in/simson</p>
    </div>

    {/* Phone */}
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(0,255,136,0.3)",
        borderRadius: "20px",
        padding: "35px",
        boxShadow: "0 0 20px rgba(0,255,136,0.2)",
      }}
    >
      <h2>📱 Phone</h2>
      <p>+91 6374082223</p>
    </div>
    
    
    

  </div>
</motion.div>
{/* Footer */}
<footer
  style={{
    marginTop: "100px",
    padding: "40px 20px",
    textAlign: "center",
    borderTop: "1px solid rgba(0,255,136,0.2)",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(10px)",
  }}
>
  <h2 style={{ color: "#00ff88" }}>A. Simson</h2>

  <p style={{ color: "#aaa", margin: "15px 0" }}>
    Full Stack Developer | AI Enthusiast
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      fontSize: "30px",
      marginTop: "20px",
    }}
  >
    <a
      href="https://github.com/yourusername"
      target="_blank"
      style={{ color: "#00ff88" }}
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      style={{ color: "#00ff88" }}
    >
      <FaLinkedin />
    </a>

    <a
      href="https://instagram.com/badboy__simson__07"
      target="_blank"
      style={{ color: "#00ff88" }}
    >
      <FaInstagram />
    </a>
  </div>

  <p style={{ marginTop: "30px", color: "#666" }}>
    © 2026 A. Simson. All Rights Reserved.
  </p>
</footer>

{/* Scroll To Top Button */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  style={{
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#00ff88",
    color: "#111",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(0,255,136,0.5)",
    zIndex: 1000,
  }}
>
  ↑
</button>

</div>

  );
}