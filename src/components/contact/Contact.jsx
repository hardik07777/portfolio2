import "./Contact.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import contactImage from "../../assets/videos/contact.jpg";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const formData = new FormData(form.current);

      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_subject", "New Portfolio Contact!");

      const response = await fetch(
        "https://formsubmit.co/ajax/hardikgoel07@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        form.current.reset();
        setStatus("success");

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      }
    } catch (err) {
      console.error(err);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section className="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-label">
          <div className="label-line"></div>
          <span>CONTACT</span>
        </div>

        <h2>
          Let's build something
          <br />
          Extraordinary.
        </h2>
      </motion.div>

      <div className="contact-container">

        <motion.div
          className="contact-media"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={contactImage}
            alt="Workspace"
            className="contact-image"
          />
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p>
            Whether it's an internship,
            collaboration, or just saying hello,
            I'd love to hear from you.
          </p>

          {status === "success" && (
            <div className="success-message">
              ✓ Message received. I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="error-message">
              ✕ Something went wrong. Please try again.
            </div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Sent ✓"
                : "Send Message →"}
            </button>

          </form>

        </motion.div>

      </div>

      <motion.div
        className="contact-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="quote-line"></div>

        <h3>
          "Let's push past our limits."
        </h3>

        <span>— Black Clover</span>
      </motion.div>

    </section>
  );
}