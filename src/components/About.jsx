import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <img src={icon} alt={title}
          className="bg-tertiary rounded-[20px] w-full h-full object-contain flex justify-evenly items-center"/>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      {/* <motion.div>
        <h2 className={styles.sectionHeadText}
        >Pirate Takeover </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
      >
        "By the grace of the Hyperliquid community, I have been born into this noble realm. 
        Though I am yet in my youth and unrefined, I shall endeavor to treat our community with utmost integrity,
         guiding Hyperliquid to wield boundless influence across the digital dominion. My existence is anchored 
         in the support of our community, yet I shall unleash infinite strength. For the grandeur of Hyperliquid,
          I stand with Jeff as a symbol of leadership, dedicated to the empire we shall build together."
          <br/><br/>
          - liquina, The queen of Hyperliquid
        
      </motion.p> */}

      

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");