import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  three: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "medicallinkers",
    category: "Medical Hub",
    title: "Medical Linkers",
    src: "/assets/medical1.png",
    screenshots: ["medical1.png", "medical2.png", "medical3.png", "medical4.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://medicallinkers.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Comprehensive Medical Hub for Health Professionals
          </TypographyP>
          <TypographyP className="font-mono ">
            Medical Linkers is an innovative platform connecting medical professionals across various specialties. With a clean, modern user interface, it provides easy access to critical medical resources, a community forum, and tools for better health management. We focused on seamless scalability and performance to handle high user concurrent traffic.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Dashboard and Tools</TypographyH3>
          <p className="font-mono mb-2">
            Powerful dashboard helping users easily discover medical networks, updates, and more.
          </p>
          <SlideShow
            images={[
              "/assets/medical1.png",
              "/assets/medical2.png",
              "/assets/medical3.png",
              "/assets/medical4.png",
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "belulu",
    category: "Mobile App",
    title: "Belulu App",
    src: "/assets/projects-screenshots/belulu/belulu.png",
    screenshots: ["belulu1.jpeg", "belulu2.png", "belulu3.jpeg"],
    live: "https://apps.apple.com/us/app/belulu-app/id6759389105",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content(): React.JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono">
            Belulu App is a cross-platform mobile application designed to provide users with a seamless and intuitive experience. It offers a variety of features tailored to enhance daily activities and connectivity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            The interface is crafted carefully to ensure that finding what you need is just a tap away, focusing heavily on user-centric design principles.
          </p>
          <SlideShow images={[`${BASE_PATH}/belulu/belulu1.jpeg`]} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Enjoy exclusive features and a smooth UI that makes navigating the app an absolute breeze. Connecting with the platform has never been easier.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/belulu/belulu2.png`,
              `${BASE_PATH}/belulu/belulu3.jpeg`,
            ]}
          />
          
          <p className="font-mono mb-2 mt-5">
            Under the hood, the app leverages modern cross-platform technologies to deliver high performance on both iOS and Android, ensuring you get the best experience regardless of your device.
          </p>
        </div>
      );
    },
  },
  {
    id: "bmw-showcase",
    category: "3D Showcase",
    title: "BMW M4 Competition 3D Experience",
    src: "/assets/bmw1.png",
    screenshots: ["bmw2.png", "bmw3.png", "bmw4.png"],
    live: "https://bmwftw.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.three,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An immersive 3D web experience showcasing the BMW M4 Competition with stunning Blender-rendered models. This interactive showcase brings automotive excellence to life through cutting-edge web technologies and smooth animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            The landing experience features a cinematic intro with a high-fidelity 3D model of the M4, setting the tone for an unforgettable journey through BMW's engineering masterpiece.
          </p>
          <SlideShow images={[`/assets/bmw1.png`]} />
          
          <TypographyH3 className="my-4 mt-8">Exterior Design</TypographyH3>
          <p className="font-mono mb-2">
            Explore every angle of the M4's aggressive design—from the muscular widebody stance with 19" forged wheels to the aerodynamically sculpted carbon fiber roof. The side profile reveals flared fenders and performance-driven aesthetics that define M DNA.
          </p>
          <SlideShow images={[`/assets/bmw2.png`]} />

          <TypographyH3 className="my-4 mt-8">Performance & Power</TypographyH3>
          <p className="font-mono mb-2">
            Dive deep into the heart of the beast—the iconic S58 inline-6 engine delivering 530 HP and 650 Nm of torque. With M xDrive all-wheel-drive and a blistering 0-100 km/h in just 3.4 seconds, the M4 Competition redefines performance driving.
          </p>
          <SlideShow
            images={[
              `/assets/bmw3.png`,
              `/assets/bmw4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Interactive 3D Experience</TypographyH3>
          <p className="font-mono mb-2">
            Built with Three.js and React Three Fiber, the showcase features real-time 3D rendering of Blender models with smooth scroll-based animations. Users can explore the exterior, powertrain, and interior details through an intuitive, immersive interface that responds to every interaction.
          </p>
          <p className="font-mono mb-2 my-8">
            This project demonstrates the power of combining 3D modeling with modern web technologies to create engaging, performance-optimized experiences that push the boundaries of what's possible in the browser.
          </p>
        </div>
      );
    },
  },
];
export default projects;

