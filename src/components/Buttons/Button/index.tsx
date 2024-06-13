import { motion } from "framer-motion";
import "./style.scss";
import { RiArrowRightWideFill } from "react-icons/ri";

interface ButtonProps {
  title: string;
  model: string;
}

const Button = ({ title, model }: ButtonProps) => {
  return (
    <motion.button
      className={model}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.96 }}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {
          scale: 1.02,
          opacity: 0.9,
        },
      }}>
      <motion.div
        className="btn_bg"
        transition={{ duration: 0.5 }}
        variants={{
          initial: { translateX: 180 },
          hover: {
            translateX: 0,
          },
        }}
      />
      <motion.span>
        <h1>{title}</h1>
        {model === "alternative_button" && (
          <RiArrowRightWideFill className="btn_icon" />
        )}
      </motion.span>
    </motion.button>
  );
};

export default Button;
