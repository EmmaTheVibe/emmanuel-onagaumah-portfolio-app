import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { submitFormData } from "./firebase/firestoreFunctions";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function Footer({ showPopUp }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerOptions = {
    name: {
      required: "Required",
      pattern: {
        value: /^[A-Za-z ]+$/i,
        message: "Wrong format, letters only",
      },
    },
    email: {
      required: "Required",
      //   pattern: {
      //     value: /^[A-Za-z ]+$/i,
      //     message: "Wrong format, letters only",
      //   },
    },
    message: {
      required: "Required",
    },
  };

  const handleRegistration = async (formData) => {
    reset();
    console.log(formData);
    setLoading(true);
    await submitFormData(formData);
    setLoading(false);
    showPopUp();
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
      <form action="" noValidate onSubmit={handleSubmit(handleRegistration)}>
        <div className="form-label">
          {" "}
          <label htmlFor="name" className="name">
            <input
              type="text"
              placeholder="Your name"
              id="name"
              {...register("name", registerOptions.name)}
              //   style={{
              //     border: errors?.name && "1.3px solid hsl(0, 100%, 66%)",
              //   }}
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
              //   style={{
              //     border: errors?.email && "2px solid hsl(0, 100%, 66%)",
              //   }}
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
              //   style={{
              //     border: errors?.message && "2px solid hsl(0, 100%, 66%)",
              //   }}
            ></textarea>
            <p className="error">
              {errors?.message && <em>{errors.message.message}</em>}
            </p>
          </label>
        </div>

        <button type="submit">
          {loading ? (
            <CircularProgress
              style={{
                color: "#f4eee4",
                width: "15px",
                height: "15px",
              }}
            />
          ) : (
            <p style={{ fontWeight: "700" }}>
              <em>Submit</em>
            </p>
          )}
        </button>
      </form>
    </div>
  );
}
