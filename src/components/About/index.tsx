import { motion } from "framer-motion";
import "./style.scss";
import {
  scrollAnimation,
  animations,
} from "../../assets/animations/animations";

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
            <img src="/js-logo.svg" alt="js" />
            <img src="html-logo.svg" alt="html" />
            <img src="css-logo.svg" alt="css" />
            <img src="node-logo.svg" alt="nodejs" />
            <img src="ts-logo.svg" alt="ts" />
            <img src="python-logo.svg" alt="python" />
            <img src="react-logo.svg" alt="reactjs" />
            <img src="tailwind-logo.svg" alt="tailwind" />
            <img src="scss-logo.svg" alt="scss" />
            <img src="mongodb-logo.svg" alt="mongodb" />
            <img src="mysql-logo.svg" alt="mysql" />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              commodi iusto reiciendis perferendis voluptatem alias, excepturi
              qui consequatur? Necessitatibus, animi pariatur quos quam dolore
              quae error dolor reprehenderit illo exercitationem! <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus aut minima quo id fugiat temporibus dolores quam quidem
              accusantium suscipit?
              <br />
              <br />
              Dignissimos odio, asperiores atque tenetur distinctio repudiandae.
              Laudantium, repellat quam!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
