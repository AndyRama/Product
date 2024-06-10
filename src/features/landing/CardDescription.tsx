"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type CardDescriptionProps = {
  className?: string;
};

const CardDescription: React.FC<CardDescriptionProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);

  const cardDescriptionContent = {
    heading: {
      title: "À propos de moi",
      subTitle: "quelques mots",
    },
    content: {
      img: "/images/andy.jpeg",
      descriptions: [
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
      ],
    },
  };

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-15 relative z-[5] mx-auto mt-10 text-center md:mt-0 lg:mb-12 lg:max-w-xl">
          {cardDescriptionContent.heading.subTitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="mb-2 inline-block text-[12.5px] uppercase tracking-[3px] text-gray-500"
            >
              {cardDescriptionContent.heading.subTitle}
            </motion.span>
          )}

          {cardDescriptionContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl"
            >
              {cardDescriptionContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className="justify-center lg:flex">
          <div className="items-center gap-20 lg:flex lg:w-8/12">
            <div className="relative mb-7 lg:order-2 lg:mb-0 lg:w-6/12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="relative z-[2] bg-cover bg-center"
              >
                <Image
                  src={cardDescriptionContent.content.img}
                  className="!h-[400px] !w-full rounded-md object-cover object-center lg:max-w-2xl"
                  alt="Andy profile"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              {cardDescriptionContent.content.descriptions.map(
                (description, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="mb-7 text-xl text-gray-500"
                  >
                    {description}
                  </motion.p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDescription;
