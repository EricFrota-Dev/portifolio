import { FormEvent, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import { text } from "../Social";
import { motion } from "framer-motion";
import { animations } from "../../assets/animations/animations";

type NotifyFunction = () => void;

interface FooterProps {
  notify: NotifyFunction;
}

const Footer = ({ notify }: FooterProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [onError, setOnError] = useState<boolean>(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    setOnError(true);
    if (!name || !email || !message) {
      return;
    } else if (!regex.test(email)) {
      return;
    } else {
      const templateParams = {
        from_name: name,
        message: message,
        email: email,
      };
      emailjs
        .send(
          "service_no0aqkk",
          "template_dgmcrve",
          templateParams,
          "O5DfQtaBmecE__NDF"
        )
        .then(
          (res) => {
            console.log("email enviado", res.status, res.text);
            setName("");
            setEmail("");
            setMessage("");
            setOnError(false);
            notify();
          },
          (err) => {
            alert(err);
          }
        );
    }
  }
  return (
    <>
      <div className="footer">
        <div className="background" />
        <div className="more">
          <div className="social">
            <a
              target="_blank"
              href={`https://wa.me/5517992585165?text=${encodeURIComponent(
                text
              )}`}>
              <motion.span variants={animations} animate="blink">
                Whatsapp:
              </motion.span>
              <p>(17)99258-5168</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eric-alves-frota-310731266/">
              <motion.span variants={animations} animate="blink">
                Linkedin:
              </motion.span>{" "}
              <p>Eric Alves Frota</p>
            </a>
            <a target="_blank" href="https://github.com/EricFrota-Dev">
              <motion.span variants={animations} animate="blink">
                Github:
              </motion.span>{" "}
              <div>EricFrota-Dev</div>
            </a>
            <a target="_blank" href="#">
              <motion.span variants={animations} animate="blink">
                e-mail:
              </motion.span>{" "}
              <p>ericeaf@hotmail.com</p>
            </a>
          </div>
          <div className="location">
            <h1>Localidade</h1>
            <p>São José do Rio Preto-SP</p>
          </div>
        </div>
        <div className="email_container">
          <form className="form" onSubmit={(e) => sendEmail(e)}>
            <h1 className="title">Contate-me:</h1>

            <div>
              {onError && !name && <p className="error">*campo obrigatório</p>}
              <input
                className="input"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              {onError && !email && <p className="error">*campo obrigatório</p>}
              {onError && !regex.test(email) && email && (
                <p className="error">*digite um email valido</p>
              )}
              <input
                className="input"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              {onError && !message && (
                <p className="error">*campo obrigatório</p>
              )}
              <textarea
                className="textarea"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <motion.button
              className="form-btn"
              type="submit"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}>
              Enviar
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
