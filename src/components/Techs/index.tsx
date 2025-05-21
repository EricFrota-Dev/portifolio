import { motion } from "framer-motion";
import "./style.scss";

interface TechProps {
  tech: keyof TechsProps;
}

export interface TechsProps {
  js: string;
  html: string;
  scss: string;
  node: string;
  react: string;
  mysql: string;
  css: string;
  mongodb: string;
  python: string;
  ts: string;
  tailwind: string;
  Flask: string;
  postgres: string;
  prisma: string;
}

const techs: TechsProps = {
  js: "java script",
  html: "html",
  scss: "scss",
  node: "node.js",
  react: "react.js",
  mysql: "mysql",
  css: "css",
  mongodb: "mongo db",
  python: "python",
  ts: "type script",
  tailwind: "tailwind",
  Flask: "Flask",
  postgres: "postgres",
  prisma: "prisma",
};

const Index = ({ tech }: TechProps) => {
  return (
    <div className="techs">
      <img src={`/portifolio/${tech}-logo.svg`} alt={techs[tech]} />
      <motion.h1 initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
        {techs[tech]}
      </motion.h1>
    </div>
  );
};

export default Index;
