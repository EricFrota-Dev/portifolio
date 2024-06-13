import { motion } from "framer-motion";
import "./style.scss";
import { ReactElement } from "react";

interface ButtonProps<ReactElement> {
  isSelected: boolean;
  text: string;
  children: ReactElement;
}

const NavButton = ({
  children,
  text,
  isSelected,
}: ButtonProps<ReactElement>) => {
  console.log(isSelected);
  return (
    <motion.button
      className={`myButton ${isSelected ? "selected" : ""}`}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          width: 40,
        },
        hover: { width: 115, backgroundColor: "#7324bd" },
      }}>
      <motion.span
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}>
        {text}
      </motion.span>
      <i>{children}</i>
    </motion.button>
  );
};

export default NavButton;
