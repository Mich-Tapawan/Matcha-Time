import aikoImg from "../assets/about/aiko.jpg";
import sorenImg from "../assets/about/soren.jpg";
import kenzoImg from "../assets/about/kenzo.jpg";
import aldenImg from "../assets/about/alden.jpg";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const aboutTeamMembers: TeamMember[] = [
  {
    id: "aiko",
    name: "Aiko Tanaka",
    role: "Lead Chasen Master",
    image: aikoImg,
    imageAlt: "Aiko Tanaka whisking ceremonial matcha",
  },
  {
    id: "soren",
    name: "Soren Miller",
    role: "Sourcing Specialist",
    image: sorenImg,
    imageAlt: "Soren Miller reviewing tea leaves",
  },
  {
    id: "kenzo",
    name: "Master Kenzo",
    role: "Cultural Liaison",
    image: kenzoImg,
    imageAlt: "Master Kenzo in traditional tea attire",
  },
  {
    id: "alden",
    name: "Alden Richards",
    role: "Lead Quality Curator",
    image: aldenImg,
    imageAlt: "Alden Reyes inspecting matcha quality",
  },
];
