import { useEffect, useState } from "react";
import "./app.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import getRepositories from "./services/getProjects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProjectData {
  name: string;
  html_url: string;
  formattedDescription: string[];
  lorem: string[];
}

function App() {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  function notify() {
    toast.success("e-mail enviado com sucesso :)");
  }

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { name, html_url, description } = await getRepositories();
        const formattedDescription = description.split(". ");
        const lorem = [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          "Ut enim ad minim veniam itaque maxime quaerat iusto vero facilis non fuga earum assumenda..",
        ];

        const data: ProjectData = {
          name,
          html_url,
          formattedDescription,
          lorem,
        };
        setProjectData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Erro ao buscar os repositórios:", error.message);
          throw error;
        } else {
          console.error("Erro desconhecido ao buscar os repositórios:", error);
          throw new Error("Erro desconhecido ao buscar os repositórios");
        }
      }
    };

    fetchProjectData();
  }, []);
  if (!projectData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project
          reverse={false}
          title={projectData.name}
          description={projectData.formattedDescription}
          projectUrl={projectData.html_url}
          videoUrl="https://youtu.be/CJoELXGwm3w"
          techs={["html", "react", "node", "ts", "scss", "mongodb"]}
        />
      </section>
      <section id="project2">
        <Project
          reverse={true}
          title="Coming soon"
          description={projectData.lorem}
          videoUrl=""
          techs={["js", "html", "scss", "node", "react", "mysql"]}
          projectUrl="#"
        />
      </section>
      <section id="project3">
        <Project
          reverse={false}
          title="Coming soon"
          description={projectData.lorem}
          videoUrl=""
          projectUrl="#"
          techs={["python", "html", "scss", "node", "mysql"]}
        />
      </section>
      <section id="contact">
        <Footer notify={notify} />
      </section>
    </>
  );
}

export default App;
