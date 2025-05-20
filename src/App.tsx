// import { useEffect, useState } from "react";
import "./app.scss";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
// import getRepositories from "./services/getProjects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface ProjectData {
//   name: string;
//   html_url: string;
//   formattedDescription: string[];
//   lorem: string[];
// }

function App() {
  // const [projectData, setProjectData] = useState<ProjectData | null>(null);

  function notify() {
    toast.success("e-mail enviado com sucesso :)");
  }

  // useEffect(() => {
  //   const fetchProjectData = async () => {
  //     try {
  //       const { name, html_url, description } = await getRepositories();
  //       const formattedDescription = description.split(". ");
  //       const lorem = [
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //         "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //         "Ut enim ad minim veniam itaque maxime quaerat iusto vero facilis non fuga earum assumenda..",
  //       ];

  //       const data: ProjectData = {
  //         name,
  //         html_url,
  //         formattedDescription,
  //         lorem,
  //       };
  //       setProjectData(data);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.error("Erro ao buscar os repositórios:", error.message);
  //         throw error;
  //       } else {
  //         console.error("Erro desconhecido ao buscar os repositórios:", error);
  //         throw new Error("Erro desconhecido ao buscar os repositórios");
  //       }
  //     }
  //   };

  //   fetchProjectData();
  // }, []);
  // if (!projectData) {
  //   return <div>Carregando...</div>;
  // }

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
          title="Meddfitness"
          description={[
            "Meddfitness – Plataforma de Eventos Fitness",
            "Site para divulgação e venda de ingressos para eventos fitness, com páginas de eventos em formato de landing page.",
            "Desenvolvido em React.js com TypeScript (em migração para Next.js), integrado ao Mercado Pago para pagamentos, Supabase para autenticação e Prisma para acesso ao banco de dados.",
            "Os ingressos são gerados em formato QR Code com sistema de validação. Demo disponível",
          ]}
          projectUrl="https://github.com/EricFrota-Dev/meddfitness"
          demo="https://ericfrota-dev.github.io/meddfitness/"
          imgUrl="/portifolio/meddfitness.png"
          techs={["html", "react", "ts", "tailwind"]}
        />
      </section>
      <section id="project2">
        <Project
          reverse={true}
          title="Click Buy"
          description={[
            "Marketplace com Flask e Mercado Pago",
            "Aplicação web estilo Mercado Livre, desenvolvida com Flask (MVC), Supabase e SQLAlchemy.",
            "Permite cadastro de usuários, login com JWT, publicação de produtos, carrinho de compras e pagamentos integrados ao Mercado Pago.",
            "Inclui sistema de busca, painel de vendas e arquitetura modular com boas práticas.",
          ]}
          demo="https://github.com/EricFrota-Dev/ClickBuy"
          imgUrl="/portifolio/clickbuy.png"
          techs={["js", "html", "scss", "node", "react", "mysql"]}
          projectUrl="https://github.com/EricFrota-Dev/ClickBuy"
        />
      </section>

      <section id="project3">
        <Project
          reverse={false}
          title="Coming soon"
          description={[
            "A CRUD de memorização inspirada no aplicativo Anki permite criar decks e cards para o estudo de inglês.",
            "Personalize seus cards adicionando palavras que deseja memorizar, e o sistema automaticamente monta o card com traduções e significados.",
          ]}
          videoUrl="https://www.youtube.com/watch?v=CJoELXGwm3w"
          projectUrl="https://github.com/EricFrota-Dev/memo"
          techs={["python", "html", "scss", "node", "mysql"]}
        />
      </section>
      <section id="contact">
        <h2 className="more">
          Veja mais projetos no{" "}
          <a href="https://github.com/EricFrota-Dev">
            <span>Git.</span>
          </a>
        </h2>
        <Footer notify={notify} />
      </section>
    </>
  );
}

export default App;
