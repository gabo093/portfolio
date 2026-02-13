import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_pagina",
        "template_nbvcrfh",
        form.current,
        "HH0tS8MyO-PHP-hOz",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        },
      );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        If you’d like to know more about me or my work, feel free to send a
        message.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
