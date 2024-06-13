import { motion } from "framer-motion";
import "./style.scss";
import {
  scrollAnimation,
  animations,
} from "../../assets/animations/animations";
import Techs, { TechsProps } from "../Techs";

const techs: (keyof TechsProps)[] = [
  "js",
  "html",
  "scss",
  "node",
  "react",
  "mysql",
  "css",
  "mongodb",
  "python",
  "ts",
  "tailwind",
];

const About = () => {
  return (
    <div className="about_section">
      <motion.div
        className="background"
        variants={scrollAnimation}
        initial="bottom_initial"
        whileInView="bottom_animate"
      />
      <div className="line" />
      <div className="content">
        <motion.div
          className="side_left"
          variants={scrollAnimation}
          initial="left_initial"
          whileInView="left_animate">
          <motion.div className="tech" variants={scrollAnimation}>
            {techs.map((tech) => (
              <Techs key={tech} tech={tech} />
            ))}
          </motion.div>
          <motion.h1 variants={scrollAnimation}>
            <motion.span variants={animations} animate="blink">
              TECNOLOGIAS
            </motion.span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="side_right"
          variants={scrollAnimation}
          initial="right_initial"
          whileInView="right_animate">
          <motion.div className="about_text">
            <motion.h1 variants={scrollAnimation}>
              <motion.span variants={animations} animate="blink">
                Sobre mim
              </motion.span>
            </motion.h1>
            <motion.h2 variants={scrollAnimation}>-Eric Alves Frota</motion.h2>
            <motion.p variants={scrollAnimation}>
              Um designer em transição para desenvolvedor Fullstack. Sempre
              adorei desafios e encontrei no desenvolvimento uma nova paixão.
              <p>
                <br />
                Inicialmente, planejava focar apenas no front-end, encantado com
                a criação de interfaces dinâmicas e intuitivas. Porém, ao
                explorar o back-end, fui desafiado de maneiras que nunca
                imaginei e acabei me apaixonando por essa área também.
              </p>
              <p>
                <br />
                Agora, como Fullstack, estou animado para unir minhas
                habilidades de design e desenvolvimento para criar soluções
                completas e
              </p>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
