import Dipesh from "@/assets/team/dipesh.png";
import Isheta from "@/assets/team/isheta.png";
import Rajat from "@/assets/team/rajat.png";
import Shariq from "@/assets/team/shariq.png";
import { StaticImageData } from "next/image";

export interface ITeamData {
  id: number;
  name: string;
  role: string;
  avatar: StaticImageData;
}

export const teamData: ITeamData[] = [
  {
    id: 1,
    name: "Dipesh Ranjan",
    role: "Team Leader & Full Stack Developer",
    avatar: Dipesh,
  },
  {
    id: 2,
    name: "Isheta Aggarwal",
    role: "UI/UX Designer",
    avatar: Isheta,
  },
  {
    id: 3,
    name: "Rajat Srivastava",
    role: "Backend Developer",
    avatar: Rajat,
  },
  {
    id: 4,
    name: "Mohd Shariq",
    role: "Content Writer",
    avatar: Shariq,
  },
];
