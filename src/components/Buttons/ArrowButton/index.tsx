import { motion } from "framer-motion";
import "./style.scss";
import { RiArrowRightWideFill } from "react-icons/ri";

interface DirectionProps {
  direction: "up" | "down" | "left" | "right";
}
const rotation = {
  up: -90,
  down: 90,
  left: 0,
  right: 180,
};

const ArrowButton = ({ direction }: DirectionProps) => {
  return (
    <motion.button
      className={`${direction} arrow_btn`}
      whileHover="hover"
      initial="initial"
      transition={{ duration: 0.5 }}
      variants={{
        hover: { scale: 1.03 },
        initial: { rotate: rotation[direction] },
      }}>
      <RiArrowRightWideFill className="btn_icon" />
    </motion.button>
  );
};

export default ArrowButton;
