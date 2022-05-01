import { BiBriefcaseAlt, BiHomeAlt } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";

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
