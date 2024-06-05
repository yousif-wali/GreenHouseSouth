
import React, { useState } from 'react';
import "./css/About.css";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "./utils/motion.ts";
import kawarbg from "./../images/Kawar-White-Circle.png";
import kawar from "./../images/Kawar.png";
import jamesbg from "./../images/James-White-Background.png";
import james from "./../images/James-Leiman.jpg";
export default function About() {
    const [activeIndex, setActiveIndex] = useState(1);
    const images = [james, kawar];
    const backgrounds = [jamesbg, kawarbg];
    const bioTexts = [
        "Dr. James Leiman, an accomplished global business developer, transformational leader and experienced educator, has made impressive strides in driving growth, innovation and strategic change. With over two decades of experience, including ten years in an executive capacity, Dr. Leiman or just “James,” as he likes to be called, has successfully briefed heads of state, CEOs of multi-national companies and ministerial level leaders across the globe. His leadership acumen is further highlighted by his expertise in testifying before the U.S. Senate and several legislatures across the nation. Specializing in change management and strategy, James has made significant contributions to community growth and workforce development. He owns a global consulting firm, offering financial and business development solutions for large-scale projects spanning Africa, Europe, Latin America and the Middle East. As the former Commissioner of the North Dakota Department of Commerce, he executed a transformational economic and marketing posture for the state, which led to the development of $40 billion in projects, effectively transforming the state’s economy. This feat was achieved by skillfully overseeing six different divisions with a budget of $320 million. James has a passion for North Dakota and he remains highly engaged in growing the business community across the state. Prior to his tenure as Commissioner, he served as City Administrator for the City of Ada, managing government and utilities, and significantly improving the city’s financial position. His leadership resulted in two Standard and Poor’s municipal rating increases and millions in grants, loans and investments. In his earlier role at the United States Department of Veterans Affairs, he led the transition from paperbound and manual systems into a Digital Operating Environment. His tenure saw the development of the nation’s third largest public logistics and supply chain program and network, which led to a significant reduction in VA Claim’s backlog, benefiting millions of veterans. James is also a proud Army veteran of Operation Enduring Freedom, an active investor in private equity and has bought, grown and sold several companies. A seasoned educator, Dr. Leiman has taught over 100 graduate and undergraduate courses at renowned institutions across the country in his areas of expertise, including International Business, Supply Chains and Logistics, Business Administration, Economics and National Security. Dr. James Leiman holds a Doctor of Philosophy in Transportation and Logistics, with a concentration in Supply Chain from North Dakota State University, and a Master of Public Administration with a focus on Policy Analysis from Evergreen State College. His academic credentials are further augmented by a Graduate Certificate in Identity Management from the Naval Postgraduate School. With a solid career in leadership, strategic transformation, and global business development, Dr. Leiman continues to harness his multifaceted skills and expertise to drive impactful change, at the local, national and global level.",
        "In his current role as the Director of Business Development at The Greenhouse, Kawar Farok plays a pivotal role in the day-to-day operations and serves as a connector to clients and partners. Kawar demonstrates a unique ability to diagnose challenges faced by businesses and provides strategic solutions to guide them toward success. Bringing a wealth of experiences and a passionate commitment to community service, Kawar is a valuable asset to The Greenhouse team. Kawar’s journey began in Kurdistan, and in 1992, he, along with his family, immigrated to the U.S. to escape persecution under Saddam Hussein. Raised in Fargo/Moorhead, his early experiences involved providing translation services for his family, instilling in him the values of active listening and proposing effective solutions. Transitioning into adulthood, he pursued a degree in Political Science at MSUM. Early in his career, Kawar dedicated eight years to the banking sector, progressing to roles such as AVP of Banking, Loan Officer, and leading the development of the online lending team. Fueled by a passion for community service, Kawar founded the Kurdish-American Development Organization in 2020, addressing workforce development issues in North Dakota and Minnesota. His commitment to connecting businesses with the right individuals for their workforce needs became evident during his role as Executive Director. Before joining The Greenhouse, Kawar served as a Relationship Executive specializing in Workforce Development and Recruitment. He played a crucial role in educating company executives on the workforce shortage issue and the strategic significance of hiring international workers. Kawar is not only a dedicated professional but also a devoted husband and father to two children. Outside of work, he finds joy in participating in sports through recreational leagues and immerses himself in the excitement of Sunday football games."
    ];

    const names = [
        [
            {name: "Dr. James Leiman", title: "Director"}
        ],
        [
            {name: "Kawar Farok", title: "Director of Business Development"}
        ]
    ];

    const offerings = [
        [
            {name: "Supply Chain & Logistics", level: 90},
            {name: "Taxes & Incentives", level: 95},
            {name: "Government Affairs & Policy", level: 98},
            {name: "Growing & Scaling Businesses", level: 90},
            {name: "Exit/Succession Coaching", level: 86},
            {name: "Keynote Speaking", level: 85},
            {name: "AI Use in Business", level: 99}
        ],
        [
        { name: "Growing & Scaling Businesses", level: 95 },
        { name: "Business Development", level: 89 },
        { name: "Community Building", level: 85 },
        { name: "Workforce Development & Attraction", level: 90 },
        { name: "Government Affairs & Policy", level: 97 },
        { name: "Speaking", level: 91 },
        { name: "Fundraising", level: 90 }
        ]
    ];
    const bigwhy = [
        "I love helping companies and leaders achieve their very best! This has been the most rewarding aspect of my career- watching people and organizations realize their full potential.",
        "At the core of my professional drive is helping businesses find solutions to their problems. I am driven by the purpose of bridging gaps, fostering growth and facilitating strategic solutions for businesses navigating the ever-evolving landscape. My dedication to business development aligns seamlessly with my overarching goal – making a positive impact by addressing the pressing issues faced by organizations and contributing to a more resilient and thriving business ecosystem."
    ];

    const rotateCarousel = (index : any) => {
        return `rotate(${-((index - 1) * 180)}deg)`;
    };

    const handleControlClick = (index:any, event:any) => {
        event.preventDefault();
        setActiveIndex(index);
        
    };

    return (
        <section className='aboutSection position-relative d-flex flex-column justify-content-center align-items-center z-90'>
            <motion.div initial="hidden" animate="visible" className="slideshow p-0">
                <div className="carousel" style={{ transform: rotateCarousel(activeIndex) }}>
                    {images.map((img, index) => (
                        <div key={index} className={`slide ${activeIndex === index + 1 ? 'active' : ''}`}>
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {
                names?.map((name, i)=>{
                    return(
                        <div key={i} className={`Names ${activeIndex === i + 1 ? '' : 'hidden'}`}>
                            {name?.map((text, index) => (
                                <div key={index}>
                                    <motion.h1 variants={slideInFromRight(0.9)}>{text.name}</motion.h1>
                                    <motion.p variants={slideInFromLeft(0.8)} className='max-w-[600px]'>{text.title}</motion.p>
                                </div>
                            ))}
                        </div>
                    );
                })
                }
                <section className='WhyContainer'>
                    <motion.h1 variants={slideInFromRight(1)}>My big Why</motion.h1>
                    {bigwhy.map((text, index) => (
                        <motion.div key={index}
                        variants={slideInFromLeft(0.9)}
                            className={`${activeIndex === index + 1 ? '' : 'hidden'}`}
                            data-name={index + 1}>
                            {text}
                        </motion.div>
                    ))}
                </section>
                <motion.div variants={slideInFromRight(1)} className="controls">
                    {backgrounds.map((bg, index) => (
                        <a key={index} href="#"
                           onClick={(e) => handleControlClick(index + 1, e)}
                           className={`control ${activeIndex === index + 1 ? 'active' : ''}`}>
                            <img src={bg} alt={`Background ${index + 1}`} />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
            <section className='Bio'>
                {bioTexts.map((text:any, index:number) => (
                    <div key={index}
                        className={`bioText text ${activeIndex === index + 1 ? '' : 'hidden'}`}
                        data-name={index + 1}>
                        {text}
                    </div>
                ))}
            </section>
            {
                offerings.map((elem, i)=>{
                    return(
                        <div key={i} className={`container p-4 ${activeIndex === i + 1 ? '' : 'hidden'}`}>
                            {elem.map((offering, index) => (
                                <div key={index} className="progress-container">
                                    <label>{offering.name}</label>
                                    <div className="progress-bar" style={{ width: `${offering.level}%` }}></div>
                                </div>
                            ))}
                        </div>
                    );
                })
            }
        </section>
    );
}
