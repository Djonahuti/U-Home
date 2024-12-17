import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-me" ref={sectionRef}>
      <div className="container-fluid my-5 py-6">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
          >
            <div className="row g-5 mb-1">
              <div className="col-lg-6 col-xs-6">
                <p className="display-6">
                  <i className="bi bi-mortarboard-fill text-gradient"></i> Education
                </p>
              </div>
              <div className="col-lg-6 col-xs-6 mb-0">
                <p className="display-5 mb-0"></p>
              </div>
            </div>
          </motion.div>
          {/* Education Card 1 */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
          >
            <div className="card bg-white shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-litx p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">2019 - 2023</div>
                      <div className="mb-2">
                        <div className="small fw-bolder">
                          National Open University Of Nigeria
                        </div>
                        <div className="small text-muted">Lagos Nigeria</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Bachelor's Degree</div>
                        <div className="small text-muted">Computer Science</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      The B.Sc. Computer Science program provided me with the fundamental
                      knowledge and skills needed to work in various computing areas and
                      develop a strong understanding of applied mathematics.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Education Card 2 */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
          >
            <div className="card bg-white shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-litx p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">2023 - 2024</div>
                      <div className="mb-2">
                        <div className="small fw-bolder">Coding College</div>
                        <div className="small text-muted">Udemy</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Degree</div>
                        <div className="small text-muted">
                          Web Design & Development Mastery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      The "Web Design & Development Mastery" course was exceptionally
                      well-structured, comprehensive, and practical.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
