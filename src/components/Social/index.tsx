import { motion } from "framer-motion";
export const text = "Olá Eric, gostei do seu currículo e gostaria de ";
const Social = () => {
  return (
    <>
      <a
        href={`https://wa.me/5517992585165?text=${encodeURIComponent(text)}`}
        target="_blank">
        <motion.img
          whileHover={{ scale: 1.02, opacity: 1 }}
          src="/portifolio/whatsapp-logo.svg"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/eric-alves-frota-310731266/"
        target="_blank">
        <motion.img
          whileHover={{ scale: 1.02, opacity: 1 }}
          src="/portifolio/linkedin-logo.svg"
        />
      </a>
      <a href="https://github.com/EricFrota-Dev" target="_blank">
        <motion.img
          whileHover={{ scale: 1.02, opacity: 1 }}
          src="/portifolio/github-logo.svg"
        />
      </a>
    </>
  );
};

export default Social;
