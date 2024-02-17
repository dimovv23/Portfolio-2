import { tecnologies } from "../constants/constants";
import Reveal from "./utils/Reveal";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <Reveal>
      <div className="technologies">
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-code-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
          </svg>
          Used technologies
        </h3>
        <div className="used-technologies">
          {tecnologies.map((tecnology) => (
            <motion.span
              drag
              dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              className="chip"
            >
              {tecnology}
            </motion.span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default Technologies;
