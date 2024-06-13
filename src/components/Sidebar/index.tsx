import { FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";
import NavButton from "../Buttons/NavButton";
import "./style.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sidebarAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sections = ["home", "about", "projects", "contact"] as const;
const icons = [
  <FaHome />,
  <FaUser />,
  <FaFolderOpen />,
  <FaEnvelope />,
] as const;

const Sidebar = () => {
  const [select, setSelect] = useState<string>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 500) setSelect(sections[0]);
      else if (scrollPosition >= 500 && scrollPosition < 1500)
        setSelect(sections[1]);
      else if (scrollPosition >= 1500 && scrollPosition < 3685)
        setSelect(sections[2]);
      else {
        setSelect(sections[3]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      <motion.div
        className="sideButtons"
        initial="initial"
        animate="animate"
        variants={sidebarAnimation}>
        {sections.map((section, index) => {
          return (
            <motion.div
              key={section}
              onClick={() => {
                document.getElementById(section)!.scrollIntoView();
                setSelect(section);
              }}
              variants={sidebarAnimation}>
              <NavButton isSelected={select === section} text={section}>
                {icons[index]}
              </NavButton>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Sidebar;
