import { BiBriefcaseAlt, BiHomeAlt } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";
import covidProjectImage from "./assests/covid-tracker-group.svg";
import mailProjectImage from "./assests/Mail-client-Group.svg";
import chitChatProjectImage from "./assests/chit-chat-app.svg";

export const navItems = [
  {
    name: "Home",
    icon: <BiHomeAlt className="mobile-nav-icon" />,
  },
  {
    name: "Work",
    icon: <BiBriefcaseAlt className="mobile-nav-icon" />,
  },
  {
    name: "About",
    icon: <FiUser className="mobile-nav-icon" />,
  },
  {
    name: "Connect",
    icon: <FiMail className="mobile-nav-icon" />,
  },
];

export const projects = [
  {
    id: 1,
    name: "Covid Cases Tracker",
    subtitle: "React Application",
    description: `A Graphical Representation of COVID cases, its growth and its recovery for all the countries in the world.`,
    url: "https://extraordinary-manatee-3ba453.netlify.app/",
    pic: (
      <img
        src={covidProjectImage}
        alt="Covid-Project"
        className="col-12 col-md-9 col-lg-8"
      />
    ),
  },
  {
    id: 2,
    name: "Movie Tickets Booking App",
    subtitle: "React Application",
    description: `Developed responsive Movie tickets booking application shows all the movies available and locations. Used React.js for frontend, Node.js and Express.js for handling REST API calls.
    Implemented Firebase Authentication.`,
    url: "https://enchanting-marzipan-48dc7d.netlify.app/",
    pic: (
      <img
        src={mailProjectImage}
        alt="Movie-Tickets-Booking-App"
        className="col-12 col-md-9 col-lg-8"
      />
    ),
  },
  {
    id: 3,
    name: "Chit Chat App",
    subtitle: "UI Concept",
    description: `Designed User Interface for an application which connects people and groups. Clean UI and pleasant colours has been included for better User Experience. Used Figma for Designing and Prototyping.`,
    url: "https://dribbble.com/shots/18177222/?apply_modal=true&from_modal_cta=true&utm_source=Clipboard_Shot&utm_campaign=ypotti&utm_content=Chit%20-%20Chat%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ypotti&utm_content=Chit%20-%20Chat%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ypotti&utm_content=Chit%20-%20Chat%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ypotti&utm_content=Chit%20-%20Chat%20App&utm_medium=Social_Share",
    pic: (
      <img
        src={chitChatProjectImage}
        alt="Chit-Chat-App"
        className="col-12 col-md-9 col-lg-8"
      />
    ),
  },
];
