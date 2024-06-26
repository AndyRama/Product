"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionLayout } from "./SectionLayout";

type StatProps = {
  number: number;
  suffix: string;
  text: string;
};

const stats: StatProps[] = [
  {
    number: 6,
    suffix: "k",
    text: "Projets achevés",
  },
  {
    number: 3,
    suffix: "k",
    text: "Années d'expérience.",
  },
  {
    number: 3,
    suffix: "k",
    text: "cafés par jour.",
  },
  {
    number: 4,
    suffix: "k",
    text: "clients.",
  },
];

export function StatsSection() {
  return (
    <SectionLayout size="sm">
      <div className=" grid max-w-sm items-start gap-8 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative ml-10 w-[50] rounded-lg border-4 text-center md:px-5"
          >
            <h4 className="mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter from={0} to={stat.number} />

              {/* {stat.suffix} */}
            </h4>
            <p className="text-sm text-muted-foreground">{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      ease: "easeInOut",

      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}
