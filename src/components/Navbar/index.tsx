import { motion } from "framer-motion";
import "./style.scss";
import Sidebar from "../Sidebar";
import Social from "../Social";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="background" />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Eric Dev
        </motion.span>
        <div className="social">
          <Social />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
