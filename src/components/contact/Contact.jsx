import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinFill, BsFillTelephoneFill } from "react-icons/bs";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kn9pite", "template_y19wuce", formRef.current, "6Msphb2xhZiUv-SYT")
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="contact"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 className="font-semibold" variants={variants}>Inizia un <p className="text-[aqua] inline">progetto</p> con noi!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 style={{ display: "flex", alignItems: "center", marginBottom: "8px"}}>
            <AiOutlineMail size={25} style={{ color: "#cf8bea", marginRight: "12px" }} />
            Email
          </h2>
          <a href="mailto:lorenzoronconi60@gmail.com">
            <span style={{ fontWeight: "bold" }}>lorenzoronconi60@gmail.com</span>
          </a>
          <a href="mailto:federicocervelli01@gmail.com">
            <span style={{ fontWeight: "bold" }}>federicocervelli01@gmail.com</span>
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <BsPinFill size={25} style={{ color: "#cf8bea", marginRight: "12px" }} />
            Dove siamo
          </h2>
          <a
            href="https://www.google.com/maps?q=Perugia, Italia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ fontWeight: "bold" }}>Perugia, Italia</span>
          </a>
        </motion.div>
        <div className="item">
          <h2 style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <BsFillTelephoneFill size={21} style={{ color: "#cf8bea", marginRight: "12px" }} />
            Telefono
          </h2>
          <a href="tel:+393318389305">
            <span style={{ fontWeight: "bold" }}>+39 3318389305</span>
          </a>
        </div>
      </motion.div>
      
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5, duration: 1 }}
        >
          <input type="text" required placeholder="Nome" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Messaggio" name="message" />
          <button>Invia</button>
          {error && "Errore durante la consegna della mail, ti preghiamo di riprovare o contattare il numero di telefono specificato"}
          {success && "Email inviata correttamente, ti risponderemo a breve!"}
        </motion.form>
    </motion.div>
  );
};

export default Contact;