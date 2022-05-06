import { BiBriefcaseAlt, BiHomeAlt } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";
import covidProjectImage from "./assests/covid-tracker-group.svg";
import mailProjectImage from "./assests/Mail-client-Group.svg";

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
    description: `There are many variations of passages of Lorem Ipsum available, but
    the majority have suffered alteration in some form, by injected
    humour, or randomised words which don't look even slightly
    believable.`,
    url: "#",
    pic: (
      <img
        src={covidProjectImage}
        alt="Covid-Project"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
  {
    id: 2,
    name: "Mail client App",
    subtitle: "MERN Application",
    description: `There are many variations of passages of Lorem Ipsum available, but
    the majority have suffered alteration in some form, by injected
    humour, or randomised words which don't look even slightly
    believable.`,
    url: "#",
    pic: (
      <img
        src={mailProjectImage}
        alt="Mail-Project"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
];
