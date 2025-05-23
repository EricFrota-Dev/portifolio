import Button from "../Buttons/Button";
import "./style.scss";
import ArrowButton from "../Buttons/ArrowButton";
import { MdOutlineWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import {
  animations,
  scrollAnimation,
} from "../../assets/animations/animations";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="content">
          <motion.div
            className="text_container"
            variants={scrollAnimation}
            initial="left_initial"
            whileInView="left_animate">
            <div className="focus_text">
              <motion.div
                variants={animations}
                whileInView="hello"
                style={{ transformOrigin: "left" }}>
                <MdOutlineWavingHand className="hello_icon" />
              </motion.div>
              <motion.h2 variants={scrollAnimation}>Oi</motion.h2>
              <motion.h1 variants={scrollAnimation}>eu sou o Eric</motion.h1>
              <motion.h3 variants={scrollAnimation}>
                um{" "}
                <motion.span variants={animations} whileInView="blink">
                  fullstack
                </motion.span>{" "}
                developer.
              </motion.h3>
            </div>
            <motion.div className="objectives" variants={scrollAnimation}>
              <p>
                Apaixonado por transformar ideias em soluções digitais
                eficientes e inovadoras.
                <p>
                  Com foco em desenvolvimento tanto no front-end quanto no
                  back-end, meu objetivo é criar aplicações robustas, escaláveis
                  e intuitivas que proporcionem uma excelente experiência ao
                  usuário.
                </p>
              </p>
            </motion.div>
            <motion.div
              className="buttons_container"
              variants={scrollAnimation}>
              <a
                onClick={() =>
                  document.getElementById("projects")!.scrollIntoView()
                }>
                <Button title="Ver Projetos" model="default_button"></Button>
              </a>
              <a
                onClick={() =>
                  document.getElementById("contact")!.scrollIntoView()
                }>
                <Button title="Contate-me" model="alternative_button"></Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="image_container"
            variants={scrollAnimation}
            initial="bottom_initial"
            whileInView="bottom_animate">
            <motion.img
              src="/portifolio/minha-foto-2.png"
              alt="minha foto"
              variants={scrollAnimation}
            />
            <h3>Sobre mim</h3>
            <a
              onClick={() =>
                document.getElementById("about")!.scrollIntoView()
              }>
              <motion.div
                className="icon_container"
                variants={animations}
                whileInView="scroll">
                <ArrowButton direction="down" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
