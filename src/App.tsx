import "./app.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import getProjects from "./services/getProjects";

const { name, html_url, description } = await getProjects();

const formattedDescription = description.split(". ");

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  " Ut enim ad minim veniam itaque maxime quaerat iusto vero facilis non fuga earum assumenda..",
];
function App() {
  return (
    <>
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
          title={name}
          description={formattedDescription}
          projectUrl={html_url}
          videoUrl="https://youtu.be/CJoELXGwm3w"
          techs={["html", "react", "node", "ts", "scss", "mongodb"]}
        />
      </section>
      <section id="project2">
        <Project
          reverse={true}
          title="Coming soon"
          description={lorem}
          videoUrl="/"
          techs={["js", "html", "scss", "node", "react", "mysql"]}
          projectUrl="#"
        />
      </section>
      <section id="project3">
        <Project
          reverse={false}
          title="Coming soon"
          description={lorem}
          videoUrl="/"
          projectUrl="#"
          techs={["python", "html", "scss", "node", "mysql"]}
        />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
