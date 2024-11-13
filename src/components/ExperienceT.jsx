import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiencesT } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceTCard = ({ experienceT }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experienceT.date}
      iconStyle={{ background: experienceT.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experienceT.icon}
            alt={experienceT.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experienceT.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experienceT.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experienceT.points.map((point, index) => (
          <li
            key={`experienceT-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceT = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Ce que j'ai fait jusqu'à présent
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Expériences Techniques.
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiencesT.map((experienceT, index) => (
            <ExperienceTCard
              key={`experienceT-${index}`}
              experienceT={experienceT}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceT, "workT");