import ProfilePng from "./profile.jpeg";
import CssIcon from "./css.svg";
import Html from "./Html.png";
import Tailwindcss from "./tailwindcss.png";
import Javascript from "./js.png";
import ReactIcon from "./react.png";
import NextJsIcon from "./nextjs.svg";
import PythonIcon from "./python.webp";
import DjangoIcon from "./django.png";
import NodejsIcon from "./nodejs.png";
import PrismaIcon from "./prisma.png";
import MongodbIcon from "./Mongodb.png";
import PostegreSqlIcon from "./postgresql.webp";
import MysqlIcon from "./mysql.png";
import GitIcon from "./git.png";
import DockerIcon from "./docker.webp";
import BudgetTrackerImage from "./budgettracker.png";
import ChatAppImage from "./chat-app.png";

export const MenuItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },

  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const assets = {
  profile_png: ProfilePng,
};

export const skills = [
  Html,
  CssIcon,
  Tailwindcss,
  Javascript,
  ReactIcon,
  NextJsIcon,
  PythonIcon,
  DjangoIcon,
  NodejsIcon,
  PrismaIcon,
  MysqlIcon,
  PostegreSqlIcon,
  MongodbIcon,
  GitIcon,
  DockerIcon,
];

export type ProjectType = (typeof projects)[0];

export const projects = [
  {
    img: BudgetTrackerImage,
    title: "BudgetTracker",
    description:
      "A full-stack budget tracker built with Next.js, Tailwind CSS, and PostgreSQL, offering features like income/expense tracking, category-based reports, responsive design, and intuitive UI—perfect for managing personal finances effectively.",
    languages: ["Next.js", "Tailwind Css", "Prisma"],
    link: "https://budget-tracker-rust-six.vercel.app/",
  },
  {
    img: ChatAppImage,
    title: "MessageMe Realtime Chat",
    description:
      "Developed a full-stack chat application using Django (backend) and Next.js (frontend). Integrated Google OAuth authentication, WebSocket-based real-time messaging, one-to-one chat, and typing indicators. Designed with a responsive UI to ensure seamless, secure, and instant communication between users.",
    languages: ["Next.js", "Tailwind Css", "Django"],
    link: "https://github.com/kyawsanoo2364/MessageMe-Realtime-Chat",
  },
];
