import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center bg-zinc-950 border-t border-zinc-800">
      <p className="text-center">mpixl.com ©{new Date().getFullYear()}  <br/> All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
