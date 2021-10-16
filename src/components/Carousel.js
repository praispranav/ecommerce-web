import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "../elements/IconButton";
import { BsBagCheckFill } from "react-icons/bs"

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 0 5px;
  border: 2px solid ${Colors.Primary};
  background: ${(props) => (props.active ? Colors.Primary : "white")};
  transition: 0.4s;
  &:hover {
    background: ${Colors.PrimaryLight};
    transition: 0.4s;
  }
`;

const Image = styled.img`
  transition: 0.4s;
`;

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1616646621779-f9e794a154eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80",
    headerText: "Pre-Order ",
    headerText2: "Exclusive Watch",
    description: "From Samsung Galaxy Watch Strap worth RM109",
    actionButton: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634173142839-39b97f63e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    headerText: "Apple ",
    headerText2: "Airpod 2",
    description: "Discounted Price $99",
    actionButton: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634136450434-682db55b28c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    actionButton: "",
    headerText: "Wifi ",
    headerText2: "Security Camera",
    description: "Free Gift Worth $80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616646621779-f9e794a154eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80",
    headerText: "Apple ",
    headerText2: "Iphone 13",
    actionButton: "",
    description: "Free Apple Earpod",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634136450434-682db55b28c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    headerText: "Ipad ",
    headerText2: "2Gen 128Gb",
    actionButton: "",
    description: "Free Apple Pencil",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616646621779-f9e794a154eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80",
    headerText: "Pre Order ",
    actionButton: "",
    headerText2: "Exclusive",
    description: "Free Gift Worth $30",
  },
];

const autoplay = true;
const interval = 2000;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const refreshImage = (item) => {
    return item;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Function Called");
      const dataLength = data.length;
      if (dataLength - 1 > activeIndex) {
        setActiveIndex((prevState) => prevState + 1);
      } else {
        setActiveIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className="w-100"
      style={{
        height: "500px",
        backgroundColor: "rgb(240,240,240)",
        position: "relative",
      }}
    >
      <div
        className="container d-flex flex-column h-100 justify-content-center"
        style={{ overflow: "hidden" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="mx-5 px-5">
            <AnimatePresence>
              {data.map((item, index) => (
                <>
                  {index === activeIndex && (
                    <>
                      <motion.h1
                        initial={{ y: -20, x: 10 }}
                        animate={{ y: 0, x: 0 }}
                      >
                        {data[activeIndex].headerText}
                      </motion.h1>
                      <motion.h1
                        className="my-3"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                      >
                        {data[activeIndex].headerText2}
                      </motion.h1>
                      <motion.p initial={{ x: 20 }} animate={{ x: 0 }}>
                        {data[activeIndex].description}
                      </motion.p>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1}}>

                      <IconButton
                        background={"black"}
                        className="my-3 px-4 py-2 d-flex align-items-center"
                        style={{ borderRadius: "30px", fontWeight: '500' }}
                        hover={Colors.PrimaryLight}
                        >
                        <BsBagCheckFill className="me-2" />  Shop Now
                      </IconButton>
                        </motion.div>
                    </>
                  )}
                </>
              ))}
            </AnimatePresence>
          </div>
          {data.map((item, index) => (
            <>
              {/* <AnimatePresence> */}
              {index === activeIndex && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}
                  src={data[activeIndex].image}
                  alt="None"
                  style={{ width: "500px", height: "400px" }}
                />
              )}
              {/* </AnimatePresence> */}
            </>
          ))}
        </div>
        {/* <img src={data} /> */}
      </div>

      <BubbleContainer>
        {data.map((item, index) => (
          <Bubble
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          ></Bubble>
        ))}
      </BubbleContainer>
    </div>
  );
}
