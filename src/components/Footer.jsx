import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// import { submitFormData } from "../firebase/firestoreFunctions";
import CircularProgress from "@mui/material/CircularProgress";
import { socials } from "../utils/data";
import emailjs from "emailjs-com";

const titleVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const formVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export default function Footer({ showPopUp }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerOptions = {
    name: {
      required: "Required",
    },
    email: {
      required: "Required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
    message: {
      required: "Required",
    },
  };

  const handleRegistration = async (formData) => {
    reset();
    console.log(formData);
    setLoading(true);
    // await submitFormData(formData);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          console.log("Email sent successfully");
          setLoading(false);
          showPopUp();
        },
        (error) => {
          console.log("Email send error:", error.text);
          console.log("Service Id:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
          console.log("User Id:", process.env.REACT_APP_EMAILJS_USER_ID);
        }
      );
  };

  return (
    <div className="container">
      <motion.h2
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="section-title"
      >
        Get in touch
      </motion.h2>
      <motion.div
        variants={formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="contact-box"
      >
        <form action="" noValidate onSubmit={handleSubmit(handleRegistration)}>
          <div className="form-label">
            {" "}
            <label htmlFor="name" className="name">
              <input
                type="text"
                placeholder="Your name"
                id="name"
                {...register("name", registerOptions.name)}
              />
              <p className="error">
                {errors?.name && <em>{errors.name.message}</em>}
              </p>
            </label>
          </div>
          <div className="form-label">
            <label htmlFor="email" className="email">
              <input
                type="email"
                placeholder="Your email"
                id="email"
                {...register("email", registerOptions.email)}
              />
              <p className="error">
                {errors?.email && <em>{errors.email.message}</em>}
              </p>
            </label>
          </div>
          <div className="form-label">
            <label htmlFor="message" className="message">
              <textarea
                type="text"
                placeholder="Message"
                id="message"
                {...register("message", registerOptions.message)}
              ></textarea>
              <p className="error">
                {errors?.message && <em>{errors.message.message}</em>}
              </p>
            </label>
          </div>
          <div className="btn-line">
            <button type="submit">
              {loading ? (
                <CircularProgress
                  style={{
                    color: "#f4eee4",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ) : (
                <p style={{ fontWeight: "700" }}>
                  <em>Submit</em>
                </p>
              )}
            </button>
          </div>
        </form>
        <div className="social-box">
          <div className="name-line">
            <div className="dash"></div>
            <h3 className="project-name">Leave me a message</h3>
          </div>
          <div>
            <p className="reach-txt">
              Have a project in mind or need more information? I'd love to hear
              from you! <br /> Please feel free to reach out by filling out the
              form, and I’ll get back to you as soon as possible. Let’s bring
              your ideas to life!
            </p>
            <div>
              <p style={{ fontWeight: "700" }}>
                You can also reach me on any of the following platforms:
              </p>
              <div className="socials">
                {socials.map((social, index) => (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <img
                      src={social.image}
                      alt={`${social.name} icon`}
                      className="soc"
                    ></img>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="footnote">
        <p style={{ color: "#fd4659" }}>
          <em>Built by Onagaumah Emmanuel, 2024.</em>
        </p>
      </div>
    </div>
  );
}
