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
        <motion.h1 variants={variants}>Inizia un progetto con noi!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 style={{ display: "flex", alignItems: "center", marginBottom: "8px"}}>
            <AiOutlineMail size={25} style={{ color: "orange", marginRight: "12px" }} />
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
            <BsPinFill size={25} style={{ color: "orange", marginRight: "12px" }} />
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
            <BsFillTelephoneFill size={21} style={{ color: "orange", marginRight: "12px" }} />
            Telefono
          </h2>
          <a href="tel:+393318389305">
            <span style={{ fontWeight: "bold" }}>+39 3318389305</span>
          </a>
        </div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="phoneSvg"
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
              stroke="orange"
              stroke-width="0.2"
              stroke-linecap="round"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Nome" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Messaggio" name="message" />
          <button>Invia</button>
          {error && "Errore durante la consegna della mail, ti preghiamo di riprovare o contattare il numero di telefono specificato"}
          {success && "Email inviata correttamente, ti risponderemo a breve!"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;