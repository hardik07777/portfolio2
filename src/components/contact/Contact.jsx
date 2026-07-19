import "./Contact.css";
import { motion } from "framer-motion";
import contactImage from "../../assets/videos/contact.jpg";


export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        {/* LEFT */}

        <motion.div
          className="contact-media"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

              <img
        src={contactImage}
        alt="Workspace"
        className="contact-image"
    />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span>CONTACT</span>

          <h2>
            Let's Build
            <br />
            Something Great.
          </h2>

          <p>
            Whether it's an internship,
            collaboration or just saying hello,
            I'd love to hear from you.
          </p>

          <form
            action="https://formsubmit.co/hardikgoel07@gmail.com"
            method="POST"
          >

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />

            <textarea
              name="Message"
              placeholder="Tell me about your project..."
              rows="6"
              required
            />

            <button type="submit">
              Send Message →
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