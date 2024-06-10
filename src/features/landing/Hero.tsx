import { CircleSvg } from "@/components/svg/CircleSvg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main className="relative m-auto my-12 flex min-h-[700px] max-w-7xl items-center gap-4 px-0 max-lg:flex-col md:px-4">
      <div className="relative flex flex-1 flex-col items-start gap-4 md:w-auto lg:gap-6 xl:gap-8">
        <Typography variant="h1" className="!leading-tight">
          Bienvenue
          <span className="relative inline-block rotate-2">
            <span>chez Lemurian Agency</span>
            <CircleSvg className="color-gradient-to-r from-orange-500 to-orange-800 fill-primary" />
          </span>
        </Typography>
        <Typography variant="large">
          Je suis Andy Ramaroson, un développeur web FullStack JS basée sur
          Bordeaux (N. Aquitaine, 33) et je réalise des applications web sur
          mesure en me basant sur des technologies web modernes.
        </Typography>
        <div className="flex flex-row ">
          <Link
            target="blank"
            href="https://calendly.com/lemurian-agency/30min"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "default",
              }),
              "mr-4",
            )}
          >
            <Calendar size={20} className="mr-2" />
            Prendre rendez-vous
          </Link>
          <Link
            target="blank"
            href="https://andyramaroson.com"
            className={cn(buttonVariants({ size: "lg", variant: "default" }))}
          >
            <Rocket size={20} className="mr-2" />
            Projets
          </Link>
        </div>

        <ReviewSmall
          stars={5}
          avatars={[
            "https://i.pravatar.cc/300?u=1",
            "https://i.pravatar.cc/300?u=2",
            "https://i.pravatar.cc/300?u=3",
            "https://i.pravatar.cc/300?u=4",
            "https://i.pravatar.cc/300?u=5",
          ]}
        >
          220+ utilisateurs
        </ReviewSmall>
      </div>

      <div className="flex flex-1 justify-end ">
        <img
          src="/images/hero1.jpg"
          className="max-w-lg rounded-lg object-contain max-md:max-w-md"
          alt="Hero images"
        />
      </div>
    </main>
  );
};
