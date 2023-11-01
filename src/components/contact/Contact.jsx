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
      className="h-screen max-w-[1366px] m-auto flex flex-col md:flex-row items-center g-[50px] p-10 md:pt-0 md:px-[30px]"
    >
      <motion.div className="flex-1 flex flex-col gap-10 md:gap-10 text-center items-center md:text-left md:items-start mt-[70px] md:mt-0" variants={variants}>
        <motion.h1 className="font-semibold text-[36px] md:text-[100px] md:leading-[88px] md:mb-20" variants={variants}>Inizia un <p className="text-[aqua] inline">progetto</p> con noi!</motion.h1>
        <motion.div variants={variants}>
          <h2 style={{ display: "flex", alignItems: "", marginBottom: "8px" }} className="justify-center md:justify-start">
            <AiOutlineMail size={25} style={{ color: "#cf8bea", marginRight: "12px" }} />
            Email
          </h2>
          <a href="mailto:lorenzoronconi60@gmail.com">
            <span style={{ fontWeight: "bold" }} className="z-999 flex flex-col mb-2 font-bold hover:text-[aqua] duration-500">lorenzoronconi60@gmail.com</span>
          </a>
          <a href="mailto:federicocervelli01@gmail.com">
            <span style={{ fontWeight: "bold" }} className="z-999 flex flex-col font-bold hover:text-[aqua] duration-500">federicocervelli01@gmail.com</span>
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
            className=""
          >
            <span style={{ fontWeight: "bold" }} >Perugia, Italia</span>
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
        className="flex flex-col p-5 md:p-0 md:gap-8 gap-5 md:w-[50%] w-full"
      >
        <input type="text" required placeholder="Nome" name="name" className="p-1 md:p-5 bg-transparent border-[1px] border-white text-white rounded-md" />
        <input type="email" required placeholder="Email" name="email" className="p-1 md:p-5 bg-transparent border-[1px] border-white text-white rounded-md" />
        <textarea rows={8} placeholder="Messaggio" name="message" className="p-1 md:p-5 bg-transparent border-[1px] border-white text-white rounded-md" />
        <button className="p-1 md:p-5 border-none bg-[#cf8bea] cursor-pointer font-extrabold text-[16px] md:text-[18px] rounded-md text-black hover:bg-[#e5a4ff] duration-500">
          Invia
        </button>
        {error && "Errore durante la consegna della mail, ti preghiamo di riprovare o contattare il numero di telefono specificato"}
        {success && "Email inviata correttamente, ti risponderemo a breve!"}
      </motion.form>
    </motion.div>
  );
};

export default Contact;