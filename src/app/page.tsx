"use client";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { log } from "console";

export default function Home() {
  const ref = useRef(null);
  const Isinview = useInView(ref);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    console.log("IN VIEW=", Isinview);
  }, [Isinview]);

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
    <div className="  flex flex-col">
      <motion.div
        // style={{ scaleX: scrollYProgress }}
        style={{ scaleX }}
        className="h-3   origin-left bg-red-600 sticky top-0 z-20"
      ></motion.div>

      <div className=" flex justify-center m-2 ">
        <motion.button
          whileHover={{ backgroundColor: "blue", scale: 1.1, rotate: "2deg" }}
          whileTap={{ scale: 1.5 }}
          whileDrag={{ backgroundColor: "green" }}
          className="bg-blue-500 w-44 p-4 rounded-md"
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          Click
        </motion.button>
      </div>
      <h1 className="text-6xl text-center">sample test</h1>
      <div className=" flex gap-2 justify-evenly">
        <motion.div
          initial={{ rotate: "0deg", scale: 0 }}
          animate={{ rotate: "360deg", scale: 1 }}
          exit={{ rotate: "0deg", scale: 0 }}
          transition={{ duration: "1", ease: "backInOut" }}
          className="w-[200px] h-[200px] bg-green-600"
        >
          two
        </motion.div>
        <motion.div
          initial={{ rotate: "0deg", scale: 0 }}
          animate={{ rotate: "360deg", scale: 1 }}
          exit={{ rotate: "0deg", scale: 0 }}
          transition={{ duration: "1", ease: "backInOut" }}
          className="w-[200px] h-[200px] bg-green-600"
        >
          two
        </motion.div>
        <motion.div
          initial={{ rotate: "0deg", scale: 0 }}
          animate={{ rotate: "360deg", scale: 1 }}
          exit={{ rotate: "0deg", scale: 0 }}
          transition={{ duration: "1", ease: "backInOut" }}
          className="w-[200px] h-[200px] bg-green-600"
        >
          two
        </motion.div>
        <motion.div
          initial={{ rotate: "0deg", scale: 0 }}
          animate={{ rotate: "360deg", scale: 1 }}
          exit={{ rotate: "0deg", scale: 0 }}
          transition={{ duration: "1", ease: "backInOut" }}
          className="w-[200px] h-[200px] bg-green-600"
        >
          two
        </motion.div>
      </div>
      <h1 className="text-6xl text-center">Sample test</h1>

      <p className=" new text-[50px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolor qui nulla, ratione aperiam nisi distinctio est porro expedita
        sequi. Quibusdam velit earum quisquam consectetur tenetur beatae
        eligendi a vero.
      </p>
      <motion.h1
        initial={{ y: 0, opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: "1", ease: "easeIn" }}
        className=" anim text-[80px] text-center text-gray-600"
      >
        hello world 2
      </motion.h1>
      <div className=" flex gap-2 justify-evenly">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ opacity: 1, y: [0, -100, 500, -250, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: "1", ease: "easeInOut" }}
          className="w-[200px] h-[200px] bg-green-600"
        >
          two
        </motion.div>
        <div className="w-[200px] h-[200px] bg-blue-600">three</div>
        <div className="w-[200px] h-[200px] bg-blue-600">three</div>
        <div className="w-[200px] h-[200px] bg-blue-600">three</div>
      </div>
      <h1 className=" anim text-[80px] text-center text-gray-600">
        hello world
      </h1>
      <p className="text-[50px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolor qui nulla, ratione aperiam nisi distinctio est porro expedita
        sequi. Quibusdam velit earum quisquam consectetur tenetur beatae
        eligendi a vero.
      </p>
      <div className="flex gap-2 justify-evenly m-2">
        <motion.div
          variants={faddedAnimation}
          whileInView="animate"
          initial="initial"
          className="w-[200px] h-[200px] bg-blue-600"
          transition={{ duration: "0.523", ease: "backInOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          three
        </motion.div>
        <motion.div
          variants={faddedAnimation}
          whileInView="animate"
          initial="initial"
          className="w-[200px] h-[200px] bg-blue-600"
          transition={{ duration: "0.523", ease: "backInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          three
        </motion.div>
        <motion.div
          variants={faddedAnimation}
          whileInView="animate"
          initial="initial"
          className="w-[200px] h-[200px] bg-blue-600"
          transition={{ duration: "0.523", ease: "backInOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          three
        </motion.div>
        <motion.div
          variants={faddedAnimation}
          whileInView="animate"
          initial="initial"
          className="w-[200px] h-[200px] bg-blue-600"
          transition={{ duration: "0.523", ease: "backInOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          three
        </motion.div>
      </div>
      <h1 className=" anim text-[80px] text-center text-gray-600">hello</h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[50px] text-center text-green-500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolor qui nulla, ratione aperiam nisi distinctio est porro expedita
        sequi. Quibusdam velit earum quisquam consectetur tenetur beatae
        eligendi a vero.
      </motion.p>
      <div className="h-screen bg-blue-600"></div>
      <motion.div
        className="bg-yellow-400 h-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen"
        style={{
          backgroundColor: Isinview ? "red" : "yellow",
          transition: "2s background",
        }}
      ></motion.div>
    </div>
  );
}
