import { motion } from "framer-motion";
import "./style.scss";
import ReactPlayer from "react-player";
import {
  animations,
  scrollAnimation,
} from "../../assets/animations/animations";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ProjectProps {
  reverse: boolean;
  title: string;
  videoUrl: string;
  description: string[];
  techs: string[];
  projectUrl: string;
}
interface TechLogo {
  src: string;
  alt: string;
}

const techLogos: { [key: string]: TechLogo } = {
  js: { src: "/js-logo.svg", alt: "js" },
  html: { src: "html-logo.svg", alt: "html" },
  css: { src: "css-logo.svg", alt: "css" },
  node: { src: "node-logo.svg", alt: "nodejs" },
  ts: { src: "ts-logo.svg", alt: "ts" },
  python: { src: "python-logo.svg", alt: "python" },
  react: { src: "react-logo.svg", alt: "reactjs" },
  tailwind: { src: "tailwind-logo.svg", alt: "tailwind" },
  scss: { src: "scss-logo.svg", alt: "scss" },
  mongodb: { src: "mongodb-logo.svg", alt: "mongodb" },
  mysql: { src: "mysql-logo.svg", alt: "mysql" },
};

const Project = ({
  reverse,
  title,
  videoUrl,
  projectUrl,
  description,
  techs,
}: ProjectProps) => {
  return (
    <div className="project">
      <div className={`content ${reverse ? "reverse" : ""}`}>
        <div className={`background_title ${reverse ? "reverse_title" : ""}`}>
          {title.toUpperCase()}
        </div>
        <motion.div
          className="sample_video"
          variants={scrollAnimation}
          initial={!reverse ? "left_initial" : "right_initial"}
          whileInView={!reverse ? "left_animate" : "right_animate"}>
          <div className="video">
            <ReactPlayer
              className="video_player"
              url={videoUrl}
              width="100%"
              height="100%"
              controls
            />
          </div>
          <a href={projectUrl} target="_blank">
            <motion.span
              className="repo_link"
              variants={animations}
              animate="blink"
              whileHover={{ scale: 1.01 }}>
              Ver Repositório
              <FaLongArrowAltRight />
            </motion.span>
          </a>
        </motion.div>
        <motion.div
          className="project_text"
          variants={scrollAnimation}
          initial={reverse ? "left_initial" : "right_initial"}
          whileInView={reverse ? "left_animate" : "right_animate"}>
          <motion.h1 variants={scrollAnimation}>
            <motion.span variants={animations} animate="blink">
              {title}
            </motion.span>
          </motion.h1>
          {description.map((par) => (
            <motion.p key={par} variants={scrollAnimation}>
              {par.includes(".") ? par : par + "."}
            </motion.p>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="tecnologies"
        variants={scrollAnimation}
        initial="bottom_initial"
        whileInView="bottom_animate">
        {techs.map(
          (tech) =>
            techLogos[tech] && (
              <img
                key={tech}
                src={techLogos[tech].src}
                alt={techLogos[tech].alt}
              />
            )
        )}
      </motion.div>
    </div>
  );
};

export default Project;
