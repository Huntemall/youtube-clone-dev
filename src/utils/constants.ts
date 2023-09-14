/**
 * Contains demo links, titles, images
 *  Don't remove anything from here (if not sure)
 **/

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ComputerIcon from "@mui/icons-material/Computer";
import LogoImage from "../assets/logo.png";
import demoThumbnailImage from "../assets/demo-thumbnail.png";
import demoProfileImage from "../assets/demo-profile.png";

export const logo: string = LogoImage;

export const categories: { name: string, icon: JSX.Element }[] = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Computerphile", icon: <ComputerIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl: string = demoThumbnailImage;
export const demoChannelUrl: string = "/channel/UC9-y-6csu5WGm29I7JiwpnA";
export const demoVideoUrl: string = "/video/BBJa32lCaaY";
export const demoChannelTitle: string = "Awesome Channel";
export const demoVideoTitle: string = "A Random YouTube Video";
export const demoProfilePicture: string = demoProfileImage;