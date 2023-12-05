"use client";
import React from "react";
import { motion } from "framer-motion";

function Doodle() {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  const faddedAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="">
      <header>
        <div className="flex m-4 justify-between mx-20 items-center  ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="143" height="54">
              <motion.g
                transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition}
              >
                <motion.path
                  d="M0 270 l0 -220 35 0 35 0 0 95 0 95 45 0 c43 0 45 1 45 30 0 29 -2
            30 -45 30 l-45 0 0 65 0 65 55 0 c54 0 55 0 55 30 l0 30 -90 0 -90 0 0 -220z"
                  fill="transparent"
                  strokeWidth="12"
                  stroke="rgba(255, 255, 255, 0.69)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M273 480 c-46 -18 -55 -59 -51 -226 3 -140 5 -155 24 -175 29 -28 92
            -36 132 -15 43 22 54 66 50 206 l-3 115 -32 3 -33 3 0 -128 c0 -70 -4 -134 -9
            -141 -4 -8 -19 -12 -32 -10 l-24 3 0 155 0 155 73 3 c46 2 79 -2 88 -9 11 -9
            14 -44 14 -153 0 -122 3 -145 20 -173 31 -52 116 -58 160 -11 19 20 20 35 20
            215 l0 193 -30 0 -30 0 0 -179 c0 -188 -4 -207 -47 -199 -16 3 -19 20 -24 158
            -3 85 -9 163 -13 173 -15 33 -60 47 -148 46 -46 0 -93 -4 -105 -9z "
                  strokeWidth="12"
                  stroke="rgba(255, 255, 255, 0.69)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M730 460 c0 -30 0 -30 58 -30 32 0 63 -5 70 -12 17 -17 17 -279 0
            -296 -7 -7 -25 -12 -40 -12 l-28 0 0 140 0 140 -30 0 -30 0 0 -170 0 -170 65
            0 c78 0 122 19 132 58 10 35 10 289 0 324 -10 39 -54 58 -132 58 l-65 0 0 -30z"
                  fill="transparent"
                  strokeWidth="12"
                  stroke="rgba(255, 255, 255, 0.69)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M960 482 c0 -4 18 -62 40 -127 35 -105 40 -130 40 -212 l0 -93 30 0
            30 0 0 88 c0 77 5 104 44 220 l45 132 -33 0 c-33 0 -33 -1 -56 -81 -25 -89
            -27 -88 -56 14 -18 65 -20 67 -51 67 -18 0 -33 -4 -33 -8z "
                  fill="transparent"
                  strokeWidth="12"
                  stroke="rgba(255, 255, 255, 0.69)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M1200 482 c0 -4 18 -62 40 -127 35 -105 40 -130 40 -212 l0 -93 30 0
            30 0 0 88 c0 77 5 104 44 220 l45 132 -33 0 c-33 0 -33 -1 -56 -81 -14 -49
            -26 -75 -31 -68 -4 7 -15 43 -25 81 -18 67 -18 68 -51 68 -18 0 -33 -4 -33 -8z"
                  fill="transparent"
                  strokeWidth="12"
                  stroke="rgba(255, 255, 255, 0.69)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
              </motion.g>
            </svg>
          </div>
          <div className="">
            {" "}
            <ul className=" flex text-gray-300 gap-4">
              <li>Menu</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className=" m-2 bg-gray-800  rounded-md p-2">Login</button>
          </div>
        </div>
      </header>
      <section className="bg-black h-screen mx-20 ">
        <div className=" mt-40">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left text-8xl text-gray-300"
          >
            hello...!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left text-3xl my-4 w-[50%] text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorem, cumque officia tenetur aut facere.
          </motion.p>
        </div>
      </section>
      <section className="bg-white h-screen relative ">
        <div className="absolute top-[40%] ">
          <div className="flex">
            <div className=" flex-1"> </div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" text-8xl text-black"
              >
                World...!
              </motion.h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1"></div>
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className=" text-3xl my-4 w-full text-black"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolorem, cumque officia tenetur aut facere.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-24 m-10 justify-center">
          <motion.div
            variants={faddedAnimation}
            whileInView="animate"
            initial="initial"
            transition={{ duration: "0.523", ease: "backInOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl">A</h1>
          </motion.div>
          <motion.div
            variants={faddedAnimation}
            whileInView="animate"
            initial="initial"
            transition={{ duration: "0.523", ease: "backInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl">A</h1>
          </motion.div>
          <motion.div
            variants={faddedAnimation}
            whileInView="animate"
            initial="initial"
            transition={{ duration: "0.523", ease: "backInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl">A</h1>
          </motion.div>
          <motion.div
            variants={faddedAnimation}
            whileInView="animate"
            initial="initial"
            transition={{ duration: "0.523", ease: "backInOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl">A</h1>
          </motion.div>
          <motion.div
            variants={faddedAnimation}
            whileInView="animate"
            initial="initial"
            transition={{ duration: "0.523", ease: "backInOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl">A</h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Doodle;
