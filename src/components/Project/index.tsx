import { motion } from "framer-motion";
import "./style.scss";
import ReactPlayer from "react-player";
import {
  animations,
  scrollAnimation,
} from "../../assets/animations/animations";
import { FaLongArrowAltRight } from "react-icons/fa";
import Techs, { TechsProps } from "../Techs";

interface ProjectProps {
  reverse: boolean;
  title: string;
  videoUrl: string;
  description: string[];
  techs: (keyof TechsProps)[];
  projectUrl: string;
}

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
        {techs.map((tech) => (
          <Techs key={tech} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
